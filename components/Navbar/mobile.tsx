import { X } from "lucide-react";
import { Button } from "../ui/button";
import { navLink } from ".";
import Link from "next/link";

interface Props {
  onOpenChange: () => void;
  data: navLink[];
}
export default function MobileVersion({ onOpenChange, data }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white z-50 flex justify-center items-center">
      <div className="relative w-full">
        <div className="absolute top-5 right-5">
          <Button
            variant={"link"}
            onClick={onOpenChange}
            className="text-white text-xl"
          >
            <X />
          </Button>
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="flex flex-col w-full gap-1">
            {data.map((v) => {
              if (v.icon) {
                return (
                  <Button key={v.url} className="w-full" variant={"outline"}>
                    <Link href={v.url}>{v.icon}</Link>
                  </Button>
                );
              }
              return (
                <Button key={v.url} className="w-full" variant={"outline"}>
                  <Link href={v.url}>{v.label}</Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
