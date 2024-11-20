"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Perfil.module.css';
import "../reset.css";
import { useRouter } from 'next/navigation';
import Sidebar from '../Sidebar/page';
const Perfil = () => {
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
    const [bio, setBio] = useState<string>("");
    const [imagemUsuario, setImagemUsuario] = useState<string | null>(null);
    const [agendamentos, setAgendamentos] = useState<any[]>([]);
    const router = useRouter();
    useEffect(() => {
        const userCredentials = localStorage.getItem("usuario");
        const userBio = localStorage.getItem("userBio");
        const savedImage = localStorage.getItem("userImage");
        if (userCredentials) {
            const { email, cpf } = JSON.parse(userCredentials);
            setNomeUsuario(email.split("@")[0]);
            fetch(`http://localhost:8080/sprint4-java/rest/agendamento/usuario/${cpf}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao buscar agendamentos');
                    }
                    return response.json();
                })
                .then(data => {
                    setAgendamentos(data); 
                })
                .catch(error => {
                    console.error("Erro ao buscar os agendamentos:", error);
                });
        }

        if (userBio) {
            setBio(userBio);
        } else {
            setBio("Bem-vindo(a) ao nosso sistema! Edite sua bio para personalizar esta seção.");
        }

        if (savedImage) {
            setImagemUsuario(savedImage);
        }
    }, []);
    const editarBio = () => {
        router.push("/DashboardsUsuario");
    }
    return (
        <>
        <Sidebar></Sidebar>
        <div className={styles.container}>
           
            <img src={imagemUsuario || "/Imagens/imagenpadraouser.png"} alt="Imagem do usuário" className={styles.imagemUsuario} />
            <p className={styles.paragrafoBio}>
                Olá, sou {nomeUsuario || "Usuário"}. {bio}
            </p>
            <img src="/Imagens/penedit.png" alt="" onClick={editarBio} className={styles.editarBio}/>
            <div className={styles.fundoAgendamentosPerfil}>
                
            </div>

            <div className={styles.classificção}>
                <h2 className={styles.classificçãoT}>Classificação</h2>
                <p>
                Você ocupa a 23° posição no ranking de maiores economistas de energia
                </p>
            </div>
           <div className={styles.divisor}></div>
            <div className={styles.classificção2}>
                <h2>Seus gastos</h2>
                <p>
                10kwh no mes de novembro
                </p>
            </div>
            
        </div>
        </>
    );
}

export default Perfil;



// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Sidebar from "../Sidebar/page";
// import styles from "./Perfil.module.css";

// const Perfil = () => {
//     const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
//     const [bio, setBio] = useState<string>("");
//     const [imagemUsuario, setImagemUsuario] = useState<string | null>(null);
//     const [classificacao, setClassificacao] = useState<string>("Carregando...");
//     const [gastoMensal, setGastoMensal] = useState<number | null>(null);
//     const router = useRouter();

//     useEffect(() => {
//         const userCredentials = localStorage.getItem("usuario");
//         const userBio = localStorage.getItem("userBio");
//         const savedImage = localStorage.getItem("userImage");

//         // Obtendo dados do usuário
//         if (userCredentials) {
//             const { email, cpf } = JSON.parse(userCredentials);
//             setNomeUsuario(email.split("@")[0]);

//             // Buscando classificação do banco
//             fetch(`http://localhost:8080/sprint4-java/rest/classificacao/${cpf}`)
//                 .then((response) => {
//                     if (!response.ok) {
//                         throw new Error("Erro ao buscar classificação");
//                     }
//                     return response.json();
//                 })
//                 .then((data) => {
//                     setClassificacao(
//                         `Você ocupa a ${data.posicao}° posição no ranking de maiores economistas de energia`
//                     );
//                 })
//                 .catch((error) => {
//                     console.error("Erro ao buscar a classificação:", error);
//                     setClassificacao("Erro ao carregar classificação.");
//                 });
//         }

//         // Configuração da bio
//         if (userBio) {
//             setBio(userBio);
//         } else {
//             setBio("Bem-vindo(a) ao nosso sistema! Edite sua bio para personalizar esta seção.");
//         }

//         // Configuração da imagem
//         if (savedImage) {
//             setImagemUsuario(savedImage);
//         }

//         // Obtendo consumo mensal de kWh do localStorage
//         const consumo = localStorage.getItem("residencia");
//         if (consumo) {
//             const { totalMensal } = JSON.parse(consumo);
//             setGastoMensal(totalMensal || 0);
//         }
//     }, []);

//     const editarBio = () => {
//         router.push("/DashboardsUsuario");
//     };

//     return (
//         <>
//             <Sidebar />
//             <div className={styles.container}>
//                 <img
//                     src={imagemUsuario || "/Imagens/imagenpadraouser.png"}
//                     alt="Imagem do usuário"
//                     className={styles.imagemUsuario}
//                 />
//                 <p className={styles.paragrafoBio}>
//                     Olá, sou {nomeUsuario || "Usuário"}. {bio}
//                 </p>
//                 <img
//                     src="/Imagens/penedit.png"
//                     alt="Editar bio"
//                     onClick={editarBio}
//                     className={styles.editarBio}
//                 />
//                 <div className={styles.classificcao}>
//                     <h2 className={styles.classificcaoT}>Classificação</h2>
//                     <p>{classificacao}</p>
//                 </div>
//                 <div className={styles.divisor}></div>
//                 <div className={styles.classificcao2}>
//                     <h2>Seus gastos</h2>
//                     <p>{gastoMensal !== null ? `${gastoMensal} kWh no mês de novembro` : "Carregando..."}</p>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Perfil;
