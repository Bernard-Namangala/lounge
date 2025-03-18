import { ReactNode } from 'react'
import { Navbar } from './Navbar'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen bg-dark-900">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  )
} 