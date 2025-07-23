import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MonthlySupportPage() {
  return (
    <main>
      <section className="bg-gray-100 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Monthly Support</h1>
            <p className="text-lg mb-8">
              Join our community of monthly donors and make a lasting difference in children's lives around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Monthly Giving?</h2>
              <p className="mb-4">
                When you become a monthly donor, you provide consistent, reliable support that allows us to plan ahead
                and respond quickly when children need us most.
              </p>
              <p className="mb-6">
                Your monthly gift helps ensure that we can continue our life-saving work for children in the United
                States and around the world.
              </p>

              <ul className="space-y-3">
                {[
                  "Provides reliable, sustainable funding for our programs",
                  "Reduces administrative costs, allowing more of your gift to go directly to helping children",
                  "Enables us to respond quickly to emergencies",
                  "Helps us plan for the future and make long-term commitments to communities",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-red-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 w-full">
              <Image src="/images/monthly-support.jpg" alt="Monthly Support" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-center">Become a Monthly Donor</h2>

              <form className="space-y-6">
                <div className="space-y-4">
                  <Label htmlFor="amount">Select Monthly Amount</Label>
                  <div className="grid grid-cols-4 gap-4">
                    {[19, 35, 50, 100].map((amount) => (
                      <div key={amount} className="relative">
                        <input
                          type="radio"
                          id={`amount-${amount}`}
                          name="amount"
                          value={amount}
                          className="peer sr-only"
                          defaultChecked={amount === 35}
                        />
                        <label
                          htmlFor={`amount-${amount}`}
                          className="flex h-12 w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium peer-checked:border-red-600 peer-checked:bg-red-600 peer-checked:text-white hover:bg-gray-50 peer-checked:hover:bg-red-600"
                        >
                          ${amount}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center">
                    <Label htmlFor="custom-amount" className="mr-2">
                      Other Amount:
                    </Label>
                    <div className="flex">
                      <div className="bg-gray-100 flex items-center justify-center px-3 border border-r-0 border-gray-300 rounded-l-md">
                        <span className="text-gray-500">$</span>
                      </div>
                      <Input id="custom-amount" type="text" placeholder="Enter amount" className="rounded-l-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="payment-method">Payment Method</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="radio"
                        id="credit-card"
                        name="payment-method"
                        value="credit-card"
                        className="peer sr-only"
                        defaultChecked
                      />
                      <label
                        htmlFor="credit-card"
                        className="flex h-12 w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium peer-checked:border-red-600 peer-checked:bg-red-50 hover:bg-gray-50"
                      >
                        Credit Card
                      </label>
                    </div>
                    <div className="relative">
                      <input type="radio" id="paypal" name="payment-method" value="paypal" className="peer sr-only" />
                      <label
                        htmlFor="paypal"
                        className="flex h-12 w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium peer-checked:border-red-600 peer-checked:bg-red-50 hover:bg-gray-50"
                      >
                        PayPal
                      </label>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Become a Monthly Donor
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Your donation is tax-deductible to the extent allowed by law. Save the Children Federation, Inc. is a
                  501(c)(3) organization.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Impact of Your Monthly Gift</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "$19 Monthly",
                  description: "Can help provide nutritious food to keep a child from going hungry for a month.",
                  image: "/images/impact-food.jpg",
                },
                {
                  title: "$35 Monthly",
                  description: "Can help provide educational materials and support for a child to continue learning.",
                  image: "/images/impact-education.jpg",
                },
                {
                  title: "$50 Monthly",
                  description: "Can help provide medical care and support for children in need.",
                  image: "/images/impact-health.jpg",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

              <div className="space-y-6">
                {[
                  {
                    question: "How does monthly giving work?",
                    answer:
                      "When you sign up for monthly giving, your donation will be automatically charged to your credit card or deducted from your account each month. You can change or cancel your monthly gift at any time.",
                  },
                  {
                    question: "Will I receive a tax receipt?",
                    answer:
                      "Yes, you will receive an annual tax receipt summarizing all of your donations for the year. You can also access your donation history online at any time.",
                  },
                  {
                    question: "Can I change my monthly donation amount?",
                    answer:
                      "Yes, you can change your monthly donation amount at any time by contacting our Donor Services team or by logging into your account online.",
                  },
                  {
                    question: "How will my monthly gift be used?",
                    answer:
                      "Your monthly gift will be used to support Save the Children's programs around the world, helping children survive, learn, and be protected. 85% of every dollar goes directly to program services for children and families in need.",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="mb-4">Have more questions? We're here to help.</p>
                <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Join Our Community of Monthly Donors</h2>
            <p className="text-lg mb-8">Together, we can create lasting change for children around the world.</p>
            <Button asChild className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="#top">Become a Monthly Donor</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
