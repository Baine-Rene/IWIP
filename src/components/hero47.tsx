import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Hero47Props {
    heading?: string;
    subheading?: string;
    description?: string;
    image?: {
        src: string;
        alt: string;
    };
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
}

const Hero47 = ({
    heading = "Reworking Networking With Digital Business Cards",
    description = "Designed to empower young people by fostering the right mindset, building leadership skills, and nurturing entrepreneurial thinking to help them unlock their potential and shape their future.",
    buttons = {
        primary: {
            text: "Join Now",
            url: "#",
        },
    },
    image = {
        src: "images/showcase.svg",
        alt: "Placeholder",
    },
}: Hero47Props) => {
    return (
        <section className="w-full pt-32 bg-blue-700">
            <div className="container flex flex-col items-center lg:my-0 lg:flex-row lg:justify-center lg:gap-8 mx-auto max-w-7xl lg:px-24">
                <div className="flex flex-col items-center lg:items-start gap-5 lg:flex-1">
                    <Badge variant="secondary">We&apos;re live!</Badge>
                    <h1 className="text-white text-5xl md:text-7xl max-w-2xl tracking-tighter font-semibold text-center lg:text-left">
                        <span>{heading}</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center lg:text-left">
                        {description}
                    </p>
                    <div className="flex flex-wrap items-start gap-5 lg:gap-7">
                        <Button asChild>
                            <a href={buttons.primary?.url}>
                                <div className="flex items-center gap-2">
                                    <ArrowUpRight className="size-4" />
                                </div>
                                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                                    {buttons.primary?.text}
                                </span>
                            </a>
                        </Button>
                        {buttons.secondary?.text && (
                            <Button asChild variant="link" className="underline">
                                <a href={buttons.secondary?.url}>{buttons.secondary?.text}</a>
                            </Button>
                        )}
                    </div>
                </div>
                <div className="relative z-10 lg:flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
                    <div className="relative">
                        <div className="absolute top-2.5 left-1/2 h-[92%] w-[69%] -translate-x-[52%] overflow-hidden rounded-[35px]">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={450}
                                height={889}
                                className="size-full object-cover object-[50%_0%]"
                            />
                        </div>
                        <Image
                            className="relative z-10"
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-2.png"
                            width={450}
                            height={889}
                            alt="iphone"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hero47 };