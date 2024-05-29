"use client";

import Link from "next/link";
import { useAccount, useReadContract } from "wagmi";
import { Day0AbiContract, abi } from "@/contracts/abi";
import { Day0ContractAddresses } from "@/contracts";

const MembershipPage = () => {
  const { address, chainId } = useAccount();

  const Day0totalSupply = useReadContract({
    abi: Day0AbiContract,
    address: Day0ContractAddresses[
      chainId ? (chainId as 11155111) : 0
    ] as `0x${string}`,
    functionName: "totalSupply",
    chainId: 11155111,
    account: address,
  });

  const Day0Price = useReadContract({
    abi: Day0AbiContract,
    address: Day0ContractAddresses[
      chainId ? (chainId as 11155111) : 0
    ] as `0x${string}`,
    functionName: "keyPrice",
    chainId: 11155111,
    account: address,
  });

  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-y-6">
        <h1 className="text-3xl text-center font-semibold text-primary">
          ¡Sé miembro de BlockBooks y obten beneficios exclusivos!
        </h1>
        <h2 className="text-2xl text-center">
            Beneficios por tener la membresía de BlockBooks:{" "}
        </h2>
        <ul className="flex flex-col justify-center items-start gap-y-4 w-full bg-third shadow-xl rounded-xl p-4">
          <li>- Leer cualquier libro hasta la caducidad de tu membresía</li>
          <li>- Acceso a eventos exclusivos para miembros </li>
          <li>- Acceso y membresía a clubes de lectura</li>
        </ul>
      </section>

      <div className="h-[1px] w-full bg-gray-500 my-10"></div>

      <section className="flex flex-col justify-center items-center gap-y-6">
        <h2 className="text-3xl text-center font-semibold">
          ¡Vuelvete un{" "}
          <span className="text-third font-bold">miembro Day 0</span>!
        </h2>
        <p className="text-center">
          Ser un miembro 0 Day demuestra tu confianza en el proyecto y en su
          futuro. Al apoyarnos en nuestros inicios esta membresia limitada y sus
          actuales y futuros beneficios serán de por vida.
        </p>
        <Link
          className="bg-third rounded-full w-full text-center h-12 max-w-96 flex justify-center items-center"
          href={
            "https://app.unlock-protocol.com/checkout?id=346634fe-e6a6-4301-9fb1-93336319a787"
          }
        >
          COMPRAR MEMBRESIA Day 0
        </Link>
        <span>Existen un máximo de 100 membresias Day 0</span>
        <span>{Number(Day0totalSupply.data) as any} / 100</span>
        <span>Precio: {Number(Day0Price.data) as any} USDC</span>
      </section>

      <div className="h-[1px] w-full bg-gray-500 my-10"></div>

      <section className="flex flex-col justify-center items-center gap-y-5">
        <h2 className="text-center text-2xl">Proximamente</h2>
        <p className="text-center">
          Actualmente los beneficios estan siendo desarrollados, por lo cual
          cuando esten disponibles se habilitaran las membresias de tiempo
          limitado. ¡Mientras puedes adquirir una Day 0 que son de por vida!
        </p>
        <div className="grid grid-cols-2 gap-x-10 justify-center items-center">
          <div className="bg-primary rounded-2xl p-5 flex flex-col justify-center items-start gap-y-4 shadow-lg text-white">
            <h3>Membresia BlockBooks Mensual</h3>
            <p>
              <span className="text-third">Precio:</span> 20 USDC
            </p>
            <Link
              className="bg-gray-300 w-full rounded-full text-gray-600 flex justify-center items-center py-2 cursor-default pointer-events-none select-none"
              href={"#"}
            >
              COMPRAR MEMBRESIA
            </Link>
          </div>
          <div className="bg-primary rounded-2xl p-5 flex flex-col justify-center items-start gap-y-4 shadow-lg text-white">
            <h3>Membresia BlockBooks Anual</h3>
            <p>
              <span className="text-third">Precio:</span> 200 USDC (Ahorra 40
              USDC)
            </p>
            <Link
              className="bg-gray-300 w-full rounded-full text-gray-600 flex justify-center items-center py-2 cursor-default pointer-events-none select-none"
              href={"#"}
            >
              COMPRAR MEMBRESIA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;