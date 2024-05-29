"use client";

import Link from "next/link";
import Image from "next/image"
import { useAccount, useWriteContract } from "wagmi";
import { abi } from "@/contracts/abi";
import { contractAddresses } from "@/contracts";
import { parseEther } from "ethers";
import { useForm, SubmitHandler } from "react-hook-form";
import { convertBase64 } from "@/app/utils";
import { useState } from "react";

type Inputs = {
  name: string;
  price: string;
  cover: string;
  pdf: string;
};

export const AddBookModal = () => {
  const [currentCover, setCurrentCover] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { writeContract, data, status, isSuccess } = useWriteContract();
  const { address, chainId } = useAccount();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true)
    try {      
      const name = data.name
  
      const weiPrice = parseEther(data.price)
      console.log(data.price)
      console.log(weiPrice)
  
      const imageFile  = data.cover[0]
      const cover = await convertBase64(imageFile);

      writeContract({
        abi,
        address: contractAddresses[
          chainId ? (chainId as 421614) : 0
        ] as `0x${string}`,
        functionName: "createCollection",
        chainId: chainId,
        account: address,
        args: [
          name,
          "https://green-key-hummingbird-678.mypinata.cloud/ipfs/QmZ2iVb2Ka5pWtmTz3Ekq9n7tsqGE7PrmPFpEnCaTBX5Ds",
          weiPrice,
        ],
      })

      setIsLoading(false)
    } catch (e) {
      console.error(e)
      setIsLoading(false)
    }
  };

  console.log("SELL", data);
  console.log("SELL STATUS", status);

  return (
    <>
      <h2 className="text-center text-black text-2xl">Añadir libro</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={isLoading ? "pointer-events-none cursor-default select-none" : ""}>
        <div className="pt-6">
          <label htmlFor="name" className="font-semibold">
            Nombre
          </label>
          <input
            id="name"
            className="border-b  mt-2 w-full text-black placeholder-black border-black bg-transparent outline-none py-1"
            placeholder="e.g. El Principito"
            type="text"
            {...register("name")}
          />
        </div>
        <div className="pt-6">
          <label htmlFor="price" className="font-semibold">
            Precio
          </label>
          <input
            id="price"
            step="any"
            className="border-b  mt-2 w-full text-black placeholder-black border-black bg-transparent outline-none py-1"
            placeholder="e.g. 0.00001 ETH"
            type="number"
            {...register("price")}
          />
        </div>
        <div className="pt-6">
          <label
            htmlFor="cover"
            className="flex items-center justify-center text-xl rounded-xl cursor-pointer bg-black size-52 mx-auto mb-4 overflow-hidden"
          >
            {
              currentCover ? <Image src={currentCover} width={208} height={208} alt="Imagen actual" title="Imagen actual" /> : <p className="text-white">Añadir Portada</p>
            }
          </label>
          <input
            type="file"
            id="cover"
            className="absolute hidden"
            accept=".png, .jpg, .jpeg, .gif"
            {...register("cover", {
              onChange: async (e) => { 
                const image = await convertBase64(watch("cover")[0]);
                setCurrentCover(image as string)
               }
            })}
          />

          <label
            htmlFor="pdf"
            className="rounded-full border w-full bg-primary border-primary text-white block text-center cursor-pointer"
          >
            Añadir archivo
          </label>
          <input
            type="file"
            accept="application/pdf"
            id="pdf"
            className="absolute hidden"
            {...register("pdf")}
          />
        </div>
        <div className="mt-20">
          <button
            type="submit"
            className="rounded-full border w-full mb-4 bg-primary border-primary text-white"
          >
            { isLoading ? "Enviando..." : "Confirmar" }
          </button>
          <Link
            href={"?show="}
            className="rounded-full border w-full border-primary text-black  flex justify-center items-center"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </>
  );
};
