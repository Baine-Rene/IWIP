import {
  Blocks,
  MessageCircle,
  Paperclip,
  Settings2,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Settings2,
    title: "Instant and Seamless Networking",
    description:
      "Share your IWIP profile and information instantly through one click, one QR code, and no friction.",
  },
  {
    icon: Blocks,
    title: "Community insights and Analytics",
    description:
      "Track engagement, activity and growth within your communities.",
  },
  {
    icon: Paperclip,
    title: "Share More Than Just a Profile",
    description:
      "Upload and share documents like resumes, portfolios, and links all accessible in one place.",
  },
  {
    icon: MessageCircle,
    title: "Built in Messaging and Contact Management",
    description:
      "Connect, chat and save contacts directly within one platform.",
  },
];

const Why = () => {
  return (
    <div className="bg-primary min-h-screen flex items-center justify-center py-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center text-white">
          Why choose IWIP?
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-(--breakpoint-lg) mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border bg-secondary rounded-xl py-6 px-5"
            >
              <div className="mb-4 h-10 w-10 flex items-center justify-center rounded-full">
                <feature.icon className="size-5" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1  text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
