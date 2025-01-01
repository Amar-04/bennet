import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Bennet",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
