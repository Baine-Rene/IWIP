"use client";

import { Check } from "lucide-react";
import { useState } from "react";

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

interface PricingProps {
  title?: string;
  subtitle?: string;
  description?: string;
  plans?: PricingPlan[];
  individualPlans?: PricingPlan[];
  className?: string;
}

const Pricing = ({
  title = "Pricing",
  subtitle = "Community",
  description = "Explore our affordable pricing plans.",
  plans = [
    {
      name: "Community Basic",
      badge: "Community Basic - free",
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
  individualPlans = [
    {
      name: "Individual Basic",
      badge: "Individual Basic - free",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      features: [
        "Create basic profile",
        "Join communities",
        "Upload up to 1 document",
        "Basic IWIP QR code",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Individual Pro",
      badge: "Individual Pro",
      monthlyPrice: "$2",
      yearlyPrice: "$21",
      features: [
        "Unlimited Document Uploads",
        "Custom QR designs",
        "Profile Insights",
        "Export Network",
      ],
      buttonText: "Purchase",
      isPopular: true,
    },
  ],
  className,
}: PricingProps) => {
  const [isAnnually, setIsAnnually] = useState(false);

  const billingTabs = (
    <Tabs
      value={isAnnually ? "annually" : "monthly"}
      onValueChange={(value: string) => setIsAnnually(value === "annually")}
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
  );

  const PlanCard = ({ plan }: { plan: PricingPlan }) => (
    <div
      className={`flex w-full flex-col rounded-lg border p-6 text-left ${
        plan.isPopular ? "bg-background" : "bg-muted"
      }`}
    >
      <Badge className="mb-8 block w-fit uppercase">{plan.badge}</Badge>
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
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="size-4 shrink-0" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full">{plan.buttonText}</Button>
      </div>
    </div>
  );

  return (
    <section className={cn("w-full pt-32 py-32 bg-blue-800", className)}>
      <div className="container mx-auto px-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-black text-pretty lg:text-6xl font-raleway  text-white">
            {title}
          </h2>
          <p className="max-w-3xl lg:text-xl font-semibold text-white">
            {description}
          </p>

          {/* Community Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <h2 className="text-3xl font-bold text-white">{subtitle}</h2>
              {billingTabs}
            </div>
            <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
              {plans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>

          {/* Individual Section */}
          <div className="flex flex-col gap-6 mt-16">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <h2 className="text-3xl font-bold text-white">Individual</h2>
            </div>
            {/* Two cards, capped at md:w-2/3 so they don't stretch full width */}
            <div className="flex w-full flex-col items-stretch gap-6 md:flex-row md:w-2/3">
              {individualPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
