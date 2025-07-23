import DonationForm from "@/components/donation-form"
import Image from "next/image"

export default function DonatePage() {
  return (
    <main>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Make a Donation</h1>
            <p className="text-lg text-center mb-8">
              Your gift to Save the Children will help ensure children around the world grow up healthy, educated and
              safe.
            </p>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Your Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$50</div>
                <p>Can provide enough food to keep 3 children from going hungry for a month</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$150</div>
                <p>Can provide 2 families with emergency food parcels with essential items</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$300</div>
                <p>Can provide 20 hygiene kits to help children and families stay healthy</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/donation-impact.jpg"
                      alt="Your donation impact"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">85% of every dollar goes directly to helping children</h3>
                  <p className="text-gray-700">
                    Save the Children is consistently recognized as one of the most efficient charities, with 85% of our
                    expenditures going directly to program services for children and families in need. We work in the
                    hardest-to-reach places, where it's toughest to be a child.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Other Ways to Give</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Monthly Giving</h3>
                <p className="mb-4">
                  Join our community of monthly donors and make a lasting difference in children's lives.
                </p>
                <a href="/monthly-support" className="text-red-600 font-medium hover:underline">
                  Learn more →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Gift Catalog</h3>
                <p className="mb-4">Give a meaningful gift that will help children in need around the world.</p>
                <a href="/gift-catalog" className="text-red-600 font-medium hover:underline">
                  Browse gifts →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Legacy Giving</h3>
                <p className="mb-4">Create a lasting legacy by including Save the Children in your estate plans.</p>
                <a href="/legacy-giving" className="text-red-600 font-medium hover:underline">
                  Learn more →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Corporate Partnerships</h3>
                <p className="mb-4">Partner with us to make a difference in the lives of children worldwide.</p>
                <a href="/corporate-partnerships" className="text-red-600 font-medium hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
