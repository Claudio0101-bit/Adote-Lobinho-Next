import Image from "next/image";
import logoPatas from "../../assets/logo-patas.png";
import tel from "../../assets/call-answer-icon.png";
import email from "../../assets/email-icon.png";
import map from "../../assets/map-placeholder-icon.png";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        
        <footer className={styles.footer}>

            <div className={styles.iframeDiv}>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14700.922543994864!2d-43.14969114458004!3d-22.904862500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817dce2f93eb%3A0x9e97773b91b93bba!2sUniversidade%20Federal%20Fluminense%20-%20Campus%20Praia%20Vermelha!5e0!3m2!1spt-BR!2sbr!4v1770153325464!5m2!1spt-BR!2sbr" width="100%" loading="lazy"></iframe>
            
            </div>
        
            <div className={styles.info}>
                
                <div className="localizacao">
                    
                    <Image className={styles.icons} src={map} alt="Localização" />
                    
                    <p>Av. Milton Tavares de Souza, s/n - Sala 115 B - Boa Viagem, Niterói - RJ, 24210-315</p>
                
                </div>

                <div className="telefone">
                    
                    <Image className={styles.icons} src={tel} alt="Telefone" />
                    
                    <p>(99) 99999-9999</p>
                
                </div>

                <div className="email">
                    
                    <Image className={styles.icons} src={email} alt="Email" />
                    
                    <p>salve-lobos@lobINhos.com</p>
                
                </div>

                <Link className={styles.quemSomosBtn} href="/quem_somos">Quem Somos</Link>
            
            </div>
            
            <div className={styles.developedBy}>
                
                <p>Desenvolvido com</p>
                
                <Image className={styles.pataLogo} src={logoPatas} alt="Logo Patas" />
            
            </div>

        </footer>
    );
}