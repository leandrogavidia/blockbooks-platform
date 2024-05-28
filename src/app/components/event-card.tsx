import Image from "next/image";
import Link from "next/link";

export function EventCard({
  image,
  date,
  description,
  link,
  title,
}: {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}) {
  return (
    <div className="mb-4 rounded-se-xl rounded-ss-xl overflow-hidden w-full">
      <Image
        src={image}
        alt={`${title}'s s book cover`}
        width={120}
        height={40}
        className="w-full h-52 object-cover object-center"
      />
      <div className="bg-third px-2 py-4 rounded-es-xl rounded-ee-xl flex flex-col justify-center items-start gap-y-4">
        <div className="flex justify-between w-full">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <span className="text-xl">{date}</span>
        </div>

        <p className="leading-4">{description}</p>

        <Link
          href={link}
          className="rounded-full border bg-primary border-primary text-white h-8 text-center flex justify-center items-center w-full"
        >
          <button type="submit">Registrarme</button>
        </Link>
      </div>
    </div>
  );
}
