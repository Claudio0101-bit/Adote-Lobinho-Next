import Link from 'next/link';
import styles from './notfound.module.css';


export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Página Não Encontrada</h1>
            <p className={styles.description}>A página que você está procurando não existe.</p>
            
            <Link href="/" className={styles.link}>
                Voltar para a página inicial
            </Link>
        </div>
    );
}