import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BENRIYA | Premium Concierge Services",
  description: "富裕層・法人向けプレミアム便利屋サービス。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
