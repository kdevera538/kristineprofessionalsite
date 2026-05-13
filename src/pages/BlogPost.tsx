import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-display font-bold">Post not found</h1>
          <p className="mt-3 text-muted-foreground">That post doesn't exist or has been moved.</p>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-[680px] mx-auto px-6 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:-translate-x-1 transition-transform"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <header className="mt-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-warm text-primary-foreground">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
          </div>
        </header>

        <div
          className="blog-content mt-10 text-foreground"
          style={{ lineHeight: 1.8 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-14 pt-8 border-t border-border/60 flex items-start gap-4">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground">
            <User className="h-6 w-6" />
          </div>
          <div>
            <div className="font-display font-bold text-foreground">{post.author}</div>
            <div className="text-sm text-muted-foreground">{post.authorBio}</div>
          </div>
        </footer>
      </article>
    </Layout>
  );
}
