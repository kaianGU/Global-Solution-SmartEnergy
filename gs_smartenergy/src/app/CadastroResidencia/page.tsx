

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Sidebar from "../Sidebar/page";
// import styles from "./CadastroResidencia.module.css";

// const CadastroResidencia = () => {
//   const [cep, setCep] = useState("");
//   const [logradouro, setLogradouro] = useState("");
//   const [bairro, setBairro] = useState("");
//   const [cidade, setCidade] = useState("");
//   const [estado, setEstado] = useState("");
//   const [numero, setNumero] = useState(""); // Novo estado para o número
//   const router = useRouter(); // Instância do roteador

//   // Função para buscar informações da API ViaCEP
//   const buscarEndereco = async (cep) => {
//     try {
//       const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//       const data = await response.json();
//       if (!data.erro) {
//         setLogradouro(data.logradouro);
//         setBairro(data.bairro);
//         setCidade(data.localidade);
//         setEstado(data.uf);
//       } else {
//         alert("CEP não encontrado.");
//       }
//     } catch (error) {
//       console.error("Erro ao buscar CEP:", error);
//     }
//   };

//   // Handler para o campo CEP
//   const handleCepChange = (e) => {
//     const newCep = e.target.value;
//     setCep(newCep);
//     if (newCep.length === 8) {
//       buscarEndereco(newCep);
//     }
//   };

//   // Função para salvar os dados
//   const salvarResidencia = async () => {
//     const residencia = {
//       cep,
//       logradouro,
//       bairro,
//       cidade,
//       estado,
//       numero,
//     };

//     // Armazena em localStorage
//     localStorage.setItem("residencia", JSON.stringify(residencia));

//     try {
//       const response = await fetch("/api/salvarResidencia", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(residencia),
//       });

//       if (response.ok) {
//         alert("Residência salva com sucesso!");
//       } else {
//         const errorData = await response.json();
//         alert(`Erro ao salvar a residência: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Erro ao salvar a residência:", error);
//       alert("Erro inesperado ao salvar a residência.");
//     }
//   };

//   // Função para voltar à página inicial
//   const voltarPagina = () => {
//     router.push("/");
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className={styles.container}>
//         <h1 className={styles.titulo}>Cadastro de Residência</h1>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="text"
//             value={cep}
//             onChange={handleCepChange}
//             maxLength="8"
//             required
//             placeholder="CEP"
//             className={styles.input}
//           />
//           <input
//             type="text"
//             value={logradouro}
//             onChange={(e) => setLogradouro(e.target.value)}
//             required
//             placeholder="Logradouro"
//             className={styles.input}
//           />
//           <input
//             type="text"
//             value={numero}
//             onChange={(e) => setNumero(e.target.value)}
//             required
//             placeholder="Número"
//             className={styles.input}
//           />
//           <input
//             type="text"
//             value={bairro}
//             onChange={(e) => setBairro(e.target.value)}
//             required
//             placeholder="Bairro"
//             className={styles.input}
//           />
//           <input
//             type="text"
//             value={cidade}
//             onChange={(e) => setCidade(e.target.value)}
//             required
//             placeholder="Cidade"
//             className={styles.input}
//           />
//           <input
//             type="text"
//             value={estado}
//             onChange={(e) => setEstado(e.target.value)}
//             required
//             placeholder="Estado"
//             className={styles.input}
//           />
//           <div className={styles.divisor}></div>
//           <button
//             type="button"
//             onClick={salvarResidencia}
//             className={styles.botaoSalvar}
//           >
//             Salvar Residência
//           </button>
//         </form>
//         <button
//           type="button"
//           onClick={voltarPagina}
//           className={styles.botaoVoltar}
//         >
//           Voltar
//         </button>
//       </div>
//     </>
//   );
// };

// export default CadastroResidencia;


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../Sidebar/page";
import styles from "./CadastroResidencia.module.css";

const CadastroResidencia = () => {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState(""); // Novo estado para o número
  const router = useRouter(); // Instância do roteador

  // Função para buscar informações da API ViaCEP
  const buscarEndereco = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setLogradouro(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setEstado(data.uf);
      } else {
        alert("CEP não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  // Handler para o campo CEP
  const handleCepChange = (e) => {
    const newCep = e.target.value;
    setCep(newCep);
    if (newCep.length === 8) {
      buscarEndereco(newCep);
    }
  };

  // Função para salvar os dados
  const salvarResidencia = () => {
    const residencia = {
      cep,
      logradouro,
      bairro,
      cidade,
      estado,
      numero,
    };

    // Armazena em localStorage
    localStorage.setItem("residencia", JSON.stringify(residencia));

    // A parte abaixo está comentada para evitar erros ao tentar salvar em JSON no backend
    /*
    try {
      const response = await fetch("/api/salvarResidencia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(residencia),
      });

      if (response.ok) {
        alert("Residência salva com sucesso!");
      } else {
        const errorData = await response.json();
        alert(`Erro ao salvar a residência: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Erro ao salvar a residência:", error);
      alert("Erro inesperado ao salvar a residência.");
    }
    */

    alert("Residência salva no localStorage com sucesso!");
    router.push("/");
  };

  // Função para voltar à página inicial
  const voltarPagina = () => {
    router.push("/");
  };

  return (
    <>
      <Sidebar />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Cadastro de Residência</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={cep}
            onChange={handleCepChange}
            maxLength="8"
            required
            placeholder="CEP"
            className={styles.input}
          />
          <input
            type="text"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            required
            placeholder="Logradouro"
            className={styles.input}
          />
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
            placeholder="Número"
            className={styles.input}
          />
          <input
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            required
            placeholder="Bairro"
            className={styles.input}
          />
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
            placeholder="Cidade"
            className={styles.input}
          />
          <input
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
            placeholder="Estado"
            className={styles.input}
          />
          <div className={styles.divisor}></div>
          <button
            type="button"
            onClick={salvarResidencia}
            className={styles.botaoSalvar}
          >
            Salvar Residência
          </button>
        </form>
        <button
          type="button"
          onClick={voltarPagina}
          className={styles.botaoVoltar}
        >
          Voltar
        </button>
      </div>
    </>
  );
};

export default CadastroResidencia;
