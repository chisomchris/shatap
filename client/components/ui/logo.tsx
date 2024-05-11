import Link from "next/link";

export function Logo() {
  return (
    <Link
      href={"/"}
      className="bg-gradient-to-r from-blue-600 via-green-500 to-[orangered] inline-block text-transparent bg-clip-text font-bold text-2xl"
    >
      ShatApp
    </Link>
  );
}
