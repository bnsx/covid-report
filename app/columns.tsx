import { DataPerWeek } from "@/lib/covid/week";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<DataPerWeek>[] = [
  {
    accessorKey: "province",
    header: "จังหวัด",
  },
  {
    accessorKey: "new_case",
    header: "รายใหม่",
  },
  {
    accessorKey: "new_death",
    header: "เสียชีวิต",
  },
];
