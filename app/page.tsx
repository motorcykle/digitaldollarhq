import { CoinsIcon, InstagramIcon, DollarSignIcon } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn's button component

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="max-w-6xl px-4 py-10 mx-auto text-center">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-9xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r  from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Learn to <br /> Build Wealth
            </span>
            <CoinsIcon className="inline-block text-green-400 w-12 h-12 md:w-24 md:h-24 ml-4" />
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Discover how to achieve{" "}
            <span className="text-green-500 font-semibold">$10k+/month</span>{" "}
            and transform your life!
          </p>
          <div className="mt-8">
            <Button
              variant="default"
              size="lg"
              className="px-6 py-3 text-lg font-semibold"
            >
              Join the Waitlist
            </Button>
          </div>
          <div className="mt-8">
            <p className="text-sm md:text-base max-w-2xl mx-auto text-muted-foreground">
              Join a community of like-minded individuals who are building their
              financial freedom online. Follow us on{" "}
              <a
                href="https://www.instagram.com/wifimoney.hq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:text-blue-400"
              >
                Instagram
              </a>{" "}
              for tips, strategies, and success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="bg-gray-50 py-12 px-2">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Instagram Success Stories
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Check out real success stories and wealth-building tips shared by
            our community on Instagram.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Instagram Post 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Instagram Post"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-gray-800">Transform Your Life</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn the steps you can take to increase your income and build
                  the lifestyle you’ve always dreamed of.
                </p>
              </div>
            </div>
            {/* Instagram Post 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Instagram Post"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-gray-800">Financial Freedom</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Discover how to create multiple income streams and achieve
                  financial freedom faster.
                </p>
              </div>
            </div>
            {/* Instagram Post 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Instagram Post"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-gray-800">Step-by-Step Guides</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get exclusive access to detailed guides that help you take
                  actionable steps toward wealth creation.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="https://www.instagram.com/wifimoney.hq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:text-blue-400"
            >
              See More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12 px-2">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Start Your Journey Today
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Learn how to create passive income streams and achieve the freedom
            you deserve. Get exclusive insights and actionable steps that can
            help you reach your financial goals.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
