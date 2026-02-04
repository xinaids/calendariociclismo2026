import { useState } from "react";
import { provas2026 } from "../data/provas2026";
import type { Prova, Modalidade, Campeonato } from "../data/provas2026";
import { Modal } from "./Modal";

/* =====================
   UTILIDADES
===================== */

function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function getClasseCampeonato(c: Campeonato): string {
  switch (c) {
    case "Campeonato Gaúcho": return "gaucho";
    case "Campeonato Noroeste": return "noroeste";
    case "Circuito Tchê": return "tche";
    case "Circuito Planalto Médio": return "planalto";
    case "CBC Brasileiro": return "cbc";
    case "Circuito Avulso": return "avulso";
    case "Circuito Centro Norte": return "centronorte";
    case "Campeonato Zona Sul": return "zonasul";
    case "Copa RP": return "coparp";
    default: return "";
  }
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
  "Circuito Centro Norte",
  "CBC Brasileiro",
  "Campeonato Zona Sul",
  "Copa RP",
  "Circuito Avulso",
];

export function Calendar() {
  const [mesAtual, setMesAtual] = useState(() => new Date().getMonth());
  const [selecionadas, setSelecionadas] = useState<Prova[] | null>(null);
  const [modalidade, setModalidade] = useState<Modalidade | "todas">("todas");
  const [busca, setBusca] = useState("");
  const [campeonatosSelecionados, setCampeonatosSelecionados] = useState<Campeonato[]>([]);
  const [menuAberto, setMenuAberto] = useState(false);

  const ano = 2026;
  const primeiroDia = (new Date(ano, mesAtual, 1).getDay() + 6) % 7;
  const diasNoMes = new Date(ano, mesAtual + 1, 0).getDate();

  const provasFiltradas = provas2026.filter((p) => {
    const data = parseLocalDate(p.data);
    return (
      data.getMonth() === mesAtual &&
      (modalidade === "todas" || p.modalidade === modalidade) &&
      (campeonatosSelecionados.length === 0 || campeonatosSelecionados.includes(p.campeonato)) &&
      p.nome.toLowerCase().includes(busca.toLowerCase())
    );
  });

  const getProvasDoDia = (dia: number) =>
    provasFiltradas.filter((p) => parseLocalDate(p.data).getDate() === dia);

  return (
    <>
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar prova..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <select value={modalidade} onChange={(e) => setModalidade(e.target.value as any)}>
          <option value="todas">Todas modalidades</option>
          <option value="estrada">Estrada</option>
          <option value="mtb">MTB</option>
        </select>
        <button className="filter-button" onClick={() => setMenuAberto(true)}>
          Filtrar campeonatos ☰
        </button>
      </div>

      <header className="calendar-header">
        <button onClick={() => setMesAtual(m => Math.max(0, m - 1))}>◀</button>
        <h2>{meses[mesAtual]} 2026</h2>
        <button onClick={() => setMesAtual(m => Math.min(11, m + 1))}>▶</button>
      </header>

      <div className="calendar-grid">
        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => (
          <div key={d} className="day-name">{d}</div>
        ))}

        {Array.from({ length: diasNoMes }).map((_, i) => {
          const dia = i + 1;
          const provas = getProvasDoDia(dia);
          
          // Importante: extrai as classes únicas para aplicar os gradientes CSS
          const classesCampeonatos = [
            ...new Set(provas.map(p => getClasseCampeonato(p.campeonato)))
          ].join(" ");

          return (
            <div
              key={dia}
              className={`day ${provas.length ? "has-event" : ""} ${classesCampeonatos}`}
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

      <div className="month-events">
        <h3>Eventos de {meses[mesAtual]}</h3>
        <table className="month-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #1e293b" }}>
              <th style={{ padding: "8px" }}>Data</th>
              <th style={{ padding: "8px" }}>Campeonato</th>
              <th style={{ padding: "8px" }}>Prova</th>
              <th style={{ padding: "8px" }}>Inscrição</th>
            </tr>
          </thead>
          <tbody>
            {provasFiltradas
              .sort((a, b) => parseLocalDate(a.data).getTime() - parseLocalDate(b.data).getTime())
              .map((p) => (
                <tr key={`${p.data}-${p.nome}`} style={{ borderBottom: "1px solid #1e293b" }}>
                  <td style={{ padding: "8px" }}>{parseLocalDate(p.data).toLocaleDateString("pt-BR")}</td>
                  <td className={getClasseCampeonato(p.campeonato)} style={{ padding: "8px" }}>
                    {p.campeonato}
                  </td>
                  <td style={{ padding: "8px" }}>{p.nome}</td>
                  <td style={{ padding: "8px" }}>
                    {p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer">🔗</a> : "-"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {selecionadas && <Modal provas={selecionadas} onClose={() => setSelecionadas(null)} />}

      {menuAberto && (
        <div className="filter-modal-backdrop" onClick={() => setMenuAberto(false)}>
          <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Filtrar por Campeonato</h3>
            <div className="filter-list" style={{ margin: "15px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              {CAMPEONATOS.map((camp) => (
                <label key={camp} className="filter-option" style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={campeonatosSelecionados.includes(camp)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCampeonatosSelecionados([...campeonatosSelecionados, camp]);
                      } else {
                        setCampeonatosSelecionados(campeonatosSelecionados.filter((c) => c !== camp));
                      }
                    }}
                  />
                  <span className={getClasseCampeonato(camp)}>{camp}</span>
                </label>
              ))}
            </div>
            <div className="filter-actions">
              <button className="secondary" onClick={() => setCampeonatosSelecionados([])}>Limpar</button>
              <button className="primary" onClick={() => setMenuAberto(false)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}