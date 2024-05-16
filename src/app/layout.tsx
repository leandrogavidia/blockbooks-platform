import type { Metadata } from "next";
import { Inter, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import Web3ModalProvider from "@/context";
import { cookieToInitialState } from "wagmi";
import { config } from '@/config'
import { headers } from 'next/headers'
import { Footer } from "./components/footer";
const montserratAlternates = Montserrat_Alternates({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlockBoos",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body className={`${montserratAlternates.className} min-h-screen flex flex-col justify-between items-center gap-y-10`}>
        <Web3ModalProvider initialState={initialState}>
          <Header />
          <main className="p-4">{children}</main>
          <Footer />
        </Web3ModalProvider>
      </body>
    </html>
  );
}
