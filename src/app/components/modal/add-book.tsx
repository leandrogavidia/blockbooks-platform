import Link from "next/link"

export const AddBookModal = () => {

    return (
        <>
            <h2 className="text-center text-black text-2xl">Añadir libro</h2>
            <div className="pt-6">
                <label htmlFor='username' className="font-semibold">Nombre</label>
                <input id="username" className="border-b  mt-2 w-full text-black placeholder-black border-black bg-transparent outline-none py-1" placeholder="El Principito" type="text" />
            </div>
            <div className="pt-6">
                <label htmlFor='username' className="font-semibold">Precio</label>
                <input id="username" className="border-b  mt-2 w-full text-black placeholder-black border-black bg-transparent outline-none py-1" placeholder="10 USDT" type="text" />
            </div>
            <div className="pt-6">
                <div className="flex items-center justify-center text-xl rounded-xl cursor-pointer bg-black w-52 h-52 mx-auto mb-4">
                    <p className="text-white">Añadir Portada</p>
                </div>
                <button className="rounded-full border w-full bg-primary border-primary text-white">Añadir archivo</button>
            </div>
            <div className="mt-20">
                <button className="rounded-full border w-full mb-4 bg-primary border-primary text-white" type="submit">Confirmar</button>
                <Link href={'?show='} className="rounded-full border w-full border-primary text-black  flex justify-center items-center">Cancelar</Link>
            </div>
        </>
    )
}