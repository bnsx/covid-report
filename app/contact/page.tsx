import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-bold">ติดต่อเรา</h1>
      <div>
        <div className="text-lg">
          Website /{" "}
          <Link
            href={"https://ceo.hypersonix.net"}
            className="text-muted-foreground hover:text-blue-500"
          >
            Hypersonix.net
          </Link>
        </div>
      </div>
    </div>
  );
}
