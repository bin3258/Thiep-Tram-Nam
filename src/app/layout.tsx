import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif", 
});

export const metadata = {
  title: "Thiệp cưới nhà gái",
  description: "Wedding Invitation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={cormorant.variable}>
      <body className="bg-[#ffffff] flex justify-center font-serif antialiased">
        
        <div className="bg-white w-full max-w-[500px] min-h-screen shadow-2xl overflow-hidden relative">
          {children}
        </div>

      </body>
    </html>
  );
}