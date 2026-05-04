import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { Lobinho } from "@/types/lobinho";

export default function ItemLobo({lobinho, isEven, isHomePage}: {lobinho: Lobinho, isEven: boolean, isHomePage?: boolean}) {

    const isAdopted = lobinho.adotado;
    

    return (
        <li className={`${styles.wolfCard} ${isEven ? styles.wolfEvenCard : ""}`}>
            <div className={`${styles.wolfImage} ${isEven ? styles.wolfEvenImage : ""}`}>
                <div></div>
                <Image src={`${lobinho.imagem}`} alt={`Imagem do Lobo ${lobinho.nome}`} width={430} height={328} />
            </div>
            
            <div className={`${styles.wolfInfo} ${isEven ? styles.wolfEvenInfo : ""}`}>
                
                <div className={`${styles.titleDiv} ${isEven ? styles.titleDivEven : ""}`}>
                    
                    <div className={styles.divNameAge}>
                        <h3 className={styles.nameTitle}>{lobinho.nome}</h3>
                        <p className={styles.ageTitle}><span>Idade: {lobinho.idade} anos</span></p>
                    </div>
                    
                    {!isAdopted && !isHomePage && (
                        <Link className={styles.adoptLink} href={`/lobinhos/${lobinho.id}`}>
                            Adotar
                        </Link>
                    )}
                    
                    {!isHomePage && isAdopted && (
                        <p className={styles.adoptLinkAdopted}>Adotado</p>
                    )}
                    
                </div>

                <p className={styles.paragraph}>
                    {lobinho.descricao}
                </p>
                
                {isAdopted && !isHomePage && (
                    <div className={styles.ownerDiv}>
                        <p className={styles.ownerText}>Adotado por: {lobinho.nomeDono}</p>
                    </div>
                )}
            
            </div>
        </li>
    );
}