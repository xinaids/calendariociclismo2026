import { useState } from "react";
import { provas2026 } from "../data/provas2026";
import type { Prova, Modalidade, Campeonato } from "../data/provas2026";
import { Modal } from "./Modal";

/**
 * Data local sem bug de timezone
 */
function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const CAMPEONATOS: Campeonato[] = [
  "Campeonato Gaúcho",
  "Campeonato Noroeste",
  "Circuito Tchê",
  "Circuito Planalto Médio",
  "CBC Brasileiro",
  "Circuito Avulso",
];

export function Calendar() {
  const [mesAtual, setMesAtual] = useState(0);
  const [selecionadas, setSelecionadas] = useState<Prova[] | null>(null);

  const [modalidade, setModalidade] =
    useState<Modalidade | "todas">("todas");

  const [busca, setBusca] = useState("");

  const [campeonatosSelecionados, setCampeonatosSelecionados] =
    useState<Campeonato[]>([]);

  const [menuAberto, setMenuAberto] = useState(false);

  const ano = 2026;

  const primeiroDia =
    (new Date(ano, mesAtual, 1).getDay() + 6) % 7;

  const diasNoMes =
    new Date(ano, mesAtual + 1, 0).getDate();

  const provasFiltradas = provas2026.filter((p: Prova) => {
    const data = parseLocalDate(p.data);

    const mesmoMes = data.getMonth() === mesAtual;

    const okModalidade =
      modalidade === "todas" || p.modalidade === modalidade;

    const okCampeonato =
      campeonatosSelecionados.length === 0 ||
      campeonatosSelecionados.includes(p.campeonato);

    const okBusca =
      p.nome.toLowerCase().includes(busca.toLowerCase());

    return mesmoMes && okModalidade && okCampeonato && okBusca;
  });

  const getProvasDoDia = (dia: number): Prova[] =>
    provasFiltradas.filter(
      (p) => parseLocalDate(p.data).getDate() === dia
    );

  return (
    <>
      {/* FILTROS */}
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar prova..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <select
          value={modalidade}
          onChange={(e) => setModalidade(e.target.value as any)}
        >
          <option value="todas">Todas modalidades</option>
          <option value="estrada">Estrada</option>
          <option value="mtb">MTB</option>
        </select>

        <button className="filter-button" onClick={() => setMenuAberto(true)}>
          Filtrar campeonatos ☰
        </button>
      </div>

      {/* MODAL DE CAMPEONATOS */}
      {menuAberto && (
        <div className="filter-modal-backdrop">
          <div className="filter-modal">
            <h3>Selecionar Campeonatos</h3>

            {CAMPEONATOS.map((c) => (
              <label key={c} className="filter-option">
                <input
                  type="checkbox"
                  checked={campeonatosSelecionados.includes(c)}
                  onChange={() =>
                    setCampeonatosSelecionados((prev) =>
                      prev.includes(c)
                        ? prev.filter((x) => x !== c)
                        : [...prev, c]
                    )
                  }
                />
                {c}
              </label>
            ))}

            <div className="filter-actions">
              <button
                onClick={() => setCampeonatosSelecionados([])}
                className="secondary"
              >
                Limpar
              </button>

              <button
                onClick={() => setMenuAberto(false)}
                className="primary"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CABEÇALHO */}
      <header className="calendar-header">
        <button onClick={() => setMesAtual(m => Math.max(0, m - 1))}>◀</button>
        <h2>{meses[mesAtual]} 2026</h2>
        <button onClick={() => setMesAtual(m => Math.min(11, m + 1))}>▶</button>
      </header>

      {/* CALENDÁRIO */}
      <div className="calendar-grid">
        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => (
          <div key={d} className="day-name">{d}</div>
        ))}

        {Array.from({ length: diasNoMes }).map((_, i) => {
          const dia = i + 1;
          const provas = getProvasDoDia(dia);
          const temCBC = provas.some(p => p.campeonato === "CBC Brasileiro");

          return (
            <div
              key={dia}
              className={`day ${provas.length ? "has-event" : ""} ${temCBC ? "cbc-event" : ""}`}
              style={dia === 1 ? { gridColumnStart: primeiroDia + 1 } : {}}
              onClick={() => provas.length && setSelecionadas(provas)}
            >
              <span>{dia}</span>
              {provas.length === 1 && <small>{provas[0].nome}</small>}
              {provas.length > 1 && <small>+{provas.length} provas</small>}
            </div>
          );
        })}
      </div>

      {selecionadas && (
        <Modal provas={selecionadas} onClose={() => setSelecionadas(null)} />
      )}
    </>
  );
}
