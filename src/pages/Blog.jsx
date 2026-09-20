import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Clock, Calendar, User } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { blogPosts } from '../data/blog';

const categories = ['All', 'Technology', 'AI', 'Cloud', 'Engineering', 'Design', 'Business'];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative pt-24 pb-16">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <SectionHeading
          badge="ENGINEERING BLOG"
          title="Insights & Technical"
          gradientTitle="Briefings"
          description="In-depth articles written by senior architects on cloud infrastructure, AI models, and web performance."
        />

        {/* Search & Categories Bar */}
        <div className="max-w-2xl mx-auto space-y-6 my-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search engineering articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-electric/50 focus:ring-1 focus:ring-cyan-electric/50 text-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-electric text-black font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <GlassCard key={post.slug} glow className="flex flex-col justify-between p-0 overflow-hidden group">
              <div>
                <div className="relative aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase bg-black/60 backdrop-blur-md text-cyan-electric border border-cyan-electric/30">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-cyan-electric transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-2">
                  <img src={post.authorAvatar} alt={post.author} className="w-7 h-7 rounded-full object-cover border border-cyan-electric/40" />
                  <span className="text-xs font-medium text-slate-300">{post.author}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-electric hover:text-cyan-glow">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
