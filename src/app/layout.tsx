import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono, Lora } from "next/font/google";
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
  title: "Htet Aung Linn | Full Stack Developer",
  description:
    "Htet Aung Linn is a Full Stack Developer specializing in modern web development technologies. Explore my portfolio to see my projects and skills.",
  keywords: [
    "Htet Aung Linn",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Shadcn UI",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Htet Aung Linn" }],
  openGraph: {
    title: "Htet Aung Linn | Full Stack Developer",
    description:
      "Htet Aung Linn is a Full Stack Developer specializing in modern web development technologies. Explore my portfolio to see my projects and skills.",
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
    title: "Htet Aung Linn | Full Stack Developer",
    description:
      "Htet Aung Linn is a Full Stack Developer specializing in modern web development technologies. Explore my portfolio to see my projects and skills.",
    images: [
      "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739679704/Portfolio%20Next%20JS%202025/experinece/Welcome_n2yrcl.svg",
    ],
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${lora.variable} antialiased absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] scrollbar-hide`}
      >
        {children}
      </body>
    </html>
  );
}
