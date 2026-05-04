"use client";

import { excluirLobinhoAction } from '@/actions/lobinhosActions';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

export default function BotoesLobo({id}: {id: number}) {
    
    const router = useRouter();


    return (

        <div className={styles.btnsDiv} id="botoes">
            
            <button  className={styles.btnAdopt} onClick={() => router.push(`/adote_lobo/${id}`)}>
                ADOTAR
            </button>
            
            <form action={excluirLobinhoAction.bind(null, id)}>
                <button  className={styles.btnDelete} type="submit">EXCLUIR</button>
            </form>
                    
        </div>
    );
}