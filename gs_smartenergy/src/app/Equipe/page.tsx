import Sidebar from "../Sidebar/page";
import styles from "./Equipe.module.css"

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const equipe = () => {

    return (

        <>
            <Sidebar></Sidebar>
            <h1>Equipe hdiewuhijoij</h1>
            <div className={styles.container}>
            
                    <div className={styles.div1}>
                        <img src="./Imagens/Roz.png" alt="" className={styles.img}></img>
                        <h2 className={styles.text1}>Rm 558981</h2>
                        <p className={styles.text2}>Uma jovem desenvolvedora da turma 1 TDSB que realiza seu trabalho com excelência</p>
                        <a href="https://www.linkedin.com/in/giovanna-revito-roz-1b4050239/" target="blank"><CiLinkedin /></a>
                        <a href=""><FaGithub /></a>
                    </div>


                    <div className={`${styles.div1} ${styles.div2}`}>
                        <img src="./Imagens/Kaian.png" alt="" className={styles.img} />
                    </div>


                    <div className={styles.div1}>
                    <img src="./Imagens/Kenji.png" alt="" className={styles.img} />
                    </div>
            </div>
        </>
    )
}

export default  equipe;