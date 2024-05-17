import Link from "next/link";

export const Modal = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-black/70 fixed h-screen w-screen top-0 left-0 overflow-auto">
      <div className="bg-fourth absolute rounded-2xl top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] mx-auto w-full max-w-96 p-5 h-[95%] overflow-auto">
        <Link href={"?show="} className="absolute ">
          X
        </Link>
        {children}
      </div>
    </div>
  );
};
