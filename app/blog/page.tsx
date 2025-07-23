import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search } from "lucide-react"

const featuredPost = {
  id: 1,
  title: "The Invisible Crisis: Mental Health Support for Children in Conflict Zones",
  excerpt:
    "Children in conflict zones face unique mental health challenges. Our new program is addressing these needs with innovative approaches.",
  date: "May 12, 2025",
  category: "Mental Health",
  image: "/images/blog-featured.jpg",
  slug: "mental-health-children-conflict",
}

const blogPosts = [
  {
    id: 2,
    title: "Education Cannot Wait: How We're Helping Children in Conflict Zones",
    excerpt: "Learn how our education programs are reaching children in the world's most challenging contexts.",
    date: "May 10, 2025",
    category: "Education",
    image: "/images/blog-education.jpg",
    slug: "education-cannot-wait",
  },
  {
    id: 3,
    title: "5 Ways Climate Change is Affecting Children Worldwide",
    excerpt: "Climate change is having a profound impact on children's lives. Here's what we're doing about it.",
    date: "May 5, 2025",
    category: "Climate",
    image: "/images/blog-climate.jpg",
    slug: "climate-change-children",
  },
  {
    id: 4,
    title: "Meet the Health Workers Saving Lives in Rural Communities",
    excerpt: "Our community health workers are bringing vital care to children in hard-to-reach areas.",
    date: "April 28, 2025",
    category: "Health",
    image: "/images/blog-health.jpg",
    slug: "health-workers-rural-communities",
  },
  {
    id: 5,
    title: "How Cash Transfers Are Empowering Families in Crisis",
    excerpt:
      "Our cash assistance programs are helping families meet their basic needs while maintaining dignity and choice.",
    date: "April 22, 2025",
    category: "Economic Empowerment",
    image: "/images/blog-cash.jpg",
    slug: "cash-transfers-empowering-families",
  },
  {
    id: 6,
    title: "The Power of Play: How Recreational Activities Help Children Heal",
    excerpt: "Play is not just fun—it's a powerful tool for helping children recover from trauma and build resilience.",
    date: "April 15, 2025",
    category: "Child Protection",
    image: "/images/blog-play.jpg",
    slug: "power-of-play",
  },
  {
    id: 7,
    title: "From the Field: Stories from Our Emergency Response Team in Sudan",
    excerpt:
      "Our emergency response team shares firsthand accounts of their work supporting children affected by the crisis in Sudan.",
    date: "April 8, 2025",
    category: "Emergency Response",
    image: "/images/blog-sudan.jpg",
    slug: "field-stories-sudan",
  },
  {
    id: 8,
    title: "Nutrition Innovations: New Approaches to Fighting Child Malnutrition",
    excerpt:
      "Discover the innovative approaches we're using to combat malnutrition in the hardest-to-reach communities.",
    date: "April 1, 2025",
    category: "Nutrition",
    image: "/images/blog-nutrition.jpg",
    slug: "nutrition-innovations",
  },
  {
    id: 9,
    title: "The Digital Divide: Ensuring Equal Access to Education Technology",
    excerpt:
      "As education becomes increasingly digital, we're working to ensure no child is left behind due to lack of access to technology.",
    date: "March 25, 2025",
    category: "Education",
    image: "/images/blog-digital.jpg",
    slug: "digital-divide-education",
  },
]

const categories = [
  "All",
  "Education",
  "Health",
  "Nutrition",
  "Child Protection",
  "Emergency Response",
  "Climate",
  "Mental Health",
  "Economic Empowerment",
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Stories</h1>
            <p className="text-xl text-gray-600">
              Stories from the field, updates on our work, and insights into the issues affecting children worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div className="flex overflow-x-auto pb-2 md:pb-0 space-x-2 w-full md:w-auto">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-red-600 hover:bg-red-700" : "hover:bg-gray-100"}
                >
                  {category}
                </Badge>
              ))}
            </div>
            <div className="flex w-full md:w-auto">
              <Input type="search" placeholder="Search articles..." className="w-full md:w-64" />
              <Button type="submit" size="icon" className="ml-2 bg-red-600 hover:bg-red-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 hover:bg-red-700">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-2">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <span className="text-sm text-gray-500 ml-2">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <Link href={`/blog/${featuredPost.slug}`} className="hover:text-red-600 transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <Button asChild className="w-fit bg-red-600 hover:bg-red-700">
                    <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-white hover:bg-gray-100">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-red-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-red-600 font-medium flex items-center hover:underline"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-1">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline" className="bg-red-600 text-white hover:bg-red-700">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest updates, stories, and ways to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-1" required />
              <Button type="submit" className="bg-red-600 hover:bg-red-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
