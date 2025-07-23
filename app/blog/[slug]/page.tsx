import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Share2, Calendar, Clock, User, ArrowRight } from "lucide-react"

// This would normally come from a CMS or API
const blogPost = {
  title: "The Invisible Crisis: Mental Health Support for Children in Conflict Zones",
  date: "May 12, 2025",
  author: "Dr. Sarah Johnson",
  readTime: "8 min read",
  category: "Mental Health",
  image: "/images/blog-featured.jpg",
  content: `
    <p class="text-lg mb-4">Children living in conflict zones face unique and severe mental health challenges that often go unaddressed. The constant exposure to violence, displacement, and instability can have profound effects on their psychological well-being, with consequences that may last a lifetime.</p>
    
    <p class="mb-4">At Save the Children, we've launched a new program specifically designed to address the mental health needs of children in conflict-affected areas. This initiative combines evidence-based therapeutic approaches with culturally sensitive practices to provide comprehensive support.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Scale of the Problem</h2>
    
    <p class="mb-4">According to our recent research, more than 420 million children—nearly one-fifth of children worldwide—are living in conflict zones. Many of these children experience symptoms of post-traumatic stress disorder (PTSD), depression, and anxiety at rates far higher than their peers in stable environments.</p>
    
    <p class="mb-4">Yet mental health services in these regions are often severely limited or non-existent. Even when services are available, they may not be tailored to the specific needs of children or culturally appropriate for the communities they serve.</p>
    
    <blockquote class="border-l-4 border-red-600 pl-4 italic my-6">
      "The psychological wounds of conflict can be just as debilitating as physical injuries, but they often receive far less attention and resources." — Dr. Sarah Johnson, Mental Health Program Director
    </blockquote>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Our Approach</h2>
    
    <p class="mb-4">Our new program takes a multi-layered approach to supporting children's mental health:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Community-Based Support:</strong> We train local community members to recognize signs of psychological distress in children and provide basic support.</li>
      <li><strong>School-Based Interventions:</strong> We work with teachers to create safe, supportive learning environments and integrate psychosocial activities into the school day.</li>
      <li><strong>Specialized Care:</strong> For children with more severe needs, we provide access to trained mental health professionals who can offer specialized therapeutic interventions.</li>
      <li><strong>Caregiver Support:</strong> We recognize that supporting children's mental health also means supporting their caregivers, who may be dealing with their own trauma.</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Early Results</h2>
    
    <p class="mb-4">The program is currently being implemented in three conflict-affected regions, and early results are promising. Children participating in the program have shown improvements in emotional regulation, decreased symptoms of anxiety and depression, and better social functioning.</p>
    
    <p class="mb-4">Importantly, we're also seeing changes at the community level, with increased awareness and reduced stigma around mental health issues.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
    
    <p class="mb-4">While we're encouraged by these early results, we know there's much more work to be done. We're committed to expanding this program to reach more children in conflict zones, while continuing to refine our approaches based on evidence and feedback from the communities we serve.</p>
    
    <p class="mb-4">Mental health support shouldn't be a luxury—it's a fundamental right for all children, including those living through the trauma of conflict. With continued support and advocacy, we can help ensure that these invisible wounds don't define children's futures.</p>
  `,
  tags: ["Mental Health", "Conflict Zones", "Child Protection", "Humanitarian Aid", "Psychosocial Support"],
  relatedPosts: [
    {
      id: 2,
      title: "Trauma-Informed Education: Supporting Refugee Children in the Classroom",
      excerpt:
        "How educators can create supportive learning environments for children who have experienced displacement and trauma.",
      date: "May 5, 2025",
      category: "Education",
      image: "/images/blog-education.jpg",
      slug: "trauma-informed-education",
    },
    {
      id: 3,
      title: "The Power of Play: How Recreational Activities Help Children Heal",
      excerpt:
        "Play is not just fun—it's a powerful tool for helping children recover from trauma and build resilience.",
      date: "April 15, 2025",
      category: "Child Protection",
      image: "/images/blog-play.jpg",
      slug: "power-of-play",
    },
    {
      id: 4,
      title: "Building Resilience: Strengthening Children's Mental Health in Crisis Settings",
      excerpt:
        "Practical approaches to helping children develop the psychological resilience they need to thrive despite adversity.",
      date: "April 2, 2025",
      category: "Mental Health",
      image: "/images/blog-resilience.jpg",
      slug: "building-resilience-crisis",
    },
  ],
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Button variant="ghost" size="sm" asChild className="hover:bg-gray-200">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">{blogPost.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{blogPost.title}</h1>

            <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{blogPost.readTime}</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} fill className="object-cover" />
            </div>

            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </article>

            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPost.relatedPosts.map((post) => (
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
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Make a Difference</h2>
            <p className="text-lg mb-8">
              Your support helps us provide mental health services to children in conflict zones and other vulnerable
              situations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-red-600 hover:bg-red-700">Donate Now</Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Learn More About Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
