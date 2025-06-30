import HomeClient from "./views/HomeClient"; // ✅ No dynamic import

export const metadata = {
  title: "Product Dashboard | Test Project",
  description: "A clean and modern dashboard to manage and browse dummy products using Next.js 15.",
  openGraph: {
    title: "Product Dashboard | Test Project",
    description: "Explore and manage products using Next.js 15 + React Query + Tailwind UI.",
    url: "https://yourdomain.com",
    siteName: "Test Project",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Test Project - Product Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Project Product Dashboard",
    description: "View and manage products easily with our powerful Next.js UI.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
