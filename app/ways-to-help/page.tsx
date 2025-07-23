import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WaysToHelpPage() {
  return (
    <main>
      <section className="bg-gray-100 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Ways to Help</h1>
            <p className="text-lg mb-8">
              There are many ways you can support Save the Children's work and make a difference in the lives of
              children around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Make a Donation",
                description:
                  "Your gift can help save children's lives and provide essentials like food, healthcare, and education.",
                image: "/images/make-donation.jpg",
                link: "/donate",
              },
              {
                title: "Sponsor a Child",
                description: "Change a child's life through sponsorship and help them and their community thrive.",
                image: "/images/sponsor-child.jpg",
                link: "/sponsor",
              },
              {
                title: "Monthly Giving",
                description: "Join our community of monthly donors and make a lasting difference in children's lives.",
                image: "/images/monthly-giving.jpg",
                link: "/monthly-support",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button asChild className="bg-red-600 hover:bg-red-700 w-full">
                    <Link href={item.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">More Ways to Get Involved</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Gift Catalog",
                  description: "Give a meaningful gift that will help children in need around the world.",
                  image: "/images/gift-catalog.jpg",
                  link: "/gift-catalog",
                },
                {
                  title: "Fundraise",
                  description:
                    "Start your own fundraiser and rally your friends, family, and community to support children in need.",
                  image: "/images/fundraise.jpg",
                  link: "/fundraise",
                },
                {
                  title: "Corporate Partnerships",
                  description: "Partner with us to make a difference in the lives of children worldwide.",
                  image: "/images/corporate.jpg",
                  link: "/corporate-partnerships",
                },
                {
                  title: "Legacy Giving",
                  description: "Create a lasting legacy by including Save the Children in your estate plans.",
                  image: "/images/legacy.jpg",
                  link: "/legacy-giving",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                      <Link href={item.link}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Volunteer and Advocate</h2>
            <p className="text-lg mb-8">
              Use your voice and time to advocate for children's rights and support our mission.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Volunteer</h3>
                <p className="mb-6">
                  Join our network of volunteers and help us in our mission to support children around the world.
                </p>
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link href="/volunteer">Volunteer With Us</Link>
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Advocacy</h3>
                <p className="mb-6">
                  Raise your voice for children's rights and help us influence policy changes that benefit children.
                </p>
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link href="/advocacy">Take Action</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Every Child Deserves a Future</h2>
            <p className="text-lg mb-8">
              Together, we can ensure children around the world have the opportunity to survive, learn and be protected.
            </p>
            <Button asChild className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
