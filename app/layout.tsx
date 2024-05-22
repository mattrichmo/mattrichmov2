import { Metadata } from "next"
import Header from "@/components/Header/Header"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div>
          {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}