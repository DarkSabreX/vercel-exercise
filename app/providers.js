"use client";

import { PrimeReactProvider } from "primereact/api";

export function Providers({ children }) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
