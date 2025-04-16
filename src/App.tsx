import { useState } from "react";
import GeradorSenhas from './pages/GeradorSenhas';
import ContadorPalavras from './pages/ContadorPalavras';
import ConversorTemperatura from './pages/ConversorTemperatura';
import "./App.css";

function App() {
  const [selecao, setSelecao] = useState("gerador-senhas");

  return (
    <div>
      <header className="header">
        <h1>Utilitools 🔧</h1>
        <nav>
          <button onClick={() => setSelecao("gerador-senhas")}>Gerador de Senhas</button>
          <button onClick={() => setSelecao("contador-palavras")}>Contador de Palavras</button>
          <button onClick={() => setSelecao("conversor-temperatura")}>Conversor de Temperatura</button>
        </nav>
      </header>

      <main>
        {selecao === "gerador-senhas" && (
          <section id="gerador-senhas">
            <GeradorSenhas />
          </section>
        )}
        {selecao === "contador-palavras" && (
          <section id="contador-palavras">
            <ContadorPalavras />
          </section>
        )}
        {selecao === "conversor-temperatura" && (
          <section id="conversor-temperatura">
            <ConversorTemperatura />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
