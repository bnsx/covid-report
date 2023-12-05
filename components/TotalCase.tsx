"use client";
import { DataOverview } from "@/lib/covid/overview";

interface Props {
  data: DataOverview;
}
export default function TotalCase({ data }: Props) {
  return (
    <div className="w-full rounded-md bg-[#C83812]">
      <div className="py-5 text-center">
        <h2 className="text-xl text-white font-bold">ติดเชื้อสะสม</h2>
        <h1 className="text-4xl text-white">{data.cases.toLocaleString()}</h1>
        <h2 className="text-xl text-white font-extrabold">
          (+{data.NewConfirmed.toLocaleString()})
        </h2>
      </div>
    </div>
  );
}
