import { adicionarLobinhoAction } from '@/actions/lobinhosActions';
import styles from './styles.module.css';

export default function AddLoboPage() {


    return (
        <main className={styles.main}>
            
            <form action={adicionarLobinhoAction} className={styles.addForm}>
                
                <h1 className={styles.title}>Coloque um Lobinho para Adoção</h1>
                
                <div className={styles.formContent}>
                    
                    <section className={styles.divNameAge}>

                        <div className={`${styles.inputGroup} ${styles.divName}`}>
                            <label htmlFor="nome" className={styles.label}>Nome do Lobinho:</label>
                            <input type="text" id="nome" name="nome" required />
                        </div>

                        <div className={`${styles.inputGroup} ${styles.divAge}`}>
                            <label htmlFor="idade" className={styles.label}>Anos:</label>
                            <input type="number" id="idade" name="idade" required />
                        </div>

                    </section>

                    <section className={`${styles.inputGroup} ${styles.divLink}`}>
                        <label htmlFor="imagem" className={styles.label}>Link da Foto:</label>
                        <input type="url" id="imagem" name="imagem" required />
                    </section>

                    <section className={`${styles.inputGroup} ${styles.divDescription}`}>
                        <label htmlFor="descricao" className={styles.label}>Descrição:</label>
                        <textarea id="descricao" name="descricao" required></textarea>
                    </section>

                    
                    <button type="submit" className={styles.saveBtn}>
                        Salvar
                    </button>
                    
                </div>
            
            </form>
        
        </main>
    );
}