import Link from "next/link"
import Image from "next/image";
import logoLobinho from "../../assets/logo-lobinho.png";
import styles from "./styles.module.css";


export default function Header() {
    return (
        
        <header className={styles.header}>
            
            <nav className={styles.nav}>
                
                <Link href='/lobinhos' className={`${styles.link} ${styles.nossosLobinhosLink}`}>Nossos Lobinhos</Link>
                
                <Link href='/' className={`${styles.link}`}>
                    <Image src={logoLobinho} alt="Logo do Lobinho" priority/>
                </Link>
                
                <Link href='/quem_somos' className={`${styles.link} ${styles.quemSomosLink}`}>Quem Somos</Link>
            
            </nav>
        
        </header>
    );
}