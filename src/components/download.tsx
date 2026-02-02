import { Monitor, Smartphone, Tablet } from "lucide-react";

interface Download2Props {
    heading?: string;
    description?: string;
    platforms?: {
        desktop?: {
            title: string;
            subtitle: string;
            description: string;
            buttonText: string;
            url: string;
        };
        ios?: {
            title: string;
            subtitle: string;
            description: string;
            url: string;
        };
        android?: {
            title: string;
            subtitle: string;
            description: string;
            url: string;
        };
    };
}

const Download2 = ({
    heading = "Coming Soon",
    description = "The IWIP app Will be available on all major devices and operating systems soon.",
    platforms = {
        desktop: {
            title: "Desktop",
            subtitle: "PC/Mac",
            description: "Complete desktop solution.",
            buttonText: "Download",
            url: "#",
        },
        ios: {
            title: "Mobile Phone",
            subtitle: "iOS",
            description: "Designed specifically for iOS devices.",
            url: "#",
        },
        android: {
            title: "Mobile Phone / Tablet",
            subtitle: "Android",
            description: "Optimized for Android ecosystem.",
            url: "#",
        },
    },
}: Download2Props) => {
    return (
        <section className="bg-muted py-32">
            <div className="flex flex-col justify-center px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto gap-16">
                {/* Header Section */}
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        {heading}
                    </h2>
                    <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-lg">
                        {description}
                    </p>
                </div>

                {/* Download Options - Minimal Grid */}
                <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
                    {/* Desktop */}
                    <div className="text-center">
                        <div className="bg-background mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
                            <Monitor className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            {platforms.desktop?.subtitle}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                            {platforms.desktop?.description}
                        </p>
                    </div>

                    {/* iOS */}
                    <div className="text-center">
                        <div className="bg-background mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
                            <Smartphone className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            {platforms.ios?.subtitle}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                            {platforms.ios?.description}
                        </p>
                        <a href={platforms.ios?.url} className="mx-auto block w-fit">
                        </a>
                    </div>

                    {/* Android */}
                    <div className="text-center">
                        <div className="bg-background mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
                            <Tablet className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            {platforms.android?.subtitle}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                            {platforms.android?.description}
                        </p>
                        <a href={platforms.android?.url} className="mx-auto block w-fit">
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Download2 };
