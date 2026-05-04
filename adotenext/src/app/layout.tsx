import Header from "@/components/Header";
import "./globals.css";
import { Darker_Grotesque, Roboto } from "next/font/google";
import { Metadata } from "next";
import Footer from "@/components/Footer";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-darker-grotesque"
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-roboto",
});


export const metadata: Metadata = {
  title: "Adoção de Lobinhos",
  description: "Encontre seu novo melhor amigo lobinho na nossa lista de lobinhos para adoção.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      
      <body className={`${darkerGrotesque.variable} ${roboto.variable}`}>
        
        <Header/>

        {children}

        <Footer/>
      
      </body>
    
    </html>
  );
}
