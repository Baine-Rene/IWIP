import Image from "next/image";

const features = [
  {
    title: "Effortless Connectivity",
    description: "Replace paper cards with instant digital exchanges.",
    image: "/images/IMG-1.png",
  },
  {
    title: "Community Growth",
    description: "Engage with entrepreneurs, mentors and investors in one environment.",
    image: "/images/IMG-3.png",
  },
  {
    title: "Smart Integration",
    description: "Connect with other platforms and showcase your work dynamically.",
    image: "/images/IMG-2.png",
  },
];

const Features = () => {
  return (
    <div className="bg-secondary min-h-screen flex items-center justify-center py-12 px-6">
      <div className="grow w-full sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Powered by the Young Eye Initiative
        </h2>
        <div className="w-full mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col text-start w-full"
            >
              <div className="mb-5 sm:mb-6 w-full aspect-[4/5] bg-muted rounded-xl overflow-hidden relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-semibold tracking-tight">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;