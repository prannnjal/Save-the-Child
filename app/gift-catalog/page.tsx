import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const giftItems = [
  {
    id: 1,
    title: "Feed a Child",
    price: 50,
    image: "/images/gift-food.jpg",
    description: "Provide nutritious food to a hungry child for a month.",
  },
  {
    id: 2,
    title: "School Supplies",
    price: 25,
    image: "/images/gift-education.jpg",
    description: "Give a child the tools they need to learn and succeed in school.",
  },
  {
    id: 3,
    title: "Medical Care",
    price: 100,
    image: "/images/gift-health.jpg",
    description: "Help provide life-saving medical care to children in need.",
  },
  {
    id: 4,
    title: "Clean Water",
    price: 75,
    image: "/images/gift-water.jpg",
    description: "Provide clean, safe drinking water to children and families.",
  },
  {
    id: 5,
    title: "Emergency Shelter",
    price: 150,
    image: "/images/gift-shelter.jpg",
    description: "Help provide shelter for families displaced by disasters or conflict.",
  },
  {
    id: 6,
    title: "Warm Blankets",
    price: 35,
    image: "/images/gift-blankets.jpg",
    description: "Keep children warm with cozy blankets during cold weather.",
  },
  {
    id: 7,
    title: "Goat for a Family",
    price: 85,
    image: "/images/gift-goat.jpg",
    description: "Provide a goat to help a family with sustainable nutrition and income.",
  },
  {
    id: 8,
    title: "Vaccination Package",
    price: 60,
    image: "/images/gift-vaccines.jpg",
    description: "Help protect children from preventable diseases with life-saving vaccines.",
  },
]

export default function GiftCatalogPage() {
  return (
    <main>
      <section className="bg-gray-100 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Gift Catalog</h1>
            <p className="text-lg mb-8">
              Give a meaningful gift that will help children in need around the world. Each gift in our catalog
              represents a real item or service that will benefit children and families.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {giftItems.map((gift) => (
              <div key={gift.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src={gift.image || "/placeholder.svg"} alt={gift.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{gift.title}</h3>
                    <span className="text-red-600 font-bold">${gift.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{gift.description}</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Choose a Gift</h3>
                  <p className="text-gray-600">Browse our catalog and select a gift that resonates with you.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Make Your Purchase</h3>
                  <p className="text-gray-600">Complete your purchase securely online or by phone.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Share Your Gift</h3>
                  <p className="text-gray-600">Receive a card to share with friends or family about your gift.</p>
                </div>
              </div>

              <div className="text-center">
                <p className="mb-6">
                  Your gift purchase is a tax-deductible donation that represents a real item or service that will
                  benefit children and families in need.
                </p>
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link href="/gift-catalog/how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Collections</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Gifts Under $50",
                  image: "/images/gifts-under-50.jpg",
                  description: "Meaningful gifts that fit any budget.",
                },
                {
                  title: "Most Needed Gifts",
                  image: "/images/most-needed.jpg",
                  description: "These gifts address the most urgent needs of children.",
                },
                {
                  title: "Gifts of Hope",
                  image: "/images/gifts-of-hope.jpg",
                  description: "Give hope to children and families facing difficult circumstances.",
                },
              ].map((collection, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                    <p className="text-gray-600 mb-4">{collection.description}</p>
                    <Button asChild variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                      <Link href={`/gift-catalog/${collection.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        View Collection
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Give a Gift That Changes Lives</h2>
            <p className="text-lg mb-8">
              Your gift will help children in need around the world. Shop our gift catalog today and make a difference.
            </p>
            <Button asChild className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="#top">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
