"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import MobileVersion from "./mobile";

export type navLink = { label: string; url: string; icon?: JSX.Element };
const data: navLink[] = [
  { label: "หน้าแรก", url: "/" },
  { label: "อาการ", url: "/symptom" },
  {
    label: "github",
    url: "https://github.com/bnsx",
    icon: <GitHubLogoIcon className="w-6 h-6" />,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const onOpenChange = () => setOpen(!open);

  const renderNavLink = (item: navLink) => {
    return (
      <Link
        key={item.url}
        href={item.url}
        target={item.url.startsWith("http") ? "_blank" : ""}
        className="text-lg hover:text-muted-foreground text-white duration-300"
      >
        {item.icon ? item.icon : item.label}
      </Link>
    );
  };

  return (
    <div className="xl:px-10 p-5 bg-black flex items-center justify-between">
      <Link
        href={"/"}
        className="text-2xl hover:text-muted-foreground text-white duration-300"
      >
        Hypersonix
      </Link>
      <div className="xl:flex items-center gap-6 hidden">
        {data.map((item) => renderNavLink(item))}
      </div>
      <Button
        type="button"
        variant={"link"}
        className="xl:hidden"
        onClick={onOpenChange}
      >
        <MoreHorizontal className="text-white" />
      </Button>
      {open ? <MobileVersion onOpenChange={onOpenChange} data={data} /> : null}
    </div>
  );
}
