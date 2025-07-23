import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white fixed inset-x-0 bottom-0 z-50 border-t border-gray-800 shadow-lg">
      {/* Newsletter Section */}
      <div className="bg-red-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
            <p className="mb-6">
              Sign up to receive updates on our work and ways you can help children around the world.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="bg-white text-gray-800" required />
              <Button type="submit" className="bg-gray-900 hover:bg-gray-800">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/images/logo-icon-white.png" alt="Save the Children Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl">Save the Children</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Save the Children believes every child deserves a future. We work in the United States and around the
              world to give children a healthy start in life, the opportunity to learn and protection from harm.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/savethechildren" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://twitter.com/savethechildren" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://instagram.com/savethechildren" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://youtube.com/savethechildren" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com/company/save-the-children" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Work</h4>
            <ul className="space-y-2">
              {[
                { name: "Programs", href: "/programs" },
                { name: "Where We Work", href: "/where-we-work" },
                { name: "Impact", href: "/impact" },
                { name: "Research & Reports", href: "/research" },
                { name: "Stories", href: "/stories" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {[
                { name: "Donate", href: "/donate" },
                { name: "Sponsor a Child", href: "/sponsor" },
                { name: "Fundraise", href: "/fundraise" },
                { name: "Volunteer", href: "/volunteer" },
                { name: "Corporate Partnerships", href: "/corporate" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <ul className="space-y-2">
              {[
                { name: "Our Story", href: "/about/story" },
                { name: "Leadership", href: "/about/leadership" },
                { name: "Financials", href: "/about/financials" },
                { name: "Careers", href: "/about/careers" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Save the Children Federation, Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
          <p className="mt-4 text-xs">
            Save the Children Federation, Inc. is a 501(c)(3) organization. Gifts are deductible to the full extent
            allowable under IRS regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}
