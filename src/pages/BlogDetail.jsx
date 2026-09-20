import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter } from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { blogPosts } from '../data/blog';

export function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="relative pt-24 pb-16">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-cyan-electric hover:text-cyan-glow mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>
      </div>

      {/* ARTICLE HEADER */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-electric/10 text-cyan-electric border border-cyan-electric/20">
          {post.category}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <img src={post.authorAvatar} alt={post.author} className="w-10 h-10 rounded-full object-cover border border-cyan-electric" />
            <div>
              <div className="text-sm font-bold text-white">{post.author}</div>
              <div className="text-xs text-slate-400">{post.authorRole}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-electric" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-cyan-electric" /> {post.readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl my-6">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6 text-base sm:text-lg">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={idx} className="text-2xl font-bold font-heading text-white pt-6 border-b border-white/10 pb-2">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('> ')) {
              return (
                <blockquote key={idx} className="p-4 rounded-xl bg-cyan-electric/10 border-l-4 border-cyan-electric text-cyan-electric font-medium italic my-6">
                  {paragraph.replace('> ', '')}
                </blockquote>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>
      </article>

      {/* RELATED ARTICLES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-xl font-bold font-heading text-white mb-6">Related Engineering Briefings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedPosts.map((rel) => (
            <GlassCard key={rel.slug} className="p-6 space-y-3">
              <span className="text-xs font-mono text-cyan-electric">{rel.category}</span>
              <h4 className="text-lg font-bold font-heading text-white">{rel.title}</h4>
              <Link to={`/blog/${rel.slug}`} className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-electric">
                Read Article →
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
