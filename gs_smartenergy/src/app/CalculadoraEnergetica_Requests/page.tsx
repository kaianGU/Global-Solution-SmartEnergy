// import Sidebar from "../Sidebar/page";

// const CalculadoraEnergeticaResponse = () => {

//     return (

//         <>
//         <Sidebar></Sidebar>
//            <h2>Calcule seu gasto mensal com energia</h2>
//            <p>Para calcular o custo de energia de seus eletrodomésticos, precisarei de três informações: a potência do aparelho (em watts), o tempo de uso diário (em horas) e o custo do kWh (informado na sua conta de energia). Com esses dados, poderei calcular exatamente quanto cada aparelho impacta na sua conta de luz.</p>
//            <div>
//                 <input type="number" />
//            </div>

//            <div>
//                 <select name="" id="">
//                     <option value=""></option>
//                 </select>

//                 <input type="number" />
//                 <input type="number" />
//            </div>

//            <div>
//                 <select name="" id="">
//                     <option value=""></option>
//                 </select>

//                 <input type="number" />
//                 <input type="number" />
//            </div>

//            {/* botao de adicionar aparelho */}
//            {/* botao calcular */}
//         </>
//     )
// }

// export default  CalculadoraEnergeticaResponse;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Usar para redirecionamento
import Sidebar from "../Sidebar/page";
import styles from "./CalculadoraEnergetica_Requests.module.css";

const CalculadoraEnergeticaResponse = () => {
  const [custoKwh, setCustoKwh] = useState("");
  const [aparelhos, setAparelhos] = useState([
    { nome: "", potencia: "", horasUso: "" },
  ]);
  const router = useRouter();

  const handleAddAparelho = () => {
    setAparelhos([
      ...aparelhos,
      { nome: "", potencia: "", horasUso: "" }, // Novo aparelho vazio
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const novosAparelhos = [...aparelhos];
    novosAparelhos[index][field] = value;
    setAparelhos(novosAparelhos);
  };

  const handleCalcular = () => {
    if (!custoKwh || aparelhos.some((a) => !a.nome || !a.potencia || !a.horasUso)) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Cálculo do gasto total
    const custoPorKwh = parseFloat(custoKwh);
    const calculos = aparelhos.map((aparelho) => {
      const potenciaKw = parseFloat(aparelho.potencia) / 1000; // Converter watts para kW
      const horasMensais = parseFloat(aparelho.horasUso) * 30; // Horas por mês
      const gastoMensal = potenciaKw * horasMensais * custoPorKwh;

      return {
        ...aparelho,
        gastoMensal: gastoMensal.toFixed(2), // Formatar para 2 casas decimais
      };
    });

    const totalMensal = calculos.reduce(
      (total, aparelho) => total + parseFloat(aparelho.gastoMensal),
      0
    );

    // Salvar no Local Storage
    const dados = { custoKwh, aparelhos: calculos, totalMensal };
    localStorage.setItem("calculoEnergia", JSON.stringify(dados));

    // Redirecionar para a página de resultados
    router.push("/CalculadoraEnergetica_Responses");
  };

  return (
    <>
      <Sidebar></Sidebar>
      <h2 className={styles.titulopagina}>Calcule seu gasto mensal com energia</h2>
      <p className={styles.textosimples}>
        Para calcular o custo de energia de seus eletrodomésticos, precisarei de
        três informações: a potência do aparelho (em watts), o tempo de uso
        diário (em horas) e o custo do kWh (informado na sua conta de energia).
        Com esses dados, poderei calcular exatamente quanto cada aparelho
        impacta na sua conta de luz.
      </p>

      {/* Entrada do custo por kWh */}
      <div className={styles.inputkhw}>
        <input
        className={styles.input1}
          type="number"
          value={custoKwh}
          onChange={(e) => setCustoKwh(e.target.value)}
          placeholder="Custo do Kwh"
        />
      </div>

      {/* Divs para aparelhos */}
      {aparelhos.map((aparelho, index) => (
        <div key={index} className={styles.inputkhw}>
          <select
          className={styles.central}
            value={aparelho.nome}
            onChange={(e) =>
              handleInputChange(index, "nome", e.target.value)
            }
          >
            <option value="" >Eletrodoméstico</option>
            <option value="Microondas">Microondas</option>
            <option value="Liquidificador">Liquidificador</option>
            <option value="Geladeira">Geladeira</option>
            <option value="Televisão">Televisão</option>
            <option value="Máquina de lavar">Máquina de lavar</option>
            <option value="Ar-condicionado">Ar-condicionado</option>
            <option value="Ventilador">Ventilador</option>
            <option value="Computador">Computador</option>
            <option value="Notebook">Notebook</option>
            <option value="Forno elétrico">Forno elétrico</option>
            <option value="Fogão">Fogão</option>
            <option value="Lâmpada">Lâmpada</option>
            <option value="Chuveiro elétrico">Chuveiro elétrico</option>
            <option value="Torradeira">Torradeira</option>
            <option value="Cafeteira elétrica">Cafeteira elétrica</option>
            <option value="Ferro de passar">Ferro de passar</option>
            <option value="Aquecedor">Aquecedor</option>
            <option value="Aparelho de som">Aparelho de som</option>
            <option value="PlayStation/Xbox">PlayStation/Xbox</option>
            <option value="Secador de cabelo">Secador de cabelo</option>
            <option value="Barbeador elétrico">Barbeador elétrico</option>
            <option value="Máquina de costura">Máquina de costura</option>
            <option value="Purificador de água">Purificador de água</option>
            <option value="Impressora">Impressora</option>
            <option value="Lava-louças">Lava-louças</option>
            <option value="Máquina de secar">Máquina de secar</option>
            <option value="Freezer">Freezer</option>
            <option value="Abajur">Abajur</option>
            <option value="Desumidificador">Desumidificador</option>
            <option value="Umidificador">Umidificador</option>
            <option value="Geladeira de bebidas">Geladeira de bebidas</option>

          </select>
          <input
          className={styles.central}
            type="number"
            value={aparelho.potencia}
            onChange={(e) =>
              handleInputChange(index, "potencia", e.target.value)
            }
            placeholder="Potência (W)"
          />
          <input
          className={styles.central}
            type="number"
            value={aparelho.horasUso}
            onChange={(e) =>
              handleInputChange(index, "horasUso", e.target.value)
            }
            placeholder="Horas de uso diário"
          />
        </div>
      ))}

      {/* Botão para adicionar aparelhos */}
      <button onClick={handleAddAparelho} className={styles.inputkhw1}>Adicionar Aparelho  +</button>

      {/* Botão para calcular */}
      <button onClick={handleCalcular} className={styles.inputkhw2}>Calcular</button>
    </>
  );
};

export default CalculadoraEnergeticaResponse;
