"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import Navbar from "@/components/navigation/navigation";
import Footer from "@/components/footer";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  badge: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

interface Pricing4Props {
  title?: string;
  description?: string;
  plans?: PricingPlan[];
  className?: string;
}

const Pricing = ({
  title = "Pricing",
  description = "Check out our affordable pricing plans.",
  plans = [
    {
      name: "Community Basic",
      badge: "Community Basic",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      features: ["50 members", "Basic tools and Standard analytics", "1 admin"],
      buttonText: "Get Started",
    },
    {
      name: "Community Pro",
      badge: "Community Pro",
      monthlyPrice: "$13",
      yearlyPrice: "$130",
      features: [
        "Up to 500 community members",
        "Full branding of community",
        "Advanced analytics",
        "Year on end reports",
        "Up to 5 admins",
      ],
      buttonText: "Purchase",
    },
    {
      name: "Community Enterprise",
      badge: "Community Enterprise",
      monthlyPrice: "$17",
      yearlyPrice: "$180",
      features: [
        "Both free and pro features",
        "Unlimited members",
        "Dedicated manager",
        "Quarterly reports",
      ],
      buttonText: "Purchase",
      isPopular: true,
    },
  ],
  className,
}: Pricing4Props) => {
  const [isAnnually, setIsAnnually] = useState(false);
  return (
    <>
      <Navbar />
      <section className={cn("py-32", className)}>
        <div className="container mx-auto">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold text-pretty lg:text-6xl">
              {title}
            </h2>
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <p className="max-w-3xl text-muted-foreground lg:text-xl">
                {description}
              </p>
              <Tabs
                value={isAnnually ? "annually" : "monthly"}
                onValueChange={(value: string) =>
                  setIsAnnually(value === "annually")
                }
                className="w-fit shrink-0"
                aria-label="Billing period"
              >
                <TabsList className="grid h-11 w-max grid-cols-2 gap-0 rounded-md p-1 text-lg">
                  <TabsTrigger
                    value="monthly"
                    className="h-full min-h-0 px-7 py-0 font-semibold text-muted-foreground data-active:text-foreground"
                  >
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger
                    value="annually"
                    className="h-full min-h-0 px-7 py-0 font-semibold text-muted-foreground data-active:text-foreground"
                  >
                    Yearly
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex w-full flex-col rounded-lg border p-6 text-left ${
                    plan.isPopular ? "bg-muted" : ""
                  }`}
                >
                  <Badge className="mb-8 block w-fit uppercase">
                    {plan.badge}
                  </Badge>
                  <h3 className="font-mono text-4xl lg:text-5xl">
                    {isAnnually ? plan.yearlyPrice : plan.monthlyPrice}
                  </h3>
                  <p
                    className={`text-muted-foreground ${plan.monthlyPrice === "$0" ? "invisible" : ""}`}
                  >
                    {isAnnually ? "Per year" : "Per month"}
                  </p>
                  <Separator className="my-6" />
                  <div className="flex h-full flex-col justify-between gap-20">
                    <ul className="space-y-4 text-muted-foreground md:leading-snug">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <Check
                            className="size-4 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">{plan.buttonText}</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
