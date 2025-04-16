import { useState } from "react";
import "./ConversorTemperatura.css";

const ConversorTemperatura = () => {
  const [valor, setValor] = useState(0);
  const [unidadeOrigem, setUnidadeOrigem] = useState("Celsius");
  const [unidadeDestino, setUnidadeDestino] = useState("Fahrenheit");
  const [resultado, setResultado] = useState<number | string>("");

  const converterTemperatura = () => {
    let tempConvertida;

    // Convertendo de Celsius para outras unidades
    if (unidadeOrigem === "Celsius") {
      if (unidadeDestino === "Fahrenheit") {
        tempConvertida = (valor * 9) / 5 + 32;
      } else if (unidadeDestino === "Kelvin") {
        tempConvertida = valor + 273.15;
      } else {
        tempConvertida = valor;
      }
    }

    // Convertendo de Fahrenheit para outras unidades
    else if (unidadeOrigem === "Fahrenheit") {
      if (unidadeDestino === "Celsius") {
        tempConvertida = ((valor - 32) * 5) / 9;
      } else if (unidadeDestino === "Kelvin") {
        tempConvertida = ((valor - 32) * 5) / 9 + 273.15;
      } else {
        tempConvertida = valor;
      }
    }

    // Convertendo de Kelvin para outras unidades
    else if (unidadeOrigem === "Kelvin") {
      if (unidadeDestino === "Celsius") {
        tempConvertida = valor - 273.15;
      } else if (unidadeDestino === "Fahrenheit") {
        tempConvertida = ((valor - 273.15) * 9) / 5 + 32;
      } else {
        tempConvertida = valor;
      }
    }

    setResultado(tempConvertida);
  };

  return (
    <div className="container">
      <h2>Conversor de Temperatura</h2>
      <div className="inputs">
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          placeholder="Digite a temperatura"
        />
        <select
          value={unidadeOrigem}
          onChange={(e) => setUnidadeOrigem(e.target.value)}
        >
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
        <span>para</span>
        <select
          value={unidadeDestino}
          onChange={(e) => setUnidadeDestino(e.target.value)}
        >
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
      </div>

      <button onClick={converterTemperatura}>Converter</button>

      {resultado !== "" && (
        <div className="resultado">
          <p>
            Resultado: <strong>{resultado} {unidadeDestino}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ConversorTemperatura;
