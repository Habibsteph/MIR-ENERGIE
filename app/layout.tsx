import { MotionObserver } from "@/components/MotionObserver";
import { pageMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata = {
  ...pageMetadata("MIR ENERGY | LNG Supply, Logistics & Energy Infrastructure", "MIR ENERGY structures LNG supply, logistics, storage, regasification and energy infrastructure solutions across Africa and emerging markets.", "/"),
  metadataBase: new URL("https://mir-energie.stephanekouame26.chatgpt.site"),
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><MotionObserver />{children}</body></html>;
}
