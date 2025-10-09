import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../../../globals.css";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Glamora – Beauty & Wellness",
  description: "Discover luxury salon & spa services with Glamora.",
  icons: {
    icon: "/images/fav.png", // Default
    shortcut: "/images/fav.png",
    apple: "/images/fav.png",
  },
  openGraph: {
    title: "Glamora – Beauty & Wellness",
    description: "Indulge in premium beauty, spa, and salon experiences.",
    url: "/",
    siteName: "Glamora",
    images: [
      {
        url: "/images/openfav.jpg",
        width: 1200,
        height: 630,
        alt: "Glamora Spa & Salon Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* CSS CDNs */}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/css/flaticon.min.css" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />

        {/* optional slick theme */}
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" /> */}
        {/* your local CSS */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>

        <Footer />
        {/* jQuery */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          strategy="beforeInteractive"
        />

        {/* Bootstrap */}
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.3/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Magnific Popup */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />

        {/* Nice Select */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js"
          strategy="afterInteractive"
        />

        {/* Slick Carousel */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
          strategy="afterInteractive"
        />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              maxWidth: "min(92vw, 300px)", // ⬅️ wider toasts, but not past viewport
              width: "100%",
              whiteSpace: "pre-wrap", // nicer wrapping for long messages
              wordBreak: "break-word",
              fontSize: "17px",
            },
            success: { iconTheme: { primary: "#22c55e", secondary: "#fff" } },
          }}
        />
      </body>
    </html>
  );
}
