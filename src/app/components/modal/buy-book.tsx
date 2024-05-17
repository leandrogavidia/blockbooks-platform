import Image from "next/image";
import Link from "next/link"

export const BuyBookModal = () => {
  return (
    <>
      <h2 className="text-center text-black text-2xl">El Principito</h2>
      <div className="pt-5">
        <h3 className="text-center">Autor: XXXX XXX</h3>
      </div>
      <div className="pt-5">
        <h3 className="text-center font-semibold text-2xl">10 USDT</h3>
      </div>
      <div className="pt-7">
        <Image
          width={100}
          height={200}
          className="w-full h-auto"
          src="/images/principito.png"
          alt=""
        />
      </div>
      <div className="mt-7">
        <button
          className="rounded-full border w-full mb-4 bg-primary border-primary text-white"
          type="submit"
        >
          Confirmar
        </button>
        <Link href={'?show='} className="rounded-full border w-full border-primary text-black  flex justify-center items-center">Cancelar</Link>
      </div>
    </>
  );
};
