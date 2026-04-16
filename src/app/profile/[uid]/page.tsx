import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfileView from "./profile-view";

const API_URL = process.env.API_URL || "https://api.iwip.app/api/v1";

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
  documents: {
    id: string;
    name: string;
    url: string;
    type: string;
    size: number;
    uploadedAt: string;
  }[];
}

async function getPublicProfile(uid: string): Promise<PublicUser | null> {
  try {
    const res = await fetch(`${API_URL}/users/${uid}/public`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ uid: string }>;
}): Promise<Metadata> {
  const { uid } = await params;
  const user = await getPublicProfile(uid);

  if (!user) {
    return { title: "Profile Not Found - IWIP" };
  }

  const title = `${user.fullName} - IWIP`;
  const description = [user.position, user.company]
    .filter(Boolean)
    .join(" at ");

  return {
    title,
    description: description || `${user.fullName}'s professional profile on IWIP`,
    openGraph: {
      title,
      description:
        user.bio || description || `Connect with ${user.fullName} on IWIP`,
      ...(user.profileImageUrl && {
        images: [{ url: user.profileImageUrl, width: 400, height: 400 }],
      }),
    },
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = await params;
  const user = await getPublicProfile(uid);

  if (!user) {
    notFound();
  }

  return <ProfileView user={user} />;
}
