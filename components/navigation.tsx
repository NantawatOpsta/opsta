"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { SocialMediaButtons } from "@/components/social-media-buttons"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/opsta-logo.svg" alt="Opsta" width={120} height={40} className="h-8 w-auto" priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                  Products
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/products">All Products</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/products#opstella">Opstella Platform</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/products/primex">PrimeX Platform</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                  Support
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/support/get-support">Get Support</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/support/software-lifecycle-policy">Software Lifecycle Policy</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <SocialMediaButtons variant="header" />
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <Link
              href="/about"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/products/primex"
              className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              PrimeX Platform
            </Link>
            <Link
              href="/support/get-support"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Support
            </Link>
            <Link
              href="/support/software-lifecycle-policy"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Software Lifecycle Policy
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <SocialMediaButtons variant="footer" className="justify-center" />
            </div>
            <div className="px-3 py-2">
              <Button asChild className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
