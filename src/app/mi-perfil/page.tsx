import { MyBooks } from "../components/my-books"

const ProfilePage = () => {
  return (
    <div>
        <h1 className="text-center text-2xl mb-7">Username</h1>
        <p className="font-semibold mb-7">Wallet: <span className="font-normal">1234...4321</span></p>
        <p className="font-semibold mb-7">ENS: <span className="font-normal">example.eth</span></p>
        <p className="font-semibold mb-7">Descripción: </p>
        <p className="font-semibold mb-7">Libros creados: </p>

        <MyBooks />
    </div>
  )
}

export default ProfilePage