import Image from "next/image";
import styles from "./loading.module.css";
import logo from "@/assets/logo-lobinho.png";

export default function Loading() {
    return (
        
        <main className={styles.main}>
        
            <Image
                src={logo}
                alt="Carregando..."
                width={96}
                height={111}
                className={styles.logo}
                priority
            />
            
            <p className={styles.loadingMsg}>Buscando lobinhos...</p>
        
        </main>
  );
}