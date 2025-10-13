import type { Metadata } from "next";

// Styles
import "../styles/styles.scss"

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Site data
import { 
  siteName, 
  siteTagline, 
  siteAuthor, 
  siteDescription, 
  siteKeywords, 
  siteUrl, 
  siteLocale, 
  siteFavicon 
} from "../libs/site";

export const metadata: Metadata = {
  title: {
    default: siteName(),
    template: `%s | ${siteName()}`,
  },
  description: siteDescription(),
  keywords: siteKeywords(),
  authors: [{ name: siteAuthor() }],
  creator: siteAuthor(),
  publisher: siteAuthor(),
  metadataBase: new URL(siteUrl()),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteLocale(),
    url: siteUrl(),
    title: siteName(),
    description: siteDescription(),
    siteName: siteName(),
  },
  twitter: {
    card: "summary_large_image",
    title: siteName(),
    description: siteDescription(),
    creator: `@${siteAuthor()}`,
  },
  icons: {
    icon: siteFavicon(),
    shortcut: siteFavicon(),
    apple: siteFavicon(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="header-container">
          <Header />
        </div>
        <div className="website-content-container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
