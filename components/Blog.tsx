import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogsData";
import BlogCard from "./Blog/BlogCard";
import SectionHeading from "./ui/SectionHeading";
import { Button } from "./ui/button";

interface BlogsProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function Blogs({ limit, showViewAll = true }: BlogsProps) {
  const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className="section bg-background">
      <div className="container">
        <SectionHeading
          eyebrow="Insights"
          title="Latest from our blog"
          description="Practical guides on AI, product engineering and growth from the CLAPIT team."
          action={
            showViewAll && limit ? (
              <Button asChild variant="outline">
                <Link href="/blogs">
                  View all articles
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            ) : undefined
          }
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((post) => (
            <BlogCard
              key={post.slug}
              id={post.slug}
              title={post.title}
              description={post.description}
              image={post.coverImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
