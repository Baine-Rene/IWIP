import Image from "next/image";

const features = [
  {
    title: "Build Your Identity",
    description: "Create a profile that reflects your journey, your work, and who you are becoming.",
    image: "/images/IMG-1.png",
  },
  {
    title: "Make meaningful connections",
    description: "Connect with people, start conversations, and save your contacts all in one place.",
    image: "/images/IMG-3.png",
  },
  {
    title: "Be part of real communities",
    description: "Join or build communities where people collaborate, share oppotunities, and grow together.",
    image: "/images/IMG-2.png",
  },
];

const Features = () => {
  return (
    <div className="bg-secondary min-h-screen flex items-center justify-center py-12 px-6">
      <div className="grow w-full sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Powered by the Young Eye tech
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