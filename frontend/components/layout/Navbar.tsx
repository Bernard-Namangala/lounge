import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-900/95 backdrop-blur supports-[backdrop-filter]:bg-dark-900/60 border-b border-dark-600">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold text-primary-light">
              Chill Lounge
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link
              href="/explore"
              className="text-sm font-medium text-light-400 transition-colors hover:text-light-50"
            >
              Explore
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium text-light-400 transition-colors hover:text-light-50"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-light-400 transition-colors hover:text-light-50"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-primary-DEFAULT hover:bg-primary-dark text-white"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
