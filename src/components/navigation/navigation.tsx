"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Logo } from "./logo";
import Link from "next/link";
import { Menu, X, MoveRight, ChevronDown } from "lucide-react";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Privacy", href: "/privacy" },
  { title: "Disclaimer", href: "/disclaimer" },
];

const pricingPlans: { title: string; href: string; description: string }[] = [
  {
    title: "Free teir",
    href: "",
    description:
      "Get started at no cost. Perfect for individuals exploring the app.",
  },
  {
    title: "IWIP Pro",
    href: "",
    description:
      "Unlock all features with unlimited document uploads and other advanced tools.",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);

  return (
    <div className="h-auto bg-muted">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full z-50">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:block" viewport={false}>
            <NavigationMenuList className="gap-3 space-x-0">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title} className="font-bold">
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              {/* Pricing*/}
              <NavigationMenuItem className="">
                <NavigationMenuTrigger
                  className={`$navigationMenuTriggerStyle() font-bold`}
                >
                  Pricing
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[340px] gap-2">
                    {pricingPlans.map((plan) => (
                      <PricingItem
                        key={plan.title}
                        title={plan.title}
                        href={plan.href}
                      >
                        {plan.description}
                      </PricingItem>
                    ))}
                    <li className="pt-1 border-t mt-1">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/pricing"
                          className="flex items-center justify-between px-3 py-3 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors"
                        >
                          View all plans
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact */}
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
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>

              {/* Mobile Dropdown */}
              {isOpen && (
                <div className="absolute top-16 right-0 w-64 bg-background border rounded-xl shadow-lg py-4 px-4 flex flex-col gap-4">
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

                  {/* Pricing accordion in mobile */}
                  <div className="flex flex-col gap-2">
                    <button
                      className="flex justify-between items-center text-lg w-full"
                      onClick={() => setPricingOpen(!pricingOpen)}
                    >
                      Pricing
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                          pricingOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {pricingOpen && (
                      <div className="flex flex-col gap-1 pl-3 border-l ml-1">
                        {pricingPlans.map((plan) => (
                          <Link
                            key={plan.title}
                            href={plan.href}
                            className="flex flex-col gap-0.5 py-2"
                            onClick={() => {
                              setIsOpen(false);
                              setPricingOpen(false);
                            }}
                          >
                            <span className="text-sm font-medium">
                              {plan.title}
                            </span>
                            <span className="text-xs text-muted-foreground line-clamp-2">
                              {plan.description}
                            </span>
                          </Link>
                        ))}
                        <Link
                          href="/pricing"
                          className="flex items-center justify-between text-sm font-medium pt-2 border-t mt-1"
                          onClick={() => {
                            setIsOpen(false);
                            setPricingOpen(false);
                          }}
                        >
                          View all plans
                          <MoveRight className="w-4 h-4 text-muted-foreground" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

function PricingItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="flex flex-col gap-1 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors"
        >
          <div className="font-semibold leading-none">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Navbar;
