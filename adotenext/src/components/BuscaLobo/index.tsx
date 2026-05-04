"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useRouter, useSearchParams } from "next/navigation";

export default function BuscaLobo() {

    const router = useRouter();
    const searchParams = useSearchParams();

    function updateParams(key: string, value: string | null) {
        
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        params.set("_page", "1");
        router.push(`/lobinhos?${params.toString()}`);
    }

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        updateParams("nome_like", e.target.value || null);
    }

    function handleAdotado(e: React.ChangeEvent<HTMLInputElement>) {
        updateParams("adotado", e.target.checked ? "true" : null);
    }


    return (
        <section className={styles.searchSection}>
            
            <nav className={styles.searchBar}>
                
                <div className={styles.inputPawSet}>
                    
                    <button className={styles.searchBtn}></button>
                    
                    <input type="text" name="nome" className={styles.inputBar} 
                        defaultValue={searchParams.get("nome_like") || ""}
                        onChange={handleSearch} />
                    
                    <p className={styles.errorCase} id="error-case"></p>
                
                </div>
                
                <Link href="/add_lobo" className={styles.addLoboLink}>+ Lobo</Link>
            
            </nav>
            
            <div className={styles.adoptedFilter}>
                
                <input type="checkbox" name="check" className={styles.checkFilter} 
                    checked={searchParams.get("adotado") === "true"}
                    onChange={handleAdotado}/>
                
                <p>Ver lobinhos adotados</p>
            
            </div>
        
        </section>
    );
}