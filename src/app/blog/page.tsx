import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Steer Wrestling Blog - Rules, Hazing, Horses & Training",
  description:
    "Steer wrestling rules explained, what makes a fall legal, how hazing and mount money actually work, reading a steer, and the strength and injury side of bulldogging — from Bulldogging.Pro.",
  alternates: { canonical: "https://www.bulldogging.pro/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-brand">
        Bulldogging.Pro Blog
      </h1>
      <p className="mt-3 text-muted">
        Rules, hazing, horses, and training — written for people who actually
        back into the box.
      </p>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-ink-border bg-ink-raised/70 p-6 transition hover:border-brand"
          >
            <p className="text-xs tracking-wider text-muted-dim uppercase">
              {post.date}
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand">
              <a href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </a>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#d3dbe6]">
              {post.excerpt}
            </p>
            <a
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-brand-2 hover:underline"
            >
              Read more &rarr;
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
