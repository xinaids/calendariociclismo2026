import { Calendar } from "./components/Calendar";

export default function App() {
  return (
    <main>
      <h1>Ciclismo – Temporada 2026</h1>
      <h3>Clique sobre o dia para mais informações da prova</h3>
      <Calendar />

      <footer className="footer">
        Desenvolvido por Mateus M. Schneider
      </footer>
    </main>
    
  );
}
