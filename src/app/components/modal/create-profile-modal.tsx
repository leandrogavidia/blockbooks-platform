import Link from "next/link"

export const CreateProfileModal = () => {

    return (
        <>
            <h2 className="text-center text-black text-2xl">Crear Perfil</h2>
            <div className="pt-6">
                <label htmlFor='username' className="font-semibold">Username</label>
                <input id="username" className="border-b  mt-2 w-full text-black placeholder-black border-black bg-transparent outline-none py-1" placeholder="El Principito" type="text" />
            </div>
            <div className="pt-6">
                <label htmlFor='username' className="font-semibold">ENS (Opcional)</label>
                <input id="username" className="border-b  mt-2 w-full text-black placeholder-black border-black bg-transparent outline-none py-1" placeholder="example.eth" type="text" />
            </div>
            <div className="pt-6">
                <label htmlFor='username' className="font-semibold">Descripción (Opcional)</label>
                <textarea id="username" className="border mt-2 w-full rounded-xl text-black placeholder-black border-black bg-transparent outline-none py-1" rows={4} />
            </div>
            <div className="mt-10">
                <button className="rounded-full border w-full mb-4 bg-primary border-primary text-white" type="submit">Confirmar</button>
                <Link href={'?show='} className="rounded-full border w-full border-primary text-black  flex justify-center items-center">Cancelar</Link>
            </div>
        </>
      )
    }