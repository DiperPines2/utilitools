import React, { useState } from "react";

const ConversorTemperatura = () => {
  // Inicializando o estado com valor 0
  const [temperatura, setTemperatura] = useState<number | string>(0);
  const [resultado, setResultado] = useState<string | number>("");

  // Função para converter a temperatura
  const converterTemperatura = (tipo: string) => {
    let temp = parseFloat(temperatura.toString());
    if (isNaN(temp)) return;

    if (tipo === "Celsius") {
      // Convertendo para Celsius
      const celsius = (temp - 32) * (5 / 9);
      setResultado(celsius.toFixed(2) + " °C");
    } else if (tipo === "Fahrenheit") {
      // Convertendo para Fahrenheit
      const fahrenheit = temp * (9 / 5) + 32;
      setResultado(fahrenheit.toFixed(2) + " °F");
    }
  };

  // Função para tratar a mudança do valor do input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Garantir que o valor seja um número ou 0
    setTemperatura(value ? parseFloat(value) : 0);
  };

  return (
    <div className="container">
      <h2>Conversor de Temperatura</h2>

      <div className="input-container">
        <label htmlFor="temperatura">Temperatura:</label>
        <input
          type="number"
          id="temperatura"
          value={temperatura}
          onChange={handleInputChange}
          placeholder="Digite a temperatura"
        />
      </div>

      <div className="buttons-container">
        <button onClick={() => converterTemperatura("Celsius")}>Converter para Celsius</button>
        <button onClick={() => converterTemperatura("Fahrenheit")}>Converter para Fahrenheit</button>
      </div>

      <div className="resultado">
        <p>Resultado: {resultado}</p>
      </div>
    </div>
  );
};

export default ConversorTemperatura;
