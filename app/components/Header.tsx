import Link from "next/link";

export default function Header () {
  return <header>
    <nav className="text-center">
      <Link href={"/"} className="text-xs font-bold">
        Digital$ HQ
      </Link>
    </nav>
  </header>
}