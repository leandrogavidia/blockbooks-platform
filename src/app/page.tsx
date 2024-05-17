import Link from "next/link";
import Image from "next/image";
import { AddBookModal } from "./components/modal/add-book";
import { BuyBookModal } from "./components/modal/buy-book";
import { CreateProfileModal } from "./components/modal/create-profile-modal";
import { DonationModal } from "./components/modal/donation-modal";
import { Modal } from "./components/modal/modal";

const values = [
  {
    id: "3795894c-be4c-4771-a6e6-1c7156df71be",
    img: "/images/principito.png",
    title: "El Principito",
    price: "0.01",
    currency: "ETH",
    author: "XXXX XXX",
  },
  {
    id: "5f11ae73-4d7c-46d6-8878-18ee815fc534",
    img: "/images/principito.png",
    title: "El Principito",
    price: "0.01",
    currency: "ETH",
    author: "XXXX XXX",
  },
  {
    id: "81f0a25b-d288-4ce2-80a9-0ed853692501",
    img: "/images/principito.png",
    title: "El Principito",
    price: "0.01",
    currency: "ETH",
    author: "XXXX XXX",
  },
  {
    id: "8774c1fe-4caf-4ce6-a71a-99a979e46368",
    img: "/images/principito.png",
    title: "El Principito asdfasdfasdf asdfasdf",
    price: "0.01",
    currency: "ETH",
    author: "XXXX XXX",
  },
];

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
      {values.map((item) => {
        const { id, author, currency, img, price, title } = item;

        return (
          <div
            key={id}
            className="mb-4 rounded-se-xl rounded-ss-xl overflow-hidden w-full"
          >
            <Image
              src={img}
              alt={title + "'s book cover"}
              width={120}
              height={40}
              className="w-full h-52 object-cover object-center"
            />
            <div className="bg-third px-2 py-4 rounded-es-xl rounded-ee-xl">
              <div className="flex justify-between mb-5">
                <h2 className="text-2xl font-semibold w-[194px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {title}
                </h2>
                <span className="text-2xl font-semibold">
                  {price} {currency}
                </span>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-1/2 gap-y-2 justify-center">
                  <span className="leading-4 w-[154px] overflow-hidden text-ellipsis whitespace-nowrap">
                    Autor: {author}
                  </span>
                  <Link className="text-sm" href={"?show=donation"}>
                    Donar
                  </Link>
                </div>
                <Link
                  href={"?show=buy-book&" + id}
                  className="rounded-full border w-1/2 mb-4 bg-primary border-primary text-white h-8 text-center flex justify-center items-center"
                >
                  <button
                    type="submit"
                  >
                    Comprar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      {searchParams && searchParams.show === "perfil" && (
        <Modal>
          <CreateProfileModal />
        </Modal>
      )}
      {searchParams && searchParams.show === "add-book" && (
        <Modal>
          <AddBookModal />
        </Modal>
      )}
      {searchParams && searchParams.show === "donation" && (
        <Modal>
          <DonationModal />
        </Modal>
      )}
      {searchParams && searchParams.show === "buy-book" && (
        <Modal>
          <BuyBookModal />
        </Modal>
      )}
    </div>
  );
}
