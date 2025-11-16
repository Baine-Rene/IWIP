import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const teamMembers = [
  {
    name: "Darren Baine",
    title: "Co-Founder",
    bio: "Darren Harry Baine, founder of Young Eye Initiative and co-founder of the IWIP App.",
    imageUrl: "/profiles/Darren.png",
    link: "https://www.linkedin.com/in/darren-harry-baine-84760a1b6/",
  },
  {
    name: "Felix Odong",
    title: "Mobile App Developer",
    bio: "Android app developer at IWIP",
    imageUrl:
      "/profiles/Felix.png",
    link: "",
  },
  {
    name: "Daniel Nkurunziza",
    title: "Web Developer",
    bio: "Graduate of University of Kent | Computer Science with a Year in Industry",
    imageUrl: "/profiles/Daniel.png",
    link: "https://www.linkedin.com/in/daniel-nkurunziza/",
  },
  {
    name: "Rene Baine",
    title: "Co-Founder & Graphic Designer",
    bio: "Bachelor of Science (Honors) in Computer Science student at Trent University",
    imageUrl:
      "/profiles/Rene.png",
    link: "https://www.linkedin.com/in/ren%C3%A9-baine-9b6519319/",
  },
  {
    name: "Princess Mwebe",
    title: "Social Media Manager",
    bio: "Graduate from Northeastern University with a Bachelors of Science in Psychology",
    imageUrl:
      "/profiles/Princess.png",
    link: "https://www.linkedin.com/in/princess-mwebe-3027aa257/",
  },
];

const Team = () => {
  return (
    <div className="flex flex-col justify-center py-8 sm:py-16 px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tighter">
          Meet Our Team
        </h2>
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
              width={120}
              height={120}
              className="rounded-full object-cover"
            />

            <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.title}</p>
            <p className="mt-2 mb-6 text-pretty">{member.bio}</p>
            {member.link && (
              <div className="mt-auto flex items-center gap-4">
                <Link href={member.link} target="_blank">
                  <Linkedin className="stroke-muted-foreground h-5 w-5" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
