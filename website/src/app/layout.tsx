import type { Metadata } from "next";

// Styles
import "../styles/styles.scss"

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

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
