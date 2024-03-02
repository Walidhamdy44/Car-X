import Footer from "@/components/footer/Footer";
import "./globals.css";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Car-X",
  description: "car-x shop is your way to get your New Car",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
