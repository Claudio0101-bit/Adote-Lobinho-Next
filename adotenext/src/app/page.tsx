import { Metadata } from "next";
import Image from "next/image";
import styles from "./styles.module.css";
import protecao from "../assets/protecao.png";
import carinho from "../assets/carinho.png";
import companheiro from "../assets/companheiro.png";
import resgate from "../assets/resgate.png";
import ItemLobo from "@/components/ItemLobo";
import { getLobinhosAleatorios } from "@/services/lobinhosService";

export const metadata : Metadata= {
  title: "Home - Adote um Lobinho",
  description: "Encontre seu novo melhor amigo lobinho na nossa lista de lobinhos para adoção."
};

export default async function Home() {

    const lobinhos = await getLobinhosAleatorios(2);

    return (
        
        <main>
            <section className={styles.adoptSection}>

                <h1 className={styles.title}>Adote um Lobinho</h1>
                
                <span></span>

                <p className={`${styles.paragraph} ${styles.biggerText}`}>É claro que o consenso sobre a necessidade de qualificação apresenta tendências no sentido de aprovar a manutenção das regras de conduta normativas.</p>

            </section>
            
            <section className={styles.aboutSection}>

                <h2 className={styles.subtitle}>Sobre</h2>
                
                <p className={styles.paragraph}>Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.</p>
            
            </section>

            <section className={styles.valuesSection}>

                <h2 className={styles.subtitle}>Valores</h2>
                
                <ul>
                    <li>
                        <div className={styles.valueSymbol}>
                            <Image src={protecao} alt="Símbolo de Proteção" />
                        </div>
                        
                        <h3 className={styles.subSubtitle}>Proteção</h3>
                        
                        <p className={styles.paragraph}>
                            Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.
                        </p>
                    </li>

                    <li>
                        <div className={styles.valueSymbol}>
                            <Image src={carinho} alt="Símbolo de Carinho" />
                        </div>
                        
                        <h3 className={styles.subSubtitle}>Carinho</h3>
                        
                        <p className={styles.paragraph}>
                            Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.
                        </p>
                    </li>

                    <li>
                        <div className={styles.valueSymbol}>
                            <Image src={companheiro} alt="Símbolo de Companheirismo" />
                        </div>
                        
                        <h3 className={styles.subSubtitle}>Companheirismo</h3>
                        
                        <p className={`${styles.paragraph} ${styles.wolfDescription}`}>
                            Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.
                        </p>
                    </li>

                    <li>
                        <div className={styles.valueSymbol}>
                            <Image src={resgate} alt="Símbolo de Resgate" />
                        </div>
                        
                        <h3 className={styles.subSubtitle}>Resgate</h3>
                        
                        <p className={`${styles.paragraph} ${styles.wolfDescription}`}>
                            Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.
                        </p>
                    </li>
                </ul>
                
            </section>

            <section className={styles.exampleSection}>

                <h2 className={styles.subtitle}>Lobos Exemplo</h2>
                
                
                <div className={styles.wolfsSection}>

                    {lobinhos.map((lobinho, index) => (
                        <ItemLobo key={lobinho.id} lobinho={lobinho} isEven={(index + 1) % 2 === 0} isHomePage={true} />
                    ))}
                    
                </div>


            </section>
        </main>
    );
}
