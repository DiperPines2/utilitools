import { useState } from "react";
import "./GeradorSenhas.css";

const GeradorSenhas = () => {
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const syms = "!@#$%^&*()_+=[]{}";

    let chars = lower;
    if (uppercase) chars += upper;
    if (numbers) chars += nums;
    if (symbols) chars += syms;

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(pass);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="container">
      <h2>Gerador de Senhas</h2>

      <label>
        Tamanho:
        <input
          type="number"
          min="4"
          max="50"
          value={length}
          onChange={(e) => setLength(+e.target.value)}
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
        />
        Incluir letras maiúsculas
      </label>

      <label>
        <input
          type="checkbox"
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
        />
        Incluir números
      </label>

      <label>
        <input
          type="checkbox"
          checked={symbols}
          onChange={() => setSymbols(!symbols)}
        />
        Incluir símbolos
      </label>

      <button onClick={generatePassword}>Gerar senha</button>

      {password && (
        <div className="resultado">
          <div className="senha">{password}</div>
          <button onClick={copyToClipboard} className="copiar">
            Copiar
          </button>
        </div>
      )}
    </div>
  );
};

export default GeradorSenhas;
