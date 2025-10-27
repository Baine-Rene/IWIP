"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex bg-blue-800 min-h-screen items-center justify-center px-4">
      <Card className="max-w-md w-full shadow-xl rounded-2xl">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center">
            <Construction className="h-12 w-12 text-primary" />
          </div>
          <h2 className="mt-4 text-2xl font-semibold">
            This page is under construction
          </h2>
          <p className="mt-2 text-muted-foreground">
            We’re still working on this section. Kindly bear with us 🙏
          </p>

          <div className="mt-6">
            <Link href="/">
              <Button variant="default">Back to Home</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
