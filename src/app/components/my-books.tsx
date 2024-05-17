import Link from "next/link";
import Image from "next/image";

const values = [
  {
    id: "3795894c-be4c-4771-a6e6-1c7156df71be",
    img: "https://s3-alpha-sig.figma.com/img/0fac/8c92/7e9d48cc9d8908bc8faae725e3c3b612?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQmVmfpciqxL2LnNOleDSXVFEj0AJ95rCp5J3esNIfKgXGDeNHjWROc9jJbEr2hib6j-XQbRsCKPnHbcj3ibnPnM~1XE1YvHRVLpDGB0yjOtNLT2h2VaSehdPs3vHr-opnU8bDmsYr7ccJ448xcJ9rnUGOM9TjRvMn8r6cn-vfT8rLXXNqJwcPDz0LYKSVRvYnP-hPh1SZoHQe00tRLMnqKXoIKbJewvxbCC7P723uqkcPwn2PZxubcwjkrD68PJRaCrAnXFn5L2JktMJmxM7Lv48MgKf0S8UN1SDbZoJS~fWk9tlvJ-EIDC5lI3XxElIPCWPSyP759ImLwxGcgMMg__",
    title: "El Principito",
    price: "0.01",
    currency: "ETH",
    author: "XXXX XXX",
  },
  {
    id: "5f11ae73-4d7c-46d6-8878-18ee815fc534",
    img: "https://s3-alpha-sig.figma.com/img/0fac/8c92/7e9d48cc9d8908bc8faae725e3c3b612?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQmVmfpciqxL2LnNOleDSXVFEj0AJ95rCp5J3esNIfKgXGDeNHjWROc9jJbEr2hib6j-XQbRsCKPnHbcj3ibnPnM~1XE1YvHRVLpDGB0yjOtNLT2h2VaSehdPs3vHr-opnU8bDmsYr7ccJ448xcJ9rnUGOM9TjRvMn8r6cn-vfT8rLXXNqJwcPDz0LYKSVRvYnP-hPh1SZoHQe00tRLMnqKXoIKbJewvxbCC7P723uqkcPwn2PZxubcwjkrD68PJRaCrAnXFn5L2JktMJmxM7Lv48MgKf0S8UN1SDbZoJS~fWk9tlvJ-EIDC5lI3XxElIPCWPSyP759ImLwxGcgMMg__",
    title: "El Principito",
    price: "0.01",
    currency: "ETH",
    author: "XXXX XXX",
  },
  {
    id: "81f0a25b-d288-4ce2-80a9-0ed853692501",
    img: "https://s3-alpha-sig.figma.com/img/0fac/8c92/7e9d48cc9d8908bc8faae725e3c3b612?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQmVmfpciqxL2LnNOleDSXVFEj0AJ95rCp5J3esNIfKgXGDeNHjWROc9jJbEr2hib6j-XQbRsCKPnHbcj3ibnPnM~1XE1YvHRVLpDGB0yjOtNLT2h2VaSehdPs3vHr-opnU8bDmsYr7ccJ448xcJ9rnUGOM9TjRvMn8r6cn-vfT8rLXXNqJwcPDz0LYKSVRvYnP-hPh1SZoHQe00tRLMnqKXoIKbJewvxbCC7P723uqkcPwn2PZxubcwjkrD68PJRaCrAnXFn5L2JktMJmxM7Lv48MgKf0S8UN1SDbZoJS~fWk9tlvJ-EIDC5lI3XxElIPCWPSyP759ImLwxGcgMMg__",
    title: "El Principito",
    price: "0.01",
    currency: "ETH",
    author: "XXXX XXX",
  },
  {
    id: "8774c1fe-4caf-4ce6-a71a-99a979e46368",
    img: "https://s3-alpha-sig.figma.com/img/0fac/8c92/7e9d48cc9d8908bc8faae725e3c3b612?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQmVmfpciqxL2LnNOleDSXVFEj0AJ95rCp5J3esNIfKgXGDeNHjWROc9jJbEr2hib6j-XQbRsCKPnHbcj3ibnPnM~1XE1YvHRVLpDGB0yjOtNLT2h2VaSehdPs3vHr-opnU8bDmsYr7ccJ448xcJ9rnUGOM9TjRvMn8r6cn-vfT8rLXXNqJwcPDz0LYKSVRvYnP-hPh1SZoHQe00tRLMnqKXoIKbJewvxbCC7P723uqkcPwn2PZxubcwjkrD68PJRaCrAnXFn5L2JktMJmxM7Lv48MgKf0S8UN1SDbZoJS~fWk9tlvJ-EIDC5lI3XxElIPCWPSyP759ImLwxGcgMMg__",
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
