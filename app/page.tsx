"use client"

import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Globe, BookOpen, Users } from "lucide-react"
import ImpactCounter from "@/components/impact-counter"
import DonationTabs from "@/components/donation-tabs"
import LatestNews from "@/components/latest-news"

// Lazy-load heavy components
const TestimonialCarousel = dynamic(() => import("@/components/testimonial-carousel"), {
  ssr: false,
  loading: () => <div className="text-center text-gray-500">Loading testimonials...</div>,
})

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white">Urgent: Crisis Response</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Every Child Deserves a Future</h1>
              <p className="text-xl text-white/90 mb-8">
                We're on the ground in 120 countries, working to reach every last child with healthcare, education, and
                protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Donate Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn How We Help
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
            <p className="text-gray-600">
              Your support helps us reach vulnerable children around the world. Choose how you'd like to give.
            </p>
          </div>
          <DonationTabs />
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Global Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For over 100 years, we've been changing the lives of children. Here's our impact by the numbers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ImpactCounter
            end={87000000}
            suffix="+"
            duration={3}
            title="Children Reached"
            description="Children reached through our programs worldwide last year"
            icon={<Users className="h-8 w-8 text-red-600" />}
          />
          <ImpactCounter
            end={120}
            duration={2}
            title="Countries"
            description="Countries where we implement programs to help children"
            icon={<Globe className="h-8 w-8 text-red-600" />}
          />
          <ImpactCounter
            end={25000}
            suffix="+"
            duration={2.5}
            title="Staff Members"
            description="Dedicated staff working worldwide to support children"
            icon={<Users className="h-8 w-8 text-red-600" />}
          />
          <ImpactCounter
            end={85}
            suffix="%"
            duration={2}
            title="Program Spending"
            description="Of every dollar goes directly to helping children"
            icon={<Heart className="h-8 w-8 text-red-600" />}
          />
        </div>
      </section>

      {/* Current Crises */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Current Crises</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Children are at the heart of every crisis. We're on the ground providing immediate and long-term support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Gaza Emergency",
              description: "Providing critical aid to children and families affected by the ongoing conflict.",
              image: "/images/crisis-gaza.jpg",
              link: "/emergencies/gaza",
            },
            {
              title: "Ukraine Response",
              description: "Supporting children and families impacted by the war in Ukraine and neighboring countries.",
              image: "/images/crisis-ukraine.jpg",
              link: "/emergencies/ukraine",
            },
            {
              title: "Global Hunger Crisis",
              description: "Addressing severe food insecurity affecting millions of children worldwide.",
              image: "/images/crisis-hunger.jpg",
              link: "/emergencies/hunger",
            },
          ].map((crisis, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-56">
                <Image
                  src={crisis.image || "/placeholder.svg"}
                  alt={crisis.title || "Image"}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">{crisis.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{crisis.description}</p>
                <Link href={crisis.link} className="text-red-600 font-medium flex items-center hover:underline">
                  How we're helping <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/emergencies">View All Emergencies</Link>
          </Button>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work to ensure children's rights to survival, protection, development and participation are fulfilled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Health & Nutrition",
              description: "Ensuring children survive and thrive with access to healthcare and proper nutrition.",
              icon: <Heart className="h-10 w-10 text-red-600" />,
              link: "/programs/health",
            },
            {
              title: "Education",
              description: "Providing quality education so children can learn and reach their full potential.",
              icon: <BookOpen className="h-10 w-10 text-red-600" />,
              link: "/programs/education",
            },
            {
              title: "Child Protection",
              description: "Protecting children from violence, exploitation, abuse, and neglect.",
              icon: <Users className="h-10 w-10 text-red-600" />,
              link: "/programs/protection",
            },
            {
              title: "Emergency Response",
              description: "Responding rapidly to disasters and conflicts to save children's lives.",
              icon: <Globe className="h-10 w-10 text-red-600" />,
              link: "/programs/emergency",
            },
          ].map((program, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link
                  href={program.link}
                  className="text-red-600 font-medium flex items-center justify-center hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Stories of Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the children and families whose lives have been changed by your support.
          </p>
        </div>
        <TestimonialCarousel />
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest News & Updates</h2>
            <Link href="/blog" className="text-red-600 font-medium flex items-center hover:underline">
              View all articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <LatestNews />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Creating Lasting Change</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can build a world where every child has the chance to grow up healthy, educated and safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Become a Monthly Donor
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}