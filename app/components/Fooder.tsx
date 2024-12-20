import Link from "next/link";
import { InstagramIcon } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you're using Shadcn's button component
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: "700" });

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="text-center">
        <p
          className={`${robotoMono.className} text-md text-muted-foreground tracking-wide font-semibold`}
        >
          Follow us on Instagram for more updates:
        </p>
        <div className="mt-4">
          <Link
            href="https://www.instagram.com/wifimoney.hq/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold hover:text-blue-400 flex items-center justify-center gap-2"
          >
            <InstagramIcon className="w-6 h-6" />
            @wifimoney.hq
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} DigitalDollar HQ. All Rights Reserved.
        </p>
        <div className="mt-4">
          <Link href="/terms" passHref>
            <Button variant="link" className="text-sm text-muted-foreground hover:text-white">
              Terms & Conditions
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
