import { adotarLobinho, getLobinhoById } from '@/services/lobinhosService';
import styles from './styles.module.css';
import { adotarLobinhoAction } from '@/actions/lobinhosActions';
import Image from 'next/image';

export default async function AdoteLoboPage({params}: {params: Promise<{id: string}>}) {

    const {id} = await params;
    
    const lobinho = await getLobinhoById(Number(id));
    
    return (
        <main className={styles.main}>
            
            <div className={styles.titleSection}>
                <figure className={styles.wolfFigure}>
                    <Image src={`${lobinho.imagem}`} alt={`Imagem do Lobo ${lobinho.nome}`} width={430} height={328}/>
                </figure>
                
                <div className={styles.divNameId}>
                    <h1 className={styles.titleName}>Adote o(a) {lobinho.nome}</h1>
                    <p className={styles.titleId}>ID: {lobinho.id}</p>
                </div>
                
            </div>
            

            <form action={adotarLobinhoAction.bind(null, Number(id))} className={styles.adoptForm}>
                
                <div className={styles.divNameAge}>
                    
                    <div className={styles.nameInputDiv}>
                        <label htmlFor="nomeDono" className={styles.label}>Seu Nome:</label>
                        <input name="nomeDono" id="nomeDono" type="text" className={styles.nameInput} required/>
                    </div>
                    
                    <div className={styles.ageInputDiv}>
                        <label htmlFor="idadeDono" className={styles.label}>Idade:</label>
                        <input name="idadeDono" id="idadeDono" type="number" className={styles.ageInput} required/>
                    </div>
                    
                </div>

                <div className={styles.emailInputDiv}>
                    <label htmlFor="emailDono" className={styles.label}>Email:</label>
                    <input name="emailDono" id="emailDono" type="email" className={styles.emailInput} required/>
                </div> 
                    
                    
                <button type="submit" className={styles.adoptBtn}>
                    Adotar
                </button>
            
            </form>
        
        </main>
    );
}