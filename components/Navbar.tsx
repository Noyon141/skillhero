import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Contact",
      href: "/contacts",
    },
    {
      title: "About",
      href: "/about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-base lg:text-xl font-bold uppercase">
                Skill Hero
              </span>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <SignedOut>
              <Link
                href={"/sign-in"}
                className="text-base font-semibold flex items-center gap-x-1"
              >
                Sign in
                <LogIn size={15} />
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* MOBILE NAV */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Sheet</SheetTitle>
                <div className="flex flex-col space-y-4 mt-6 pt-6 mx-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="pt-4 border-t flex items-center justify-between mr-4">
                    <ThemeToggle />
                    <SignedOut>
                      <Link
                        href={"/sign-in"}
                        className="text-base font-semibold flex items-center gap-x-1"
                      >
                        Sign in
                        <LogIn size={15} />
                      </Link>
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
