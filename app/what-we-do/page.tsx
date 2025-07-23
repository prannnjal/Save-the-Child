import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhatWeDoPage() {
  return (
    <main>
      <section className="bg-gray-100 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">What We Do</h1>
            <p className="text-lg mb-8">
              Save the Children does whatever it takes to ensure children survive, have the opportunity to learn and are
              protected from harm.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Emergency Response</h2>
              <p className="mb-4">
                When crisis strikes, we are always among the first to respond and the last to leave. We have been
                responding to emergencies around the world for over 100 years.
              </p>
              <p className="mb-6">
                We work to save lives, reduce suffering and support children and their families in times of crisis
                through programs focused on health and nutrition, education, protection, and more.
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/emergency">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-80 w-full">
              <Image
                src="/images/emergency-response.jpg"
                alt="Emergency Response"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative h-80 w-full">
              <Image
                src="/images/health-nutrition.jpg"
                alt="Health and Nutrition"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Health and Nutrition</h2>
              <p className="mb-4">
                We work to improve the health and nutrition of children and their mothers through programs that save
                lives and ensure children can grow up healthy.
              </p>
              <p className="mb-6">
                Our programs focus on maternal, newborn and child health, nutrition, water, sanitation and hygiene, and
                the prevention and treatment of diseases.
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/health-nutrition">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
              <p className="mb-4">
                We believe that all children have the right to learn. Our education programs give children the
                opportunity to learn and develop their full potential.
              </p>
              <p className="mb-6">
                From early childhood development to basic education and beyond, we work to ensure that children have
                access to quality education, even in the most difficult circumstances.
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/education">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-80 w-full">
              <Image src="/images/education.jpg" alt="Education" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative h-80 w-full">
              <Image
                src="/images/child-protection.jpg"
                alt="Child Protection"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Child Protection</h2>
              <p className="mb-4">
                We protect children from all forms of abuse, neglect, exploitation and violence in all settings,
                including online.
              </p>
              <p className="mb-6">
                Our protection programs create safe environments for children and address harmful practices such as
                child marriage, child labor, and the recruitment of children into armed groups.
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/child-protection">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
            <p className="text-lg mb-8">
              Together, we can create a world where every child has the right to survival, protection, development and
              participation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-red-700">
                <Link href="/ways-to-help">Other Ways to Help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
