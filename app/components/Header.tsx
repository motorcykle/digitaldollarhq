import Link from "next/link";
import { Roboto_Mono } from 'next/font/google'
import { BadgeDollarSign } from "lucide-react";

const inter =  Roboto_Mono({ subsets: ['latin'], weight: '700' })

export default function Header () {
  return <header>
    <nav className="text-center py-9">
      <div className="space-y-1">
        <Link href={"/"} className={inter.className + " uppercase text-2xl font-bold flex items-center justify-center gap-4"}>
          DigitalDollar HQ 
        </Link>
        <p className="text-md text-muted-foreground tracking-wide font-semibold">
          building dreams, one step at a time
        </p>
      </div>

    </nav>
  </header>
}