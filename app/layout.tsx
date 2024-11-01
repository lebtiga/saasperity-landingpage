import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Outfit } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AnimatedBackground } from "@/components/ui/animated-background";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Saasperity - Launch Your SaaS MVP in 14 Days',
  description: 'Professional SaaS development service with rapid MVP delivery in just 14 days.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${outfit.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AnimatedBackground />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}