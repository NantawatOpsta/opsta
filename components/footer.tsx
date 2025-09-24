import Link from "next/link"
import { SocialMediaButtons } from "@/components/social-media-buttons"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              Opsta
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Technology Expert Consultant Team specializing in DevSecOps Transformation, Cloud Native Solutions, and
              Platform Engineering.
            </p>
            <div className="mb-4">
              <SocialMediaButtons variant="footer" />
            </div>
            <p className="text-sm text-muted-foreground">© 2025-2026 Opsta (Thailand) Co.,Ltd. All rights reserved.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  DevSecOps Platform
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Kubernetes Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Security Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#opstella" className="hover:text-primary transition-colors">
                  Opstella Platform
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.opstella.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Opstella Website
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
