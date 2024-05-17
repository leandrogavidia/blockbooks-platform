import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import Web3ModalProvider from "@/context";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import { headers } from "next/headers";
import { Footer } from "./components/footer";

const montserratAlternates = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlockBoos",
  description: "",
};

export default function RootLayout({
  children,
  searchParams,
}: Readonly<{
  children: React.ReactNode;
  searchParams?: { [key: string]: string | string[] | undefined };
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  console.log(searchParams?.show);

  return (
    <html lang="en">
      <body
        className={`${montserratAlternates.className} bg-fourth h-screen flex flex-col justify-between items-center gap-y-10 mx-auto`}
      >
        <Web3ModalProvider initialState={initialState}>
          <Header />
          <main className="w-full max-w-3xl">{children}</main>
          <Footer />
        </Web3ModalProvider>
      </body>
    </html>
  );
}
