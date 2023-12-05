"use client";
import { DataOverview } from "@/lib/covid/overview";

interface Props {
  data: DataOverview;
}
export default function Hostpitalize({ data }: Props) {
  return (
    <div className="w-full rounded-md bg-[#307FE2]">
      <div className="py-5 text-center">
        <h2 className="text-xl text-white font-bold">รักษาอยู่ใน รพ.</h2>
        <h1 className="text-2xl md:text-4xl xl:text-4xl text-white">
          {data.Hospitalized.toLocaleString()}
        </h1>
        <h2 className="text-xl text-white font-extrabold">
          (+{data.NewHospitalized.toLocaleString()})
        </h2>
      </div>
    </div>
  );
}
