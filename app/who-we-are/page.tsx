import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhoWeArePage() {
  return (
    <main>
      <section className="bg-gray-100 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-lg mb-8">
              Save the Children believes every child deserves a future. We work in the United States and around the
              world to give children a healthy start in life, the opportunity to learn and protection from harm.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg mb-6">
                A world in which every child attains the right to survival, protection, development and participation.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-6">
                To inspire breakthroughs in the way the world treats children and to achieve immediate and lasting
                change in their lives.
              </p>
            </div>
            <div className="relative h-80 w-full">
              <Image src="/images/our-vision.jpg" alt="Our Vision" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our History</h2>
            <p className="text-lg">
              For over 100 years, we've been championing the rights of children around the world.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative border-l-4 border-red-600 pl-8 ml-4 md:ml-12 space-y-12">
              {[
                {
                  year: "1919",
                  title: "Our Founding",
                  description:
                    "Save the Children was founded by Eglantyne Jebb in response to the aftermath of World War I to save children from starvation in Europe.",
                },
                {
                  year: "1932",
                  title: "Expanding to the United States",
                  description:
                    "Save the Children began working in the United States, providing support to children and families in Appalachia during the Great Depression.",
                },
                {
                  year: "1950s",
                  title: "Global Expansion",
                  description:
                    "Save the Children expanded its work to Asia, Africa, and Latin America, providing emergency relief and development programs.",
                },
                {
                  year: "1989",
                  title: "UN Convention on the Rights of the Child",
                  description:
                    "Save the Children played a key role in the development of the UN Convention on the Rights of the Child, the most widely ratified human rights treaty in history.",
                },
                {
                  year: "Today",
                  title: "Global Reach",
                  description:
                    "Save the Children works in over 100 countries, reaching millions of children through health, education, protection, and emergency response programs.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-12 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="text-red-600 font-bold">{item.year}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg">
              Our core values guide everything we do to create lasting, positive change in the lives of children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Accountability",
                description:
                  "We take personal responsibility for using our resources efficiently and achieving measurable results.",
              },
              {
                title: "Collaboration",
                description:
                  "We respect and value each other, thrive on our diversity, and work with partners to leverage our global strength in making a difference for children.",
              },
              {
                title: "Integrity",
                description:
                  "We aspire to live to the highest standards of personal honesty and behavior; we never compromise our reputation and always act in the best interests of children.",
              },
              {
                title: "Ambition",
                description:
                  "We are demanding of ourselves and our colleagues, set high goals and are committed to improving the quality of everything we do for children.",
              },
              {
                title: "Creativity",
                description:
                  "We are open to new ideas, embrace change, and take disciplined risks to develop sustainable solutions for and with children.",
              },
              {
                title: "Transparency",
                description:
                  "We create an environment where information is freely shared, opinions are openly expressed, and accountability is clear.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-80 w-full">
                <Image src="/images/leadership.jpg" alt="Our Leadership" fill className="object-cover rounded-lg" />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Leadership</h2>
                <p className="mb-4">
                  Our leadership team and board of trustees bring diverse expertise and a shared commitment to our
                  mission of creating lasting change in the lives of children.
                </p>
                <p className="mb-6">
                  Together, they guide our organization in delivering programs that help children survive, learn, and be
                  protected.
                </p>
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link href="/leadership">Meet Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg mb-8">
              Together, we can create a world where every child has the opportunity to survive, learn, and be protected.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-red-700">
                <Link href="/ways-to-help">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
