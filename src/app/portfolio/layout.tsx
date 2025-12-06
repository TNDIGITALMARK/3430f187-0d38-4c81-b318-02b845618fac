import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Kimberly Archambault Photography",
  description: "View my portfolio of wedding, maternity, and family photography. Beautiful moments captured with artistic vision and professional care.",
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
