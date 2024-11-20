
"use client";
import Sidebar from "../Sidebar/page";
import { useEffect, useState } from "react";
import styles from "./CalculadoraEnergetica_Responses.module.css";

const CalculadoraEnergeticaResponse = () => {
  const [dados, setDados] = useState(null);
  const [corDiv, setCorDiv] = useState("");
  const [mensagem, setMensagem] = useState("");

  const mediaConsumo = 150; // Média estimada de consumo mensal em kWh.

  useEffect(() => {
    // Pegar os dados armazenados no localStorage
    const dadosArmazenados = JSON.parse(localStorage.getItem("calculoEnergia"));

    if (dadosArmazenados && dadosArmazenados.totalMensal) {
      setDados(dadosArmazenados);
      calcularStatus(dadosArmazenados.totalMensal);
    } else {
      setMensagem("Não há dados suficientes para exibir o consumo.");
      setCorDiv("grey"); // Cor de erro ou ausência de dados
    }
  }, []);

  const calcularStatus = (consumo) => {
    if (consumo < mediaConsumo) {
      setCorDiv("lightgreen");
      setMensagem("Parabéns! Seu consumo está abaixo da média.");
    } else if (consumo === mediaConsumo) {
      setCorDiv("yellow");
      setMensagem("Seu consumo está na média.");
    } else {
      setCorDiv("salmon");
      setMensagem(
        "Seu consumo está acima da média. Considere seguir as dicas para economizar."
      );
    }
  };

  return (
    <>
      <Sidebar />
      <h2 className={styles.titulo}>O seu gasto mensal é de {dados?.totalMensal || "0"} kWh</h2>
      <div 
      className={styles.div}
        style={{
          backgroundColor: corDiv,
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <p>{mensagem}</p>
      </div>
      {dados?.totalMensal > mediaConsumo && (
        <div className={styles.contprincipal}>
          <h2>Considere experimentar as seguintes dicas para economizar energia:</h2>
          <p>
            1 - Desligue aparelhos em stand-by.<br />
            2 - Troque lâmpadas por LEDs.<br />
            3 - Ajuste a temperatura da geladeira.<br />
            4 - Use ventiladores em vez de ar-condicionado.<br />
            5 - Lave roupas com água fria.<br />
          </p>
        </div>
      )}
    </>
  );
};

export default CalculadoraEnergeticaResponse;
