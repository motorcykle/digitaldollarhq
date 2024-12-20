import Link from "next/link";
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '700' });

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="text-center">
        <p className={robotoMono.className + " text-md text-muted-foreground tracking-wide font-semibold"}>
          Follow us on Instagram for more updates:
        </p>
        <div className="mt-4">
          <Link 
            href="https://www.instagram.com/wifimoney.hq/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 font-semibold text-lg"
          >
            @wifimoney.hq
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} DigitalDollar HQ. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
