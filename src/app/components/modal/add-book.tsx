"use client"

import Link from "next/link";
import { useAccount, useWriteContract } from "wagmi";
import { abi } from "@/contracts/abi";
import { contractAddresses } from "@/contracts";
import { parseEther } from "ethers"

export const AddBookModal = () => {
  const { writeContract, data, status, isSuccess } = useWriteContract();
  const { address, chainId } = useAccount();

  console.log("SELL", data);
  console.log("SELL STATUS", status);
  console.log("ETHERS", parseEther("0.00001"))

  return (
    <>
      <h2 className="text-center text-black text-2xl">Añadir libro</h2>
      <div className="pt-6">
        <label htmlFor="username" className="font-semibold">
          Nombre
        </label>
        <input
          id="username"
          className="border-b  mt-2 w-full text-black placeholder-black border-black bg-transparent outline-none py-1"
          placeholder="El Principito"
          type="text"
        />
      </div>
      <div className="pt-6">
        <label htmlFor="username" className="font-semibold">
          Precio
        </label>
        <input
          id="username"
          className="border-b  mt-2 w-full text-black placeholder-black border-black bg-transparent outline-none py-1"
          placeholder="10 USDT"
          type="text"
        />
      </div>
      <div className="pt-6">
        <div className="flex items-center justify-center text-xl rounded-xl cursor-pointer bg-black w-52 h-52 mx-auto mb-4">
          <p className="text-white">Añadir Portada</p>
        </div>
        <button className="rounded-full border w-full bg-primary border-primary text-white">
          Añadir archivo
        </button>
      </div>
      <div className="mt-20">
        <button
          className="rounded-full border w-full mb-4 bg-primary border-primary text-white"
          onClick={() =>
            writeContract({
              abi,
              address: contractAddresses[
                chainId ? (chainId as 421614) : 0
              ] as `0x${string}`,
              functionName: "createCollection",
              chainId: chainId,
              account: address,
              args: [
                "BBL TEST 01",
                "https://green-key-hummingbird-678.mypinata.cloud/ipfs/QmZ2iVb2Ka5pWtmTz3Ekq9n7tsqGE7PrmPFpEnCaTBX5Ds",
                parseEther("0.00001")
              ],
            })
          }
        >
          Confirmar
        </button>
        <Link
          href={"?show="}
          className="rounded-full border w-full border-primary text-black  flex justify-center items-center"
        >
          Cancelar
        </Link>
      </div>
    </>
  );
};
