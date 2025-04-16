import { useState } from "react";
import "./ConversorTemperatura.css";

const ConversorTemperatura = () => {
  const [temperatura, setTemperatura] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperatura(e.target.value);
  };

  const converterParaFahrenheit = () => {
    const temp = parseFloat(temperatura);
    if (isNaN(temp)) return;
    const fahrenheit = temp * (9 / 5) + 32;
    setResultado(`${fahrenheit.toFixed(2)} °F`);
  };

  const converterParaKelvin = () => {
    const temp = parseFloat(temperatura);
    if (isNaN(temp)) return;
    const kelvin = temp + 273.15;
    setResultado(`${kelvin.toFixed(2)} K`);
  };

  return (
    <div className="container">
      <h2>Conversor de Temperatura</h2>

      <div className="input-container">
        <label>Temperatura (°C):</label>
        <input
          type="number"
          value={temperatura}
          onChange={handleInputChange}
          placeholder="Digite a temperatura em Celsius"
        />
      </div>

      <div className="buttons-container">
        <button onClick={converterParaFahrenheit}>Converter para °F</button>
        <button onClick={converterParaKelvin}>Converter para K</button>
      </div>

      <div className="resultado">
        <p>Resultado: {resultado}</p>
      </div>
    </div>
  );
};

export default ConversorTemperatura;
