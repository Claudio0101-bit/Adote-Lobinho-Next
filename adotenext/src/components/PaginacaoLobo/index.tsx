"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.css";


export default function Paginacao({ page, totalPages }: { page: number; totalPages: number }) {
    
    const router = useRouter();
    const searchParams = useSearchParams();

    function goToPage(newPage: number) {
        
        const params = new URLSearchParams(searchParams.toString());
        
        params.set("_page", String(newPage));
        
        router.push(`/lobinhos?${params.toString()}`);
    }

    const isFirst = page <= 1;
    const isLast = page >= totalPages;

    return (
        <section className={styles.pagination}>

            
            
            <button className={styles.btn} 
                    onClick={() => goToPage(1)}
                    disabled={isFirst}>
                « Primeira
            </button>

            <button
                className={styles.btn}
                onClick={() => goToPage(page - 1)}
                disabled={isFirst}
            >
                ‹ Anterior
            </button>

            <span className={styles.pageInfo}>
                {page} de {totalPages}
            </span>

            <button
                className={styles.btn}
                onClick={() => goToPage(page + 1)}
                disabled={isLast}
            >
                Próxima ›
            </button>

            <button className={styles.btn} 
                    onClick={() => goToPage(totalPages)}
                    disabled={isLast}>
                Última »
            </button>
            

        </section>
    );
}