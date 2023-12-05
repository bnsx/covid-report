"use client";
import Link from "next/link";

const data = [
  { label: "หน้าแรก", url: "/" },
  { label: "อาการ", url: "/symptom" },
  { label: "ติดต่อ", url: "/contact" },
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
      <div className="xl:block hidden">
        {data.map((v) => (
          <Link
            key={v.url}
            href={v.url}
            className="text-lg hover:text-muted-foreground text-white duration-300 pl-5"
          >
            {v.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
