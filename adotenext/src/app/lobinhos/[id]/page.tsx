import BotoesLobo from '@/components/BotoesLobo';
import styles from './styles.module.css';
import { getLobinhoById } from '@/services/lobinhosService';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ShowLoboPage({params}: {params: Promise<{id: string}>}) {
    
    const {id} = await params;

    const lobinho = await getLobinhoById(Number(id));
    console.log("Lobinho encontrado:", lobinho); // Log para verificar o lobinho encontrado

    if (Object.keys(lobinho).length === 0) { notFound(); }

    // await new Promise(resolve => setTimeout(resolve, 5000)); // Simula um atraso de 5 segundos (Testes)
    
    return (
        <main className={styles.main}>
            
            <h1 className={styles.title}>{lobinho.nome}</h1>
            
            <section className={styles.wolfSection}>
                
                <div className={styles.imgBtnSide}>
                    
                    <div className={styles.wolfImage}>
                        <div></div>

                        {lobinho.imagem && (
                            <Image src={`${lobinho.imagem}`} alt={`Imagem do Lobo ${lobinho.nome}`} width={430} height={328} />
                        )}
                    
                    </div>

                    <BotoesLobo id={Number(id)} />
                
                </div>

                <div className={styles.descriptionSide}>
                    <p className={styles.paragraph}>
                        {lobinho.descricao}
                    </p>
                </div>

            </section>
        
        </main>
    );
}