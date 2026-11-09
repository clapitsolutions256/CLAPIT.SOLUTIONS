import { blogPosts } from "@/data/blogsData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { generateBlogMetadata } from "@/utilities/metadata";
import BlogsDetailsHeader from "@/components/Blog/BlogsDetailsHeader";
import BlogTableOfContent from "@/components/Blog/BlogTableOfContent";
import BlogSections from "@/components/Blog/BlogSections";
import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ArticleSchema from "@/components/StructuredData/ArticleSchema";
import BreadcrumbSchema from "@/components/StructuredData/BreadcrumbSchema";

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogPosts.find((blog) => blog.slug === slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return generateBlogMetadata(blog);
}

export default async function BlogPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const blog = blogPosts.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://www.clapit.solutions';
  const blogUrl = `${baseUrl}/blogs/${slug}`;
  
  // Get image URL
  let imageUrl = `${baseUrl}/images/og-image.jpg`;
  if (blog.coverImage) {
    if (typeof blog.coverImage === 'string') {
      imageUrl = blog.coverImage;
    } else if (blog.coverImage && typeof blog.coverImage === 'object' && 'src' in blog.coverImage) {
      imageUrl = blog.coverImage.src;
    }
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blogs" },
    { name: blog.title || "Blog Post", url: `/blogs/${slug}` },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-8 lg:px-12">
      <ArticleSchema
        title={blog.title || "Blog Post"}
        description={blog.description || ""}
        url={blogUrl}
        image={imageUrl}
        publishedTime={new Date().toISOString()}
        author={{
          name: "CLAPIT SOLUTIONS",
        }}
        publisher={{
          name: "CLAPIT SOLUTIONS",
          logo: `${baseUrl}/images/logo.png`,
        }}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <BlogsDetailsHeader blogPost={blog} />

      <div className="flex flex-col lg:flex-row gap-8 pt-20">
        <div className="lg:w-1/4 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24">
            <BlogTableOfContent blogPost={blog} />
          </div>
        </div>
        <div className="lg:w-2/4 order-1 lg:order-2">
          <BlogSections blogPost={blog} />
        </div>
        <div className="lg:w-1/4 order-3">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ContactUsForm />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4 py-10">
          <p className="text-dark font-bold text-lg lg:block hidden">
            Share Post:
          </p>
          {["Twitter", "Facebook", "LinkedIn", "Dribbble", "Instagram"].map(
            (platform) => (
              <p
                key={platform}
                className="cursor-pointer border px-6 py-2 text-secondary border-secondary hover:border-dark hover:text-dark rounded-md text-sm md:text-base"
              >
                {platform}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return blogPosts.map((blog) => ({
    slug: blog.slug,
  }));
}
