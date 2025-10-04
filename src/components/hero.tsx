import { MoveRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => (
    <div className="w-full py-24 bg-blue-700">
        <div className="container mx-auto">
            <div className="flex gap-8 py-10 lg:py-20 items-center justify-center flex-col">
                <div>
                    <Badge className="bg-white " variant="outline">We&apos;re live!</Badge>
                </div>
                <div className="flex gap-4 flex-col">
                    <h1 className="text-white text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-semibold">
                        Reworking Networking With Digital Business Cards
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center">
                        Designed to empower young people by fostering
                        the right mindset, leadership skills, and
                        entrepreneurial thinking.
                    </p>
                </div>
                <div className="flex flex-row gap-3">
                    <Button size="lg" className="gap-4">
                        Join now<MoveRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
);