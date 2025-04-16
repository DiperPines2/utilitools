import { useState } from "react";
import "./ContadorPalavras.css";

const ContadorPalavras = () => {
  const [texto, setTexto] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  const contarPalavras = (texto: string) => {
    const palavras = texto.trim().split(/\s+/).filter(Boolean);
    setQuantidade(palavras.length);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTexto(e.target.value);
    contarPalavras(e.target.value);
  };

  return (
    <div className="container">
      <h2>Contador de Palavras</h2>
      <textarea
        value={texto}
        onChange={handleChange}
        rows={6}
        placeholder="Digite seu texto aqui..."
      />
      <div className="resultado">
        <p><strong>Palavras: </strong>{quantidade}</p>
      </div>
    </div>
  );
};

export default ContadorPalavras;
