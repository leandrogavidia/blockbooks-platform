"use client";

import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "./connect-button";
import { useState } from "react";
import { MenuOpened } from "./icons/menu-opened";
import { MenuClosed } from "./icons/menu-closed";
import { useAccount, useReadContract } from "wagmi";
import { abi } from "@/contracts/abi";
import { contractAddresses } from "@/contracts";

export function Header() {
  const { address, chainId } = useAccount()
  const result = useReadContract({
    abi,
    address: contractAddresses[chainId ? chainId as 421614: 0] as `0x${string}`,
    functionName: 'getAddressCollectionIds',
    chainId: chainId,
    account: address
  })

  console.log(address)
  console.log(result)
  console.log(chainId)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full flex justify-between gap-x-5 items-center p-4 max-w-3xl">
      <Link href="/">
        <Image
          src="/images/bb-logo.png"
          alt="BlockBooks Logo"
          width={1080}
          height={800}
          className="h-auto w-16"
        />
      </Link>

      <div className="flex justify-center gap-x-3 items-center">
        <Link href={'?show=add-book'} className="bg-third text-white font-bold rounded-full px-2.5 py-2 text-sm">
          Vender libro
        </Link>
        <ConnectButton />

        <div className="relative size-8 flex justify-center items-center">
          {isOpen ? (
            <MenuClosed
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer size-6"
            />
          ) : (
            <MenuOpened
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer size-8"
            />
          )}

          {isOpen && <nav className="absolute right-0 top-10">
            <ul className="flex flex-col justify-center items-start gap-y-3 bg-secondary rounded-lg p-3 min-w-32">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/mi-perfil">Mi perfil</Link>
              </li>
              <li>
                <Link href="/mis-libros">Mis libros</Link>
              </li>
              <li>
                <Link href="/files/blockbooks-roadmap-2024-demo.pdf" download={true}>Roadmap</Link>
              </li>
              <li>
                <Link href="/asistente">Asistente</Link>
              </li>
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
}
