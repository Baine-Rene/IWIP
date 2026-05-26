"use client";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";

const features = [
  {
    title: "Build Your Identity",
    description:
      "Create a profile that reflects your journey, your work, and who you are becoming.",
    image: "/images/IMG-1.png",
  },
  {
    title: "Make meaningful connections",
    description:
      "Connect with people, start conversations, and save your contacts all in one place.",
    image: "/images/IMG-3.png",
  },
  {
    title: "Be part of real communities",
    description:
      "Join or build communities where people collaborate, share oppotunities, and grow together.",
    image: "/images/IMG-5.png",
  },
];
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Child variants for each individual cards sliding upwards
const cardVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6, ease: easeIn},
    },
}
const Features = () => {
  return (
    <div className="bg-brand-blue min-h-screen flex items-center justify-center py-10 px-6">
      <div className="grow w-full sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-5xl font-bold font-roboto tracking-tight"
        >
          Powered by the Young Eye Tech
        </motion.h2>
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="flex flex-col text-start w-full"
            >
              <div className="mb-5 sm:mb-6 w-full aspect-[4/5] bg-muted rounded-xl overflow-hidden relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-semibold font-roboto tracking-tight">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[35ch] text-muted-foreground font-roboto text-[17px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
