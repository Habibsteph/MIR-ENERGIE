import { MotionObserver } from "@/components/MotionObserver";
import { pageMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata = {
  ...pageMetadata("MIR ENERGY | Integrated Energy Solutions", "Explore four complementary MIR ENERGY services: LNG supply and trading, logistics, storage and regasification, and energy infrastructure development.", "/"),
  metadataBase: new URL("https://mir-energie.stephanekouame26.chatgpt.site"),
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><MotionObserver />{children}</body></html>;
}
