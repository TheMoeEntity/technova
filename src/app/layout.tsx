import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import AppLayout from "@/component/layout/AppLayout";
import { description, OG_Image, OG_Image_alt } from "@/lib/constants";
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The TechNova Summit",
  description,
  applicationName: "The TechNova Summit",
  keywords:
    "Tech Conference in Abakaliki, Event Venue, Workshops, Networking Events, Technology Events, Tech Summit, Innovation Hub, Tech Enthusiasts, DTCSI Academy",
  authors: [
    { name: "Moses Nwigberi", url: "https://mosesnwigberi.com" },
    { name: "TechNova" },
  ],
  creator: "TechNova Team",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "The TechNova Summit | Tech Event",
    description,
    url: "https://technovasummit.com",
    type: "website",
    siteName: "The TechNova Summit",
    locale: "en_US",
    images: [
      {
        url: OG_Image_alt,
        width: 1200,
        height: 630,
        alt: "TechNova Tech Event Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechNova Summit | Tech Event",
    description,
    images: [OG_Image_alt],
  },
  metadataBase: new URL("https://technovasummit.com"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${bricolageGrotesque.className} antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
