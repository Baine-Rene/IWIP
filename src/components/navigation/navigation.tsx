"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Logo } from "./logo";
import Link from "next/link";
import { Menu, X, MoveRight } from "lucide-react";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "privacy", href: "/privacy" },
  { title: "Disclaimer", href: "/disclaimer" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-auto bg-muted">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full z-50">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-3 space-x-0">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title} className="font-bold">
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <a href="mailto:iwiwpapp@gmail.com">
              <Button className="rounded-full">Contact</Button>
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>

              {/* Mobile Dropdown */}
              {isOpen && (
                <div className="absolute top-16 right-0 w-56 bg-background border rounded-xl shadow-lg py-4 px-4 flex flex-col gap-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex justify-between items-center text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                      <MoveRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;