import Image from "next/image";

const features = [
    {
        category: "",
        title: "Our Mission",
        details:
            "To redefine networking by making it smarter, more human, and more impactful, so that every connection can lead to real opportunities.",
        image: "/images/IMG-5.png",
    },
    {
        category: "",
        title: "Our Vision",
        details:
            "Build authentic, lasting connections by combining simplicity, personalization, and technology.",
        image: "/images/IMG-4.png",
    },
];

const Values = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-(--breakpoint-lg) w-full">
                <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
                    {features.map((feature) => (
                        <div
                            key={feature.category}
                            className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse"
                        >
                            <div className="w-full aspect-[4/5] rounded-xl border border-border/50 overflow-hidden relative">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="basis-3/3">
                                <span className="uppercase font-medium text-sm text-muted-foreground">
                                    {feature.category}
                                </span>
                                <h4 className="my-3 text-4xl font-bold tracking-tight">
                                    {feature.title}
                                </h4>
                                <p className="text-muted-foreground">{feature.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Values;
