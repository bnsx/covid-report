import { getDataPerWeek } from "@/lib/covid/week";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import TotalCase from "@/components/TotalCase";
import { getDataOverview } from "@/lib/covid/overview";
import { Input } from "@/components/ui/input";
import TotalRecovered from "@/components/TotalRecovered";
import Hostpitalize from "@/components/Hospitalize";
import TotalDeath from "@/components/TotalDeath";

export const revalidate = 1800;

export default async function Home() {
  const dataPerWeek = await getDataPerWeek();
  const dataOverview = await getDataOverview();

  return (
    <div className="space-y-5">
      <h1 className="text-2xl xl:text-4xl font-semibold">
        รายงานผู้ป่วย COVID 19 (ไทย)
      </h1>
      <div className="xl:flex gap-5 space-y-5 xl:space-y-0">
        <div className="xl:w-1/4 relative">
          <div className="space-y-1 xl:sticky top-10">
            <TotalCase data={dataOverview} />
            <div className="grid grid-cols-2 gap-1 xl:block md:space-y-0 xl:space-y-1">
              <TotalRecovered data={dataOverview} />
              <Hostpitalize data={dataOverview} />
            </div>
            <TotalDeath data={dataOverview} />
          </div>
        </div>
        <div className="xl:w-3/4 space-y-5">
          <h1 className="text-xl xl:text-2xl font-bold">
            ข้อมูลรายสัปดาห์ (รายจังหวัด)
          </h1>
          <DataTable data={dataPerWeek} columns={columns} />
        </div>
      </div>
    </div>
  );
}
