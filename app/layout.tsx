import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "ERP Integral para Minoristas - Sistema de Gestión Completo",
  description:
    "Sistema ERP completo para mercados minoristas. Gestión de inventarios, ventas, clientes y reportes financieros con tecnologías modernas.",
  keywords: "ERP, minoristas, gestión, inventarios, ventas, C#, SQL Server, sistema integral",
  authors: [{ name: "Equipo ERP Minoristas" }],
  generator: "Next.js",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
