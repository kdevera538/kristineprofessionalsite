import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogIndex() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-display font-bold">
            <span className="text-gradient-warm">Blog</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Field notes on automation, sales, marketing, and the systems that quietly run businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card border border-border/60 rounded-2xl p-6 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300 flex flex-col"
            >
              <span className="self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-warm text-primary-foreground">
                {post.category}
              </span>
              <h2 className="mt-4 text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
