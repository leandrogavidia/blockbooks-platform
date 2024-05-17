import Link from "next/link"

export const DonationModal = () => {

    return (
        <>
            <h2 className="text-center text-black text-2xl">¡Donación!</h2>
            <div className="pt-5">
                <h3 className="text-center">Creador: XXXX XXX</h3>
            </div>
            <div className="pt-14">
                <h3 className="text-center font-bold text-3xl">4 USDT</h3>
            </div>
            <hr className="mt-5 border-black " />
            <div className="mt-10">
                <button className="rounded-full border w-full mb-4 bg-primary border-primary text-white block text-center" type="submit">Confirmar</button>
                <Link href={'?show='} className="rounded-full border w-full border-primary text-black  flex justify-center items-center">Cancelar</Link>
            </div>
        </>
    )
}