import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono, Lora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Htet Aung Linn | Full Stack Developer in Bangkok, Thailand",
  description:
    "Htet Aung Linn is a Full Stack Developer in Bangkok, Thailand, specializing in Typescript, React, Angular, Next.js, Node.js, and MongoDB. Let's build something amazing!",
  keywords: [
    "Htet Aung Linn",
    "Full Stack Developer",
    "Web Developer",
    "Bangkok Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Portfolio",
  ],
  authors: [{ name: "Htet Aung Linn" }],
  openGraph: {
    title: "Htet Aung Linn | Full Stack Developer in Bangkok, Thailand",
    description:
      "Htet Aung Linn is a Full Stack Developer in Bangkok, Thailand, specializing in Typescript, React, Angular, Next.js, Node.js, and MongoDB. Let's build something amazing!",
    url: "https://www.htetaunglinn.info/",
    siteName: "Htet Aung Linn Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739679704/Portfolio%20Next%20JS%202025/experinece/Welcome_n2yrcl.svg",
        width: 1200,
        height: 630,
        alt: "Htet Aung Linn | Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Htet Aung Linn | Full Stack Developer in Bangkok, Thailand",
    description:
      "Htet Aung Linn is a Full Stack Developer in Bangkok, Thailand, specializing in Typescript, React, Angular, Next.js, Node.js, and MongoDB. Let's build something amazing!",
    images: [
      {
        url: "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739679704/Portfolio%20Next%20JS%202025/experinece/Welcome_n2yrcl.svg",
        alt: "Htet Aung Linn | Full Stack Developer",
      },
    ],
    site: "@HTAUNGLINN1",
    creator: "@HTAUNGLINN1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Htet Aung Linn",
              jobTitle: "Full Stack Developer",
              url: "https://www.htetaunglinn.info/",
              sameAs: [
                "https://x.com/HTAUNGLINN1",
                "https://www.linkedin.com/in/htet-aung-linn-51146923b/",
                "https://github.com/htetaunglinn-dev",
                "https://web.facebook.com/HtetAg11/",
              ],
              image:
                "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739679704/Portfolio%20Next%20JS%202025/experinece/Welcome_n2yrcl.svg",
              address: {
                "@type": "10100",
                addressLocality: "Bangkok",
                addressRegion: "Thailand",
              },
              skills: [
                "Javascript",
                "Typescript",
                "TailwindCSS",
                "Bootstrap",
                "MaterialUI",
                "ShadcnUI",
                "React",
                "Angular",
                "Next.js",
                "Node.js",
                "MongoDB",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${lora.variable} antialiased absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] scrollbar-hide`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
