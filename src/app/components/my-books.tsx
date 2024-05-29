import Link from "next/link";
import Image from "next/image";

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
    title: "El Principito",
    price: "0.01",
    currency: "ETH",
    author: "XXXX XXX",
  },
];

export const MyBooks = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-3">
      {values.map((item) => {
        const { author, currency, id, img, price, title } = item;
        return (
          <div className="mb-4" key={id}>
            <Link className="flex" href={"?show=buy-book&" + id}>
              <Image
                width={64}
                height={112}
                className="w-16 mr-3 h-28"
                src={img}
                alt={title + "'s book cover"}
              />
              <div className="w-[74%] flex flex-col justify-between">
                <div>
                  <h2 className="font-semibold  text-xl">{title}</h2>
                  <p>Autor: {author}</p>
                </div>
                <Link className="font-semibold justify-self-end" href={"#"}>
                  Descargar
                </Link>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
