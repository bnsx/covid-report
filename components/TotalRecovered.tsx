"use client";
import { DataOverview } from "@/lib/covid/overview";

interface Props {
  data: DataOverview;
}
export default function TotalRecovered({ data }: Props) {
  return (
    <div className="w-full rounded-md bg-[#1C7C4E]">
      <div className="py-5 text-center">
        <h2 className="text-xl text-white font-bold">รักษาหายแล้ว</h2>
        <h1 className="text-2xl md:text-4xl xl:text-4xl text-white">
          {data.recovered.toLocaleString()}
        </h1>
        <h2 className="text-xl text-white font-extrabold">
          (+{data.NewRecovered.toLocaleString()})
        </h2>
      </div>
    </div>
  );
}
