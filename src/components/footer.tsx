import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Company",
    links: [
      {
        title: "About us",
        href: "/about",
      },
      {
        title: "Pricing",
        href: "/pricing",
      },
      {
        title: "Events",
        href: "/events",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Support",
        href: "/support",
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
        href: "/disclaimer",
      },
      {
        title: "Privacy Policy",
        href: "/privacy",
      },
      {
        title: "Terms of service",
        href: "/terms-of-service",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col bg-primary text-white font-roboto rounded-t-4xl px-6 py-6 lg:px-8  mx-auto ">
      <div className="grow max-w-(--breakpoint-xl)" />
      <footer className="border-none">
        <div className="max-w-(--breakpoint-xl) mx-auto ">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-3">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/footer.svg"
                  alt="Logo"
                  width={256}
                  height={256}
                  className="h-12 w-auto"
                />
              </Link>

              <p className="mt-4 text-white max-w-2xl">
                Designed to empower young people by fostering the right mindset,
                building leadership skills, and nurturing entrepreneurial
                thinking to help them unlock their potential and shape their
                future
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
                        target="_self"
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
              &copy; {new Date().getFullYear()} <Link href="/">IWIP</Link>. All
              rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
