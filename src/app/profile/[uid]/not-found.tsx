"use client";

import { motion } from "framer-motion";
import { UserX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfileNotFound() {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-md"
      >
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-background shadow-sm">
          <UserX className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Profile Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          This profile may no longer be available or the link may be incorrect.
        </p>
        <Button asChild className="rounded-full px-8">
          <Link href="/">Go to IWIP</Link>
        </Button>
      </motion.div>
    </div>
  );
}
