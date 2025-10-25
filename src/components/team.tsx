import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Darren Baine",
    title: "Founder & CEO",
    bio: "Darren Harry Baine is an Ugandan social entrepreneur, international speaker, mentor founder of Young Eye Initiative and co-founder of the IWIP App.",
    imageUrl:
      "",
  },
  {
    name: "Felix Odong",
    title: "Mobile App Developer",
    bio: "",
    imageUrl:
      "",
  },
  {
    name: "Daniel Nkurunziza",
    title: "Web Developer",
    bio: "Graduate of University of Kent | Computer Science with a Year in Industry",
    imageUrl: "",
  },
  {
    name: "Rene Baine",
    title: "Co-Founder & Frontend Developer",
    bio: "Bachelor of Science (Honors) in Computer Science student at Trent University",
    imageUrl:
      "",
  },
  {
    name: "Princess Mwebe",
    title: "Social Media Manager",
    bio: "Graduate from Northeastern University with a Bachelors of Science in Psychology in June 2024.",
    imageUrl:
      "",
  },
];

const Team = () => {
  return (
    <div className="flex flex-col justify-center py-8 sm:py-16 px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tighter">
          Meet Our Team
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam necessitatibus esse, voluptates cupiditate amet sed. Esse rem laudantium assumenda, unde similique ratione deleniti maiores.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center bg-accent py-8 px-6 rounded-lg"
          >
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover bg-accent"
              width={120}
              height={120}
            />
            <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.title}</p>
            <p className="mt-2 mb-6 text-pretty">{member.bio}</p>
            <div className="mt-auto flex items-center gap-4">
              <Link href="#" target="_blank">
                <Linkedin className="stroke-muted-foreground h-5 w-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
