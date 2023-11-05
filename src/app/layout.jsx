import { Inter } from "next/font/google";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App da 4ª ENTREGA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Cabecalho/>
        {children}
        <Rodape/>

      </body>
    </html>
  );
}
