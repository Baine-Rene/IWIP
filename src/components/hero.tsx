'use client';

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import gsap from "gsap";

interface Hero {
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
    };
}

const Hero = ({
    heading = "IWIP is not just a name, it is an identity. Become an Inspired work in Progress today!",
    description = "Create your IWIP card today! Powered by the Young Eye Tech, An organization that builds data driven systems that improve how information is organized, managed and used",
    buttons = {
        primary: {
            text: "Sign Up",
            url: "https://app.iwip.app/login",
        },
    },
    image = {
        src: "/images/showcase.svg",
        alt: "Mobile Mockup of Iwip App",
    },
}: Hero) => {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const heading = headingRef.current;
        if (!heading) return;

        // Split into words, then chars — preserves natural line wrapping
        const words = heading.textContent?.split(" ") ?? [];
        heading.innerHTML = "";

        const allChars: HTMLSpanElement[] = [];

        words.forEach((word, wi) => {
            const wordSpan = document.createElement("span");
            wordSpan.style.display = "inline-block";
            wordSpan.style.whiteSpace = "nowrap";

            word.split("").forEach((char) => {
                const charSpan = document.createElement("span");
                charSpan.textContent = char;
                charSpan.style.display = "inline-block";
                wordSpan.appendChild(charSpan);
                allChars.push(charSpan);
            });

            heading.appendChild(wordSpan);

            // Add space between words (except last)
            if (wi < words.length - 1) {
                const space = document.createTextNode(" ");
                heading.appendChild(space);
            }
        });

        const ctx = gsap.context(() => {
            gsap.from(allChars, {
                opacity: 0,
                y: 40,
                rotateX: -90,
                transformOrigin: "0% 50% -50px",
                duration: 0.5,
                stagger: 0.018,
                ease: "back.out(1.7)",
                delay: 0.5, // matches your badge delay so it feels sequenced
            });
        });

        return () => ctx.revert();
    }, [heading]);

    return (
        <section className="w-full overflow-x-hidden pt-32 bg-primary py-12">
            <div className="container flex flex-col items-center lg:my-0 lg:flex-row lg:justify-center lg:gap-8 mx-auto max-w-7xl lg:px-24">
                <div className="flex flex-col items-center md:p-0 px-10 lg:items-start gap-5 lg:flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Badge className="bg-green-600 text-white" variant="secondary">
                            We&apos;re live!
                        </Badge>
                    </motion.div>

                    {/* GSAP handles this — no motion.h1 wrapper needed */}
                    <h1
                        ref={headingRef}
                        className="text-white text-5xl md:text-7xl max-w-2xl tracking-tighter font-bold text-center lg:text-left"
                    >
                        {heading}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                        className="text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center lg:text-left"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
                        className="flex flex-wrap items-start gap-5 lg:gap-7"
                    >
                        <Button asChild className="bg-blue-700 hover:bg-blue-900 font-bold">
                            <a href={buttons.primary?.url} target="_blank">
                                <span className="pr-4 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                                    {buttons.primary?.text}
                                </span>
                                <div className="flex items-center gap-2">
                                    <ArrowUpRight className="size-4" />
                                </div>
                            </a>
                        </Button>
                    </motion.div>
                </div>

                {/* Mockup image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative z-10 lg:flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0"
                >
                    <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]">
                        <div className="relative overflow-hidden rounded-[35px] w-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={450}
                                height={889}
                                className="w-full h-auto object-cover object-[50%_0%]"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;