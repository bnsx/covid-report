"use client";
import { DataOverview } from "@/lib/covid/overview";

interface Props {
  data: DataOverview;
}
export default function TotalDeath({ data }: Props) {
  return (
    <div className="w-full rounded-md bg-[#575756]">
      <div className="py-5 text-center">
        <h2 className="text-xl text-white font-bold">เสียชีวิต</h2>
        <h1 className="text-2xl md:text-4xl xl:text-4xl text-white">
          {data.deaths.toLocaleString()}
        </h1>
        <h2 className="text-xl text-white font-extrabold">
          (+{data.todayDeaths.toLocaleString()})
        </h2>
      </div>
    </div>
  );
}
