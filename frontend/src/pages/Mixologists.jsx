import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const Mixologists = () => {
  const [mixologists, setMixologists] = useState([]);

  useEffect(() => {
    const fetchMixologists = async () => {
      try {
        const response = await api.get('/mixologists');
        setMixologists(response.data);
      } catch (error) {
        console.error('Failed to fetch mixologists', error);
      }
    };
    fetchMixologists();
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(153,71,0,0.04)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-zinc-900 font-headline">
            <Link to="/">The Liquid Editorial</Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-orange-600 font-semibold border-b-2 border-orange-500 pb-1 font-body" to="/mixologists">Mixologists</Link>
            <a className="text-zinc-600 hover:text-zinc-900 transition-colors font-body" href="#">Experiences</a>
            <a className="text-zinc-600 hover:text-zinc-900 transition-colors font-body" href="#">Venues</a>
            <a className="text-zinc-600 hover:text-zinc-900 transition-colors font-body" href="#">Journal</a>
          </div>
          <button className="bg-gradient-to-br from-primary-container to-primary text-on-primary px-6 py-2.5 rounded-full font-semibold hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20">
            Book a Mixologist
          </button>
        </div>
      </nav>
      <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <header className="mb-16">
          <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-4 block">World-Class Talent</span>
          <h1 className="text-6xl md:text-7xl font-headline font-bold tracking-tighter mb-6 text-on-surface">Curated Mixologists</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl font-body leading-relaxed">
            Discover the architects of liquid art. From avant-garde chemists to classic spirits masters, find the perfect artist for your next event.
          </p>
        </header>
        {/* Search & Filter Bar */}
        <section className="mb-12 sticky top-24 z-40">
          <div className="glass-card rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 shadow-xl shadow-zinc-200/50">
            <div className="relative flex-1 w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-12 pr-4 py-3 bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline/60 font-body" placeholder="Search by name, cocktail, or style..." type="text" />
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-center gap-3 w-full md:w-auto">
              {/* Location Filter */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant/10 cursor-pointer hover:bg-surface-container-high transition-colors group">
                <span className="material-symbols-outlined text-[20px] text-outline group-hover:text-primary">location_on</span>
                <span className="text-sm font-medium">New York, NY</span>
                <span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
              </div>
              {/* Price Filter */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant/10 cursor-pointer hover:bg-surface-container-high transition-colors group">
                <span className="material-symbols-outlined text-[20px] text-outline group-hover:text-primary">payments</span>
                <span className="text-sm font-medium">Price Range</span>
                <span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
              </div>
              {/* Rating Filter */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant/10 cursor-pointer hover:bg-surface-container-high transition-colors group">
                <span className="material-symbols-outlined text-[20px] text-outline group-hover:text-primary">star</span>
                <span className="text-sm font-medium">4.5+ Rating</span>
              </div>
              <button className="bg-on-surface text-surface px-6 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                Apply Filters
              </button>
            </div>
          </div>
        </section>
        {/* Mixologist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mixologists.map((mixologist) => (
            <div key={mixologist._id} className="group relative bg-surface-container-lowest rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_20px_40px_rgba(153,71,0,0.04)] hover:shadow-2xl hover:shadow-primary/5">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Professional mixologist ${mixologist.user.name}`} src="https://via.placeholder.com/400x500?text=Mixologist" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-widest uppercase text-on-surface shadow-sm">{mixologist.specialties[0] || 'Specialist'}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-on-surface mb-1">{mixologist.user.name}</h3>
                    <div className="flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-sm font-bold text-on-surface">{mixologist.rating.toFixed(1)}</span>
                      <span className="text-sm text-on-surface-variant font-medium">({mixologist.reviews?.length || 0} reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-[0.65rem] uppercase tracking-widest font-bold text-outline mb-1">Starting at</span>
                    <span className="text-xl font-bold text-primary font-headline">${mixologist.rate}/hr</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {mixologist.specialties.slice(0, 2).map((specialty, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[0.7rem] font-bold uppercase tracking-wider">{specialty}</span>
                  ))}
                </div>
                <Link to={`/profile/${mixologist._id}`} className="w-full py-4 rounded-xl border border-outline-variant/30 font-bold uppercase tracking-widest text-[0.75rem] hover:bg-on-surface hover:text-surface transition-all duration-300 block text-center">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Load More Section */}
        <div className="mt-24 text-center">
          <button className="group relative px-10 py-5 bg-white border border-outline-variant/20 rounded-full font-headline font-bold text-on-surface overflow-hidden transition-all hover:border-primary">
            <span className="relative z-10">Load More Artists</span>
            <div className="absolute inset-0 bg-primary-container/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </main>
      {/* Editorial Footer */}
      <footer className="bg-zinc-950 dark:bg-black w-full pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
          <div className="md:col-span-1">
            <div className="text-2xl font-black text-white font-headline mb-6">The Liquid Editorial</div>
            <p className="text-zinc-500 font-body light leading-relaxed text-sm">
              Redefining the boundaries of hospitality through the lens of luxury mixology and storytelling.
            </p>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-[0.75rem] tracking-widest uppercase font-bold text-orange-500 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">About</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Careers</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-[0.75rem] tracking-widest uppercase font-bold text-orange-500 mb-6">Social</h4>
            <ul className="space-y-4">
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Instagram</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">LinkedIn</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Vimeo</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-[0.75rem] tracking-widest uppercase font-bold text-orange-500 mb-6">Join the Journal</h4>
            <div className="relative group">
              <input className="w-full bg-zinc-900 border-none rounded-xl py-3 px-4 text-white text-sm focus:ring-1 focus:ring-orange-500 placeholder:text-zinc-600" placeholder="Email Address" type="email" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-400">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[0.75rem] font-body">© 2024 The Liquid Editorial. High-end mixology redefined.</p>
          <div className="flex gap-8">
            <a className="text-zinc-600 hover:text-white text-[0.75rem] transition-colors" href="#">Terms</a>
            <a className="text-zinc-600 hover:text-white text-[0.75rem] transition-colors" href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Mixologists;