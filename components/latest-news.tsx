import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const latestPosts = [
  {
    id: 1,
    title: "Education Cannot Wait: How We're Helping Children in Conflict Zones",
    excerpt: "Learn how our education programs are reaching children in the world's most challenging contexts.",
    date: "May 10, 2025",
    category: "Education",
    image: "/images/blog-education.jpg",
    slug: "education-cannot-wait",
  },
  {
    id: 2,
    title: "5 Ways Climate Change is Affecting Children Worldwide",
    excerpt: "Climate change is having a profound impact on children's lives. Here's what we're doing about it.",
    date: "May 5, 2025",
    category: "Climate",
    image: "/images/blog-climate.jpg",
    slug: "climate-change-children",
  },
  {
    id: 3,
    title: "Meet the Health Workers Saving Lives in Rural Communities",
    excerpt: "Our community health workers are bringing vital care to children in hard-to-reach areas.",
    date: "April 28, 2025",
    category: "Health",
    image: "/images/blog-health.jpg",
    slug: "health-workers-rural-communities",
  },
]

export default function LatestNews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {latestPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md">
          <div className="relative h-48">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            <div className="absolute top-4 left-4">
              <Badge className="bg-red-600 hover:bg-red-700">{post.category}</Badge>
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
            <Link href={`/blog/${post.slug}`} className="text-red-600 font-medium flex items-center hover:underline">
              Read more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
