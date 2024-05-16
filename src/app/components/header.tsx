"use client";

import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "./connect-button";
import { useState } from "react";
import { MenuOpened } from "./icons/menu-opened";
import { MenuClosed } from "./icons/menu-closed";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full flex justify-between gap-x-5 items-center p-4">
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
        <button className="bg-third text-white font-bold rounded-full px-2.5 py-2 text-sm">
          Vender libro
        </button>
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

          <nav className="absolute right-0 top-10">
            <ul className="flex flex-col justify-center items-start gap-y-3 bg-secondary rounded-lg p-3 min-w-32">
              <li>
                <Link href="#">Inicio</Link>
              </li>
              <li>
                <Link href="#">Mi perfil</Link>
              </li>
              <li>
                <Link href="#">Mis libros</Link>
              </li>
              <li>
                <Link href="#">Roadmap</Link>
              </li>
              <li>
                <Link href="#">Asistente</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
