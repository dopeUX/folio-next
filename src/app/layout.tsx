import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import "../app/global-styles/globalStyles.css";
import { ReduxProvider } from "./store/Provider";
import AppLayout from "./Layouts/AppLayout/AppLayout.component";

export const metadata: Metadata = {
  title: "De Stonks",
  description: "Generated by create next app",
};

const Neue = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMontreal-Light.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/NeueMontreal-Regular.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/NeueMontreal-Medium.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/NeueMontreal-Bold.otf",
      weight: "800",
    },
  ],
  variable: "--font-neue",
});
const Kaftan = localFont({
  src: [
    {
      path: "../../public/fonts/kaftan-trial.otf",
      weight: "500",
    },
  ],
  variable: "--font-kaftan",
});
const Dahlia = localFont({
  src: [
    {
      path: "../../public/fonts/dahlia-regular.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/dahlia-medium.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/dahlia-bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-dahlia",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${Neue.variable} ${Kaftan.variable} ${Dahlia.variable} font-sans`}
      >
        <ReduxProvider>
          <AppLayout>{children}</AppLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
