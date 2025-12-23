import type { Prova } from "../data/provas2026";

type Props = {
  provas: Prova[];
  onClose: () => void;
};

export function Modal({ provas, onClose }: Props) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Provas do dia</h3>

        {provas.map((p) => (
          <div key={p.nome} className="modal-item">
            <strong>{p.nome}</strong>
            <p
              dangerouslySetInnerHTML={{
                __html: p.descricao.replace(
                  /(https?:\/\/[^\s]+)/g,
                  '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
                )
              }}
            />

            <p>
              {p.modalidade.toUpperCase()} — {p.campeonato}
            </p>
          </div>
        ))}

        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
