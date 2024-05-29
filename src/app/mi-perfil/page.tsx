"use client";

import { useAccount, useReadContract } from "wagmi";
import { MyBooks } from "../components/my-books";
import { Day0AbiContract } from "@/contracts/abi";
import { Day0ContractAddresses } from "@/contracts";

const ProfilePage = () => {
  const { address, chainId } = useAccount();

  const hasMembership = useReadContract({
    abi: Day0AbiContract,
    address: Day0ContractAddresses[
      chainId ? (chainId as 11155111) : 0
    ] as `0x${string}`,
    functionName: "balanceOf",
    chainId: 11155111,
    account: address,
    args: [address],
  });
  return (
    <div>
      <h1 className="text-center text-2xl mb-7">Username</h1>
      <p className="font-semibold mb-7">
        Wallet: <span className="font-normal">{address}</span>
      </p>
      <p className="font-semibold mb-7">
        ENS: <span className="font-normal">example.eth</span>
      </p>
      <p className="font-semibold mb-7">Descripción: </p>
      <p className="font-semibold mb-7">
        Membresia:{" "}
        <span className="font-normal">
          {(Number(hasMembership.data) as any) > 0
            ? "Membresia Day 0"
            : "Sin membresia"}
        </span>
      </p>
      <p className="font-semibold mb-7">Libros creados: </p>

      <MyBooks />
    </div>
  );
};

export default ProfilePage;
