"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const data = [
  { label: "หน้าแรก", url: "/" },
  { label: "อาการ", url: "/symptom" },
  {
    label: "github",
    url: "https://github.com/bnsx",
    icon: <GitHubLogoIcon className="w-6 h-6" />,
  },
];
export default function Navbar() {
  return (
    <div className="xl:px-10 p-5 bg-black xl:flex justify-between">
      <Link
        href={"/"}
        className="text-2xl hover:text-muted-foreground text-white duration-300"
      >
        Hypersonix
      </Link>
      <div className="xl:flex items-center gap-6 hidden">
        {data.map((v) => (
          <Link
            key={v.url}
            href={v.url}
            target="_blank"
            className="text-lg hover:text-muted-foreground text-white duration-300"
          >
            {v.icon ? v.icon : v.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
