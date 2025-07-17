"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { ActiveLink } from "../active-link/active-link"

// Ícones reutilizados
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="top-0 z-50 w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <h2 className="text-body-header font-bold text-black-100">MyShop</h2>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>

          <nav className="hidden md:flex items-center gap-8">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/about">About</ActiveLink>
            <ActiveLink href="/features">Features</ActiveLink>
            <ActiveLink href="/pricing">Pricing</ActiveLink>
            <ActiveLink href="/contact">Contact</ActiveLink>
            <div className="flex items-center gap-3">
              <Image
                src="/social/facebook.svg"
                alt="Facebook"
                width={32}
                height={32}
                loading="lazy"
              />
              <Image
                src="/social/instagram.svg"
                alt="Instagram"
                width={32}
                height={32}
                loading="lazy"
              />
              <Image src="/social/twitter.svg" alt="Twitter" width={32} height={32} loading="lazy" />
              <Image src="/social/youtube.svg" alt="YouTube" width={32} height={32} loading="lazy" />
            </div>
          </nav>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-white dark:bg-gray-900 px-6 py-6 md:hidden">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-body-header font-bold text-black-100">MyShop</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(false)}>
                <XIcon className="w-6 h-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              <ActiveLink href="/" onClick={() => setMenuOpen(false)}>
                Home
              </ActiveLink>
              <ActiveLink href="/about" onClick={() => setMenuOpen(false)}>
                About
              </ActiveLink>
              <ActiveLink href="/features" onClick={() => setMenuOpen(false)}>
                Features
              </ActiveLink>
              <ActiveLink href="/pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </ActiveLink>
              <ActiveLink href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </ActiveLink>
            </nav>
          </div>

          <div className="flex justify-start items-center gap-4">
            <Image src="/social/facebook.svg" alt="Facebook" width={32} height={32} loading="lazy" />
            <Image
              src="/social/instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
              loading="lazy"
            />
            <Image src="/social/twitter.svg" alt="Twitter" width={32} height={32} loading="lazy" />
            <Image src="/social/youtube.svg" alt="YouTube" width={32} height={32} loading="lazy" />
          </div>
        </div>
      )}
    </header>
  )
}
