import "./globals.css";
// import Header from "./commponet/header";

export const metadata = {
  title: "welcome to Quick Serve",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
          {/* <Header /> */}
        </body>
    </html>
  );
}
