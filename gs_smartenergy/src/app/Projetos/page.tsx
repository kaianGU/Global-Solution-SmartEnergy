"use client";
import Sidebar from "../Sidebar/page";

import { use, useEffect, useState } from "react";
import styles from "./Projetos.module.css";

const Projetos = () => {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        const projetosExemplo = [
            {
                empresa: "Empresa Alpha",
                descricao: "Desenvolvimento de sistema de gestão.",
                custo: "R$ 50.000",
                concluido: true,
                imagem: "./imagens/empresa.png", // Caminho da imagem do projeto
            },
            {
                empresa: "Empresa Beta",
                descricao: "Implementação de energia solar.",
                custo: "R$ 120.000",
                concluido: false,
                imagem: "./imagens/empresa.png",
            },
            {
                empresa: "Empresa Gama",
                descricao: "Consultoria para eficiência energética.",
                custo: "R$ 75.000",
                concluido: true,
                imagem: "./imagens/empresa.png",
            },
        ];

        fetch("URL_DA_API_AQUI/projetos") // Ajuste esta URL
            .then(response => response.json())
            .then(data => setProjetos(data))
            .catch(error => {
                console.error("Erro ao buscar projetos:", error);
                setProjetos(projetosExemplo);
            });
    }, []);

    return (
        <>
            <Sidebar />
            <h1 className={styles.titulo}>Projetos</h1>

            {projetos.length > 0 ? (
                projetos.slice(0, 3).map((projeto, index) => (
                    <div key={index} className={styles.projetoContainer}>
                        <img src={projeto.imagem} alt={`Imagem do projeto ${projeto.empresa}`} className={styles.projetoImagem} />
                        <h2 className={styles.nomemoresa}>{projeto.empresa}</h2>
                        <p className={styles.descricao}>{projeto.descricao}</p>
                        <h3 className={styles.price}>Custo do Projeto: {projeto.custo}</h3>
                        <p className={styles.status}>Status: {projeto.concluido ? "Concluído" : "Não Concluído"}</p>
                    </div>
                ))
            ) : (
                <p>Carregando projetos...</p>
            )}
        </>
    );
};

export default Projetos;
