"use client";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import android from "./android.svg";

interface Download2Props {
  heading?: string;
  description?: string;
  platforms?: {
    ios?: {
      title: string;
      subtitle: string;
      description: string;
      url: string;
    };
    android?: {
      title: string;
      subtitle: string;
      description: string;
      url: string;
    };
  };
}

const Download = ({
  heading = "Get Started Now",
  description = "The IWIP app is available now on all major devices.",
  platforms = {
    ios: {
      title: "Mobile Phone",
      subtitle: "iOS",
      description: "Designed for IOS devices.",
      url: "https://apps.apple.com/ug/app/iwip-app/id6761650856",
    },
    android: {
      title: "Mobile Phone / Tablet",
      subtitle: "Android",
      description: "Optimized for Android ecosystem.",
      url: "https://play.google.com/store/apps/details?id=com.app.iwp",
    },
  },
}: Download2Props) => {
  return (
    <section className="bg-muted py-32">
      <div className="flex flex-col justify-center px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto gap-16">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-lg">
            {description}
          </p>
        </div>

        {/* Download Options - Minimal Grid */}
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          {/* IOS */}
          <Link
            href={platforms.ios?.url || "#"}
            className="group text-center"
          >
            <div className="bg-background mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-110 group-hover:shadow-lg">
              <img
                src="/ios.svg"
                alt="Android icon"
                className="h-10 w-10 brightness-0 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>

            <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-blue-700">
              {platforms.ios?.subtitle}
            </h3>

            <p className="text-muted-foreground mb-6 text-sm">
              {platforms.ios?.description}
            </p>
          </Link>

          {/* Android */}
          <Link
            href={platforms.android?.url || "#"}
            className="group text-center"
          >
            <div className="bg-background mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm transition-all duration-300 group-hover:bg-green-500 group-hover:scale-110 group-hover:shadow-lg">
              <img
                src="/android.svg"
                alt="Android icon"
                className="h-10 w-10 brightness-0 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>

            <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-green-500">
              {platforms.android?.subtitle}
            </h3>

            <p className="text-muted-foreground mb-6 text-sm">
              {platforms.android?.description}
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Download };
