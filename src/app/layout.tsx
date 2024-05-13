import "@/styles/globals.css";
import { NextProvider, NextLayout } from "./providers";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "NextMap",
  description: "Next.js 13을 이용한 맛집 앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextProvider>
          {process.env.NEXT_PUBLIC_GA_ID ? (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          ) : null}
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
