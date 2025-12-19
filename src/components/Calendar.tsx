import { useState } from "react";
import { provas2026 } from "../data/provas2026";
import type { Prova, Modalidade, Campeonato } from "../data/provas2026";
import { Modal } from "./Modal";

/**
 * Cria data no fuso local (SEM bug de timezone)
 */
function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export function Calendar() {
  const [mesAtual, setMesAtual] = useState(0);
  const [selecionadas, setSelecionadas] = useState<Prova[] | null>(null);
  const [modalidade, setModalidade] = useState<Modalidade | "todas">("todas");
  const [campeonato, setCampeonato] = useState<Campeonato | "todos">("todos");
  const [busca, setBusca] = useState("");

  const ano = 2026;

  // segunda-feira como primeiro dia (ISO)
  const primeiroDia =
    (new Date(ano, mesAtual, 1).getDay() + 6) % 7;

  const diasNoMes =
    new Date(ano, mesAtual + 1, 0).getDate();

  /**
   * FILTROS (usando parseLocalDate)
   */
  const provasFiltradas = provas2026.filter((p: Prova) => {
    const data = parseLocalDate(p.data);

    const mesmoMes = data.getMonth() === mesAtual;

    const okModalidade =
      modalidade === "todas" || p.modalidade === modalidade;

    const okCampeonato =
      campeonato === "todos" || p.campeonato === campeonato;

    const okBusca =
      p.nome.toLowerCase().includes(busca.toLowerCase());

    return mesmoMes && okModalidade && okCampeonato && okBusca;
  });

  /**
   * Provas do dia (SEM bug de fuso)
   */
  const getProvasDoDia = (dia: number): Prova[] =>
    provasFiltradas.filter(
      (p: Prova) => parseLocalDate(p.data).getDate() === dia
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

        <select
          value={campeonato}
          onChange={(e) => setCampeonato(e.target.value as any)}
        >
          <option value="todos">Todos circuitos</option>
          <option value="Campeonato Gaúcho">Campeonato Gaúcho</option>
          <option value="Campeonato Noroeste">Campeonato Noroeste</option>
          <option value="Circuito Tchê">Circuito Tchê</option>
          <option value="Circuito Planalto Médio">
            Circuito Planalto Médio
          </option>
        </select>
      </div>

      {/* CABEÇALHO */}
      <header className="calendar-header">
        <button onClick={() => setMesAtual(m => Math.max(0, m - 1))}>◀</button>
        <h2>{meses[mesAtual]} 2026</h2>
        <button onClick={() => setMesAtual(m => Math.min(11, m + 1))}>▶</button>
      </header>

      {/* GRID */}
      <div className="calendar-grid">
        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => (
          <div key={d} className="day-name">{d}</div>
        ))}

        {Array.from({ length: diasNoMes }).map((_, i) => {
          const dia = i + 1;
          const provas = getProvasDoDia(dia);

          return (
            <div
              key={dia}
              className={`day ${provas.length ? "has-event" : ""}`}
              style={dia === 1 ? { gridColumnStart: primeiroDia + 1 } : {}}
              onClick={() => provas.length && setSelecionadas(provas)}
            >
              <span>{dia}</span>

              {provas.length === 1 && (
                <small>{provas[0].nome}</small>
              )}

              {provas.length > 1 && (
                <small>+{provas.length} provas</small>
              )}
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {selecionadas && (
        <Modal
          provas={selecionadas}
          onClose={() => setSelecionadas(null)}
        />
      )}
    </>
  );
}
