import type { Metadata } from "next";
import { headers } from "next/headers";
import { MotionObserver } from "@/components/MotionObserver";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;
  const title = "MIR Energie — Connecter l’énergie. Accélérer les territoires.";
  const description = "Solutions énergétiques, import-export de gaz, infrastructures et projets à impact social en Afrique et à l’international.";
  return { title, description, icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}, openGraph:{title,description,images:[socialImage],type:"website"}, twitter:{card:"summary_large_image",title,description,images:[socialImage]} };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body><MotionObserver/>{children}</body>
    </html>
  );
}
