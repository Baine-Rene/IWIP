import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/">
  <Image
    src="/logo.svg" 
    alt="Logo" 
    width={256}
    height={256}
    className="h-8 w-auto" 
  />
  </Link>
);
