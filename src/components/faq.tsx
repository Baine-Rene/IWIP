import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq: Array<{ question: string; answer: string; listItems?: string[] }> = [
  {
    question: "What is Iwip?",
    answer:
      "IWIP (Inspired Work In Progress) is a platform where professionals create their digital identity, connect with others, and engage in communities - all in one place.",
  },
  {
    question: "What is an IWIP Card",
    answer: "An IWIP Card is your personal digital profile. It showcases who you are, what you do, and includes everything you want to share - like your contact info, documents, and social media links.",
  },
  {
    question: "Is IWIP free to use?",
    answer:
      "Yes. IWIP offers a free version with core features, as well as a pro option with advanced customization and additional tools for individuals and communities.",
  },
  {
    question: "How do connections work on IWIP?",
    answer:
      "You can connect with others on the app, start conversations through chat, and save their contact information for future use to keep your network organized.",
  },
  {
  question: "Can I see who is in a community?",
  answer: "Yes. Community members are visible, making it easy to discover and engage with others in the same space.",
  }
];

const FAQ = () => {
  return (
    <div className="bg-primary min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl md:text-5xl leading-[1.15]! font-bold tracking-tighter text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-xl text-muted-foreground max-w-lg">
          Quick answers to common questions about our application.
        </p>

        <Accordion
          type="single"
          collapsible
          className="mt-8 sm:mt-10 space-y-4"
          defaultValue="question-0"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between pt-4 pb-3 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
                {faq[index].listItems && (
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {faq[index].listItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
