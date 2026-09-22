import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blog';

export function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="relative pt-24 pb-16 min-h-screen bg-[#FAFAFD] text-slate-900">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00] hover:text-[#e05e00] mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>
      </div>

      {/* ARTICLE HEADER */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-50 text-[#FF6B00] border border-[#FF6B00]/30 shadow-xs">
          {post.category}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-3">
            <img src={post.authorAvatar} alt={post.author} className="w-10 h-10 rounded-full object-cover border border-[#FF6B00]" />
            <div>
              <div className="text-sm font-bold text-slate-900">{post.author}</div>
              <div className="text-xs text-slate-500">{post.authorRole}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#FF6B00]" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#FF6B00]" /> {post.readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden aspect-video border border-slate-200 shadow-2xl my-6">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Body */}
        <div className="max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg font-normal">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={idx} className="text-2xl font-bold font-heading text-slate-900 pt-6 border-b border-slate-200 pb-2">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('> ')) {
              return (
                <blockquote key={idx} className="p-5 rounded-xl bg-orange-50/80 border-l-4 border-[#FF6B00] text-slate-800 font-medium italic my-6 shadow-xs">
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
        <h3 className="text-xl font-bold font-heading text-slate-900 mb-6">Related Engineering Briefings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedPosts.map((rel) => (
            <div key={rel.slug} className="p-6 space-y-3 rounded-2xl bg-white border border-slate-200 shadow-md hover:border-slate-300">
              <span className="text-xs font-mono font-bold text-[#FF6B00]">{rel.category}</span>
              <h4 className="text-lg font-bold font-heading text-slate-900">{rel.title}</h4>
              <Link to={`/blog/${rel.slug}`} className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6B00] hover:text-[#e05e00]">
                Read Article →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
