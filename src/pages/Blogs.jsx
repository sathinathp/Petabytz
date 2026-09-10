import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Sparkles,
  BookOpen,
  Share2,
  ChevronRight,
  X,
  Check
} from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';
import { blogsData } from '../data/blogs';

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBlogModal, setActiveBlogModal] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    'All',
    'Cloud & Infrastructure',
    'AI & Automation',
    'DevSecOps & VAPT',
    'Modern Workplace',
    'ITSM Managed Services',
    'Salesforce Solutions'
  ];

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogsData[0];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="bg-white text-slate-800">
      <SeoMeta
        title="Blogs & Technical Insights - PetaBytz Technologies"
        description="Explore in-depth engineering articles, cloud architecture blueprints, enterprise AI use cases, and modern ITSM best practices from PetaBytz specialists."
      />

      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 rounded-full bg-sky-200/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200 text-[#E58A1F] text-xs font-bold font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ENTERPRISE ENGINEERING & INSIGHTS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-[#08101E] tracking-tight leading-[1.12]">
              PetaBytz <span className="text-[#E58A1F] italic font-serif font-normal">Blogs & Insights</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Stay ahead with architectural blueprints, cloud transformation guides, enterprise AI strategies, and modern operational playbooks.
            </p>
          </div>

          {/* Search Bar & Category Filters */}
          <div className="mt-10 space-y-4">
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles by topic, keyword, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E58A1F]/30 focus:border-[#E58A1F] shadow-sm transition"
              />
            </div>

            {/* Horizontal Categories Scroll */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-[#08101E] text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200/70 text-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Highlight */}
      {selectedCategory === 'All' && !searchQuery && featuredBlog && (
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#E58A1F] uppercase font-mono mb-4">
              ★ FEATURED ARTICLE
            </div>
            <div 
              onClick={() => setActiveBlogModal(featuredBlog)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px] overflow-hidden">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = featuredBlog.fallbackImage; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-[#0c1626] to-[#08101E] text-white">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#E58A1F]/20 text-[#E58A1F] font-bold font-mono">
                      {featuredBlog.badge}
                    </span>
                    <span className="text-slate-400 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" /> {featuredBlog.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors leading-tight">
                    {featuredBlog.title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {featuredBlog.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={featuredBlog.author.avatar} 
                      alt={featuredBlog.author.name}
                      className="w-9 h-9 rounded-full object-cover border border-amber-500/40"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">{featuredBlog.author.name}</div>
                      <div className="text-[11px] text-slate-400">{featuredBlog.date}</div>
                    </div>
                  </div>

                  <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#E58A1F] group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Cards Grid */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-[#08101E]">
              {selectedCategory === 'All' ? 'All Engineering Articles' : `${selectedCategory} Articles`}
              <span className="ml-3 text-xs font-mono font-normal text-slate-400">({filteredBlogs.length})</span>
            </h2>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/80 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-700">No articles found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                No articles matched "{searchQuery}". Try selecting another category or resetting your search.
              </p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-full bg-[#08101E] text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  onClick={() => setActiveBlogModal(blog)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-300/80 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = blog.fallbackImage; }}
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#08101E]/85 backdrop-blur-sm text-[10px] font-bold font-mono text-[#E58A1F] uppercase tracking-wider">
                        {blog.badge}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center space-x-3 text-xs text-slate-500">
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {blog.date}</span>
                        <span>•</span>
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {blog.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#08101E] group-hover:text-[#E58A1F] transition-colors leading-snug line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer metadata */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-700">{blog.author.name}</div>
                        <div className="text-[10px] text-slate-400">{blog.author.role}</div>
                      </div>
                    </div>

                    <span className="text-[#E58A1F] text-xs font-bold group-hover:translate-x-1 transition-transform flex items-center">
                      Read <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog Detail Reading Modal */}
      {activeBlogModal && (
        <div className="fixed inset-0 z-50 bg-[#08101E]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <span className="font-bold text-[#E58A1F]">{activeBlogModal.badge}</span>
                <span>•</span>
                <span>{activeBlogModal.date}</span>
                <span>•</span>
                <span>{activeBlogModal.readTime}</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition cursor-pointer"
                  title="Share link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveBlogModal(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08101E] leading-tight">
                {activeBlogModal.title}
              </h2>

              <div className="flex items-center space-x-3 py-2 border-y border-slate-100">
                <img
                  src={activeBlogModal.author.avatar}
                  alt={activeBlogModal.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-400"
                />
                <div>
                  <div className="text-sm font-bold text-[#08101E]">{activeBlogModal.author.name}</div>
                  <div className="text-xs text-slate-500">{activeBlogModal.author.role}</div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900">
                <img
                  src={activeBlogModal.image}
                  alt={activeBlogModal.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = activeBlogModal.fallbackImage; }}
                />
              </div>

              <p className="text-base text-slate-700 leading-relaxed font-medium bg-amber-50/60 p-4 rounded-xl border border-amber-200/60">
                {activeBlogModal.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeBlogModal.tags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center px-3 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-700">
                    <Tag className="w-3 h-3 mr-1.5 text-slate-400" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Enterprise architectures today require deep synergy between high-availability infrastructure and modern operational automation. At PetaBytz, our specialized engineering practices empower organizations to modernize legacy footprints with zero data loss, guaranteed SLAs, and predictable cost governance.
                </p>
                <p>
                  To explore how our architects can help customize an enterprise roadmap for your technical stack, contact our engineering team directly or schedule a technical advisory consultation.
                </p>
              </div>

              {/* Modal CTA footer */}
              <div className="p-6 rounded-2xl bg-[#08101E] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-base">Ready to modernize your infrastructure?</h4>
                  <p className="text-xs text-slate-300">Speak with a PetaBytz lead architect today.</p>
                </div>
                <Link
                  to="/contact-us"
                  onClick={() => setActiveBlogModal(null)}
                  className="px-5 py-2.5 rounded-full bg-[#E58A1F] hover:bg-amber-600 text-white text-xs font-bold transition whitespace-nowrap shadow-md"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global CTA Section */}
      <CTASection />
    </div>
  );
}
