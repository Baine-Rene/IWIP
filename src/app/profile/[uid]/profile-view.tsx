"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Briefcase,
  Search,
  FileText,
  Link2,
  Download,
  ExternalLink,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  Globe,
  UserPlus,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserDocument {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
}

interface PublicUser {
  uid: string;
  fullName: string;
  profileImageUrl: string;
  bio: string;
  company: string;
  position: string;
  pronouns: string;
  lookingFor: string;
  socialLinks: Record<string, string>;
  isPro: boolean;
  createdAt: string;
  documents: UserDocument[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getSocialIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case "linkedin":
      return Linkedin;
    case "facebook":
      return Facebook;
    case "twitter":
      return Twitter;
    case "instagram":
      return Instagram;
    case "youtube":
      return Youtube;
    case "website":
      return Globe;
    default:
      return Link2;
  }
}

function getSocialColor(platform: string): string {
  switch (platform.toLowerCase()) {
    case "linkedin":
      return "bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/20 hover:bg-[#0A66C2]/20";
    case "facebook":
      return "bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/20 hover:bg-[#1877F2]/20";
    case "twitter":
      return "bg-[#1DA1F2]/10 text-[#1DA1F2] border-[#1DA1F2]/20 hover:bg-[#1DA1F2]/20";
    case "instagram":
      return "bg-[#E4405F]/10 text-[#E4405F] border-[#E4405F]/20 hover:bg-[#E4405F]/20";
    case "youtube":
      return "bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20 hover:bg-[#FF0000]/20";
    case "website":
      return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20";
    default:
      return "bg-primary/10 text-foreground border-primary/20 hover:bg-primary/20";
  }
}

function getFileIcon(type: string): string {
  if (type.includes("pdf")) return "PDF";
  if (type.includes("word") || type.includes("doc")) return "DOC";
  if (type.includes("sheet") || type.includes("xls")) return "XLS";
  if (type.includes("image") || type.includes("png") || type.includes("jpg"))
    return "IMG";
  return "FILE";
}

function getFileIconColor(type: string): string {
  if (type.includes("pdf")) return "bg-red-500/10 text-red-600";
  if (type.includes("word") || type.includes("doc"))
    return "bg-blue-500/10 text-blue-600";
  if (type.includes("sheet") || type.includes("xls"))
    return "bg-green-500/10 text-green-600";
  if (type.includes("image") || type.includes("png") || type.includes("jpg"))
    return "bg-purple-500/10 text-purple-600";
  return "bg-gray-500/10 text-gray-600";
}

export default function ProfileView({ user }: { user: PublicUser }) {
  const firstName = user.fullName.split(" ")[0];
  const headline = [user.position, user.company].filter(Boolean).join(" at ");
  const hasSocialLinks =
    user.socialLinks && Object.keys(user.socialLinks).length > 0;
  const hasDocuments = user.documents && user.documents.length > 0;

  return (
    <div className="min-h-screen bg-muted/50">
      {/* Minimal top bar */}
      <div className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="max-w-3xl mx-auto flex items-center justify-between h-14 px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="IWIP"
              width={80}
              height={32}
              className="h-6 w-auto"
            />
          </Link>
          <Button asChild size="sm" className="rounded-full bg-blue-800 hover:bg-blue-700">
            <a
              href="https://play.google.com/store/apps/details?id=com.iwip.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Smartphone className="h-4 w-4 mr-2" />
              Get the App
            </a>
          </Button>
        </div>
      </div>

      {/* Hero header */}
      <section className="pt-14 bg-primary">
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            {/* Profile image */}
            <motion.div custom={0} variants={fadeUp} className="relative mb-6">
              <div className="relative h-28 w-28 md:h-36 md:w-36 rounded-full ring-4 ring-white/20 overflow-hidden shadow-2xl">
                {user.profileImageUrl ? (
                  <Image
                    src={user.profileImageUrl}
                    alt={user.fullName}
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                ) : (
                  <div className="h-full w-full bg-white/10 flex items-center justify-center">
                    <User className="h-14 w-14 md:h-18 md:w-18 text-white/60" />
                  </div>
                )}
              </div>
              {user.isPro && (
                <div className="absolute -bottom-1 -right-1 bg-amber-400 text-amber-950 rounded-full p-1.5 shadow-lg">
                  <Sparkles className="h-4 w-4" />
                </div>
              )}
            </motion.div>

            {/* Name + pronouns */}
            <motion.div custom={1} variants={fadeUp} className="mb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {user.fullName}
              </h1>
              {user.pronouns && (
                <span className="inline-block mt-2 text-sm text-white/70 bg-white/10 px-3 py-1 rounded-full">
                  {user.pronouns}
                </span>
              )}
            </motion.div>

            {/* Headline */}
            {headline && (
              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-lg text-white/80 font-medium flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4 text-white/50" />
                {headline}
              </motion.p>
            )}

            {/* Looking for */}
            {user.lookingFor && (
              <motion.div
                custom={3}
                variants={fadeUp}
                className="mt-4 inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/90 text-sm font-medium px-4 py-2 rounded-full"
              >
                <Search className="h-3.5 w-3.5" />
                Looking for: {user.lookingFor}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content cards */}
      <div className="max-w-3xl mx-auto px-6 -mt-6 pb-12 space-y-4">
        {/* Bio */}
        {user.bio && (
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-background rounded-2xl border shadow-sm p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <User className="h-4.5 w-4.5 text-muted-foreground" />
              <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                About
              </h2>
            </div>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
              {user.bio}
            </p>
          </motion.div>
        )}

        {/* Social links */}
        {hasSocialLinks && (
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-background rounded-2xl border shadow-sm p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Link2 className="h-4.5 w-4.5 text-muted-foreground" />
              <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                Links
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {Object.entries(user.socialLinks).map(([platform, url]) => {
                const Icon = getSocialIcon(platform);
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${getSocialColor(platform)}`}
                  >
                    <Icon className="h-4 w-4" />
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Documents */}
        {hasDocuments && (
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-background rounded-2xl border shadow-sm p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-4.5 w-4.5 text-muted-foreground" />
              <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                Documents
              </h2>
            </div>
            <div className="space-y-2">
              {user.documents.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors"
                >
                  <div
                    className={`flex-shrink-0 h-11 w-11 rounded-lg flex items-center justify-center font-bold text-xs ${getFileIconColor(doc.type)}`}
                  >
                    {getFileIcon(doc.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate group-hover:text-blue-600 transition-colors">
                      {doc.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(doc.size)}
                    </p>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA card */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="bg-background rounded-2xl border border-blue-200 dark:border-blue-900/40 shadow-sm overflow-hidden"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40">
              <UserPlus className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2">
              Want to connect with {firstName}?
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-6">
              Join IWIP to save this contact, exchange documents, and start a
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
              <Button
                asChild
                className="w-full sm:w-auto rounded-full bg-blue-800 hover:bg-blue-700 px-8"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.iwip.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download App
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto rounded-full px-8"
              >
                <Link href="/">Learn More</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer branding */}
        <div className="text-center pt-4 pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Image
              src="/logo.svg"
              alt="IWIP"
              width={64}
              height={24}
              className="h-4 w-auto opacity-50"
            />
            <span>Reworking Networking</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
