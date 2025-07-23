"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Search, Menu, X, ChevronDown } from "lucide-react"

const mainNavItems = [
  {
    title: "Our Work",
    href: "/our-work",
    children: [
      {
        title: "Programs",
        href: "/programs",
        description: "Learn about our programs that help children worldwide",
      },
      {
        title: "Where We Work",
        href: "/where-we-work",
        description: "Discover our global presence in over 120 countries",
      },
      {
        title: "Impact",
        href: "/impact",
        description: "See the difference we're making in children's lives",
      },
      {
        title: "Research & Reports",
        href: "/research",
        description: "Explore our research and publications on children's issues",
      },
    ],
  },
  {
    title: "Get Involved",
    href: "/get-involved",
    children: [
      {
        title: "Donate",
        href: "/donate",
        description: "Make a one-time or monthly donation to help children",
      },
      {
        title: "Sponsor a Child",
        href: "/sponsor",
        description: "Change a child's life through sponsorship",
      },
      {
        title: "Fundraise",
        href: "/fundraise",
        description: "Start your own fundraiser for children in need",
      },
      {
        title: "Volunteer",
        href: "/volunteer",
        description: "Give your time to help children around the world",
      },
    ],
  },
  {
    title: "Emergencies",
    href: "/emergencies",
    children: [
      {
        title: "Current Emergencies",
        href: "/emergencies",
        description: "Learn about ongoing crises affecting children",
      },
      {
        title: "Gaza Emergency",
        href: "/emergencies/gaza",
        description: "Support children affected by the conflict in Gaza",
      },
      {
        title: "Ukraine Response",
        href: "/emergencies/ukraine",
        description: "Help children impacted by the war in Ukraine",
      },
      {
        title: "Global Hunger Crisis",
        href: "/emergencies/hunger",
        description: "Join our efforts to combat child hunger worldwide",
      },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    children: [
      {
        title: "Our Story",
        href: "/about/story",
        description: "Learn about our 100+ year history of helping children",
      },
      {
        title: "Leadership",
        href: "/about/leadership",
        description: "Meet our leadership team and board of trustees",
      },
      {
        title: "Financials",
        href: "/about/financials",
        description: "View our financial information and annual reports",
      },
      {
        title: "Careers",
        href: "/about/careers",
        description: "Join our team and make a difference for children",
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="border-b">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm font-medium">
            <Link href="/emergencies/gaza" className="hover:underline">
              Gaza Emergency: Help children in crisis
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/sign-in" className="text-sm hover:underline">
              Sign In
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image src="/images/logo-icon.png" alt="Save the Children Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">Save the Children</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="text-base">{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.children.map((child) => (
                              <li key={child.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                                  >
                                    <div className="text-sm font-medium leading-none">{child.title}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                      {child.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center ml-4 space-x-2">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-full hover:bg-gray-100">
                <Search className="h-5 w-5" />
              </button>
              <Button className="bg-red-600 hover:bg-red-700">Donate</Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center space-x-2">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              Donate
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b">
                    <Link href="/" className="flex items-center space-x-2">
                      <div className="relative w-8 h-8">
                        <Image
                          src="/images/logo-icon.png"
                          alt="Save the Children Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-bold text-base">Save the Children</span>
                    </Link>
                  </div>
                  <nav className="flex-1 overflow-auto py-4">
                    <MobileNavAccordion items={mainNavItems} />
                  </nav>
                  <div className="border-t py-4">
                    <div className="flex flex-col space-y-3">
                      <Link href="/sign-in" className="text-sm hover:underline">
                        Sign In
                      </Link>
                      <Link href="/contact" className="text-sm hover:underline">
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-0 left-0 w-full bg-white z-50 p-4 shadow-lg">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Search</h2>
              <button onClick={() => setIsSearchOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex">
              <Input type="search" placeholder="Search for topics, programs, or locations..." className="flex-1" />
              <Button type="submit" className="ml-2 bg-red-600 hover:bg-red-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function MobileNavAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={item.title} className="border-b pb-3">
          {item.children ? (
            <div>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <span className="font-medium">{item.title}</span>
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", openIndex === index ? "transform rotate-180" : "")}
                />
              </button>
              {openIndex === index && (
                <ul className="pl-4 mt-2 space-y-2">
                  {item.children.map((child) => (
                    <li key={child.title}>
                      <Link href={child.href} className="block py-2 text-sm hover:text-red-600">
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <Link href={item.href} className="block py-2 font-medium hover:text-red-600">
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
