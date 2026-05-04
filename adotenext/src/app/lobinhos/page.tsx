import BuscaLobo from "@/components/BuscaLobo";
import styles from "./styles.module.css";
import { getLobinhos } from "@/services/lobinhosService";
import ItemLobo from "@/components/ItemLobo";
import { SearchProps } from "@/types/searchProps";
import PaginacaoLobo from "@/components/PaginacaoLobo";

export default async function Lobinhos({searchParams}: SearchProps) {

    const resolvedSearchParams = await searchParams;

    // await new Promise(resolve => setTimeout(resolve, 5000)); // Simula um atraso de 5 segundos (Testes)

    const page = Number(resolvedSearchParams._page) || 1;
    const nome_like = resolvedSearchParams.nome_like || "";
    const adotado = resolvedSearchParams.adotado === "true" ? true : undefined;

    const { data: lobinhos, totalPages } = await getLobinhos(page, 4, nome_like, adotado);
    
    return (
        
        <main className={styles.main}>
            
            <BuscaLobo/>

            <ul className={styles.wolfList}>

                {lobinhos.length === 0 ? (
                        
                        <p className={styles.emptyMsg}>Nenhum lobinho encontrado.</p>
                    
                    ) : (
                        
                        lobinhos.map((lobinho, index) => (
                            <ItemLobo key={lobinho.id} lobinho={lobinho} isEven={(index + 1) % 2 === 0} isHomePage={false} />
                        ))
                
                )}
            
            </ul>

            {lobinhos.length > 0 && (
                
                <PaginacaoLobo page={page} totalPages={totalPages} />
            
            )}
        
        </main>
    );
}