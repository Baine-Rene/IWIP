import { Separator } from "@/components/ui/separator";
import {
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "./navigation/logo";

const footerSections = [
  {
    title: "Company",
    links: [
      {
        title: "About us",
        href: "/about",
      },
      {
        title: "News",
        href: "/News",
      },
      {
        title: "Contact",
        href: "Contact",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Support",
        href: "#",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        title: "Twitter",
        href: "https://x.com/IwipApp",
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/company/106453504/admin/dashboard/",
      },
      {
        title: "Instagram",
        href: "https://www.instagram.com/iwipapp/",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Disclaimer",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "/privacy",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col bg-primary text-white">
      <div className="grow" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-3">
              {/* Logo */}
              <Logo />

              <p className="mt-4 text-white">
                Designed to empower young people by fostering the right mindset, building leadership skills, and nurturing entrepreneurial thinking to help them unlock their potential and shape their future
              </p>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-semibold">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="hover:text-blue-400 text-white"
                        target="_blank"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-white">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                IWIP
              </Link>
              . All rights reserved.
            </span>

            {/* <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
