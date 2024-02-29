import "./globals.css";
import { Providers } from "./providers";
import Link from "next/link";

import "primereact/resources/themes/lara-dark-teal/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Card } from "primereact/card";

import Nav from "./_components/nav";

export const metadata = {
  title: "Remy Z Romano",
  description: "Senior Customer Success Engineer Exercise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
          <Card className="m-6 ">{children}</Card>
        </Providers>
      </body>
    </html>
  );
}
