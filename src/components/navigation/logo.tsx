import Image from "next/image";

export const Logo = () => (
  <Image
    src="/logo.svg" 
    alt="Logo" 
    width={256}
    height={256}
    className="h-8 w-auto" // Tailwind example for sizing
  />
);
