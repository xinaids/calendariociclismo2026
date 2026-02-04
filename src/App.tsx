import { Calendar } from "./components/Calendar";
import { Linkedin } from "lucide-react";

export default function App() {
  return (
    <main>
      <h1>Ciclismo – Temporada 2026</h1>
      <h3>Clique sobre o dia para mais informações da prova</h3>
      
      <Calendar />

      <footer className="footer">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>Desenvolvido por Mateus M. Schneider</span>
            <a 
              href="https://www.linkedin.com/in/schneidermm/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "#38bdf8", display: "flex", alignItems: "center", transition: "transform 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Contador de visitas minimalista ajustado */}
          {/* Contador de visitas estável */}

        </div>
      </footer>
    </main>
  );
}