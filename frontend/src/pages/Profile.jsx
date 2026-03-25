import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

const Profile = () => {
  const { id } = useParams();
  const [mixologist, setMixologist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMixologist = async () => {
      try {
        const response = await api.get(`/mixologists/${id}`);
        setMixologist(response.data);
      } catch (error) {
        console.error('Failed to fetch mixologist', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMixologist();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!mixologist) {
    return <div>Mixologist not found</div>;
  }

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(153,71,0,0.04)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 font-headline">The Liquid Editorial</Link>
          <div className="hidden md:flex items-center gap-10">
            <Link to="/mixologists" className="text-orange-600 dark:text-orange-400 font-semibold border-b-2 border-orange-500 pb-1 font-body">Mixologists</Link>
            <a className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-body" href="#">Experiences</a>
            <a className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-body" href="#">Venues</a>
            <a className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-body" href="#">Journal</a>
          </div>
          <button className="primary-gradient text-on-primary px-8 py-3 rounded-full font-bold hover:scale-[1.02] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] active:scale-95">
            Book a Mixologist
          </button>
        </div>
      </nav>
      <main className="pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative px-8 max-w-screen-2xl mx-auto h-[819px] min-h-[600px] mb-24">
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <img alt="Mixologist preparing a complex cocktail" className="w-full h-full object-cover" src="https://via.placeholder.com/1200x800?text=Mixologist+Hero" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            {/* Glassmorphic Info Card */}
            <div className="absolute bottom-12 left-12 glass-card p-10 rounded-xl max-w-xl border border-white/10 shadow-2xl">
              <span className="text-[0.75rem] tracking-widest uppercase font-bold text-orange-500 mb-4 block font-label">{mixologist.specialties[0] || 'Mixologist'}</span>
              <h1 className="text-5xl font-bold tracking-tighter font-headline mb-4 text-zinc-900 dark:text-white">{mixologist.user.name}</h1>
              <div className="flex items-center gap-6 text-zinc-700 dark:text-zinc-200">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold">{mixologist.rating.toFixed(1)}</span>
                  <span className="opacity-60 text-sm">({mixologist.reviews?.length || 0} Reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500">location_on</span>
                  <span className="font-medium">{mixologist.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Bio & Experience */}
        <section className="px-8 max-w-screen-2xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tighter font-headline mb-8">The Craft Philosophy</h2>
            <div className="flex flex-wrap gap-2">
              {mixologist.specialties.map((specialty, index) => (
                <span key={index} className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-[0.75rem] font-bold tracking-wider uppercase font-label">{specialty}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl leading-relaxed text-on-surface-variant font-light mb-8">
              {mixologist.bio}
            </p>
            <p className="text-lg leading-relaxed text-zinc-500 font-light max-w-3xl">
              With {mixologist.experience} years of experience, this mixologist brings expertise in {mixologist.specialties.join(', ')}.
            </p>
          </div>
        </section>
        {/* Packages */}
        <section className="bg-surface-container-low py-24 px-8 mb-32">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <span className="text-[0.75rem] tracking-widest uppercase font-bold text-orange-500 block mb-2 font-label">Curated Offerings</span>
              <h2 className="text-4xl font-bold tracking-tighter font-headline">Service Packages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Package 1 */}
              <div className="glass-card p-10 rounded-xl border border-white/20 shadow-lg flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-2xl font-bold font-headline mb-4">The Atelier Session</h3>
                <p className="text-on-surface-variant mb-8 flex-grow">Intimate gathering for up to 10 guests. Features a 3-course bespoke cocktail flight with paired artisanal garnishes.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-zinc-900">${mixologist.rate * 3}</span>
                  <span className="text-zinc-500 ml-2">/ session</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span> 3 Signature Cocktails
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span> Premium Ice Program
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span> 2 Hours of Service
                  </li>
                </ul>
                <button className="w-full py-4 border-2 border-orange-500 text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-colors">Select Package</button>
              </div>
              {/* Package 2 */}
              <div className="bg-zinc-900 p-10 rounded-xl shadow-2xl flex flex-col h-full text-white relative overflow-hidden transform md:-translate-y-4">
                <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-1 rounded-full text-[0.65rem] font-black uppercase tracking-widest">Most Requested</div>
                <h3 className="text-2xl font-bold font-headline mb-4">The Editorial Soirée</h3>
                <p className="text-zinc-400 mb-8 flex-grow">Full bar takeover for corporate events or private galas. Includes custom menu development and staff management.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">${mixologist.rate * 8}</span>
                  <span className="text-zinc-500 ml-2">/ event</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Unlimited Menu Items
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Nitrogen Infusion Bar
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Custom Menu Calligraphy
                  </li>
                </ul>
                <button className="w-full py-4 primary-gradient text-white font-bold rounded-full">Reserve Prime Date</button>
              </div>
              {/* Package 3 */}
              <div className="glass-card p-10 rounded-xl border border-white/20 shadow-lg flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-2xl font-bold font-headline mb-4">Vintage Archives</h3>
                <p className="text-on-surface-variant mb-8 flex-grow">A deep dive into pre-prohibition spirits. Rare bottle sourcing and historical cocktail education for connoisseurs.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">${mixologist.rate * 4}</span>
                  <span className="text-zinc-500 ml-2">/ session</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span> Antique Glassware Provided
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span> Rare Spirit Tasting
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-sm">check_circle</span> Formal Presentation
                  </li>
                </ul>
                <button className="w-full py-4 border-2 border-orange-500 text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-colors">Select Package</button>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery */}
        <section className="px-8 max-w-screen-2xl mx-auto mb-32">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <span className="text-[0.75rem] tracking-widest uppercase font-bold text-orange-500 block mb-2 font-label">Visual Journal</span>
              <h2 className="text-4xl font-bold tracking-tighter font-headline">Past Creations</h2>
            </div>
            <button className="text-zinc-900 font-bold border-b-2 border-zinc-900 pb-1 flex items-center gap-2 group">
              View full gallery
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
            <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden shadow-lg">
              <img alt="Dark cocktail with orange peel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://via.placeholder.com/600x800?text=Cocktail+1" />
            </div>
            <div className="md:col-span-1 md:row-span-1 rounded-xl overflow-hidden shadow-lg">
              <img alt="Mixology equipment and crystal glass" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://via.placeholder.com/300x400?text=Equipment" />
            </div>
            <div className="md:col-span-1 md:row-span-1 rounded-xl overflow-hidden shadow-lg">
              <img alt="Bright summer drink" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://via.placeholder.com/300x400?text=Bright+Drink" />
            </div>
            <div className="md:col-span-2 md:row-span-1 rounded-xl overflow-hidden shadow-lg">
              <img alt="Cocktail bar atmosphere" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://via.placeholder.com/600x400?text=Bar+Atmosphere" />
            </div>
          </div>
        </section>
        {/* Contact/Inquiry */}
        <section className="px-8 max-w-screen-2xl mx-auto mb-24">
          <div className="bg-surface-container-highest rounded-xl p-16 flex flex-col md:flex-row items-center gap-12 border border-outline-variant/10">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold tracking-tighter font-headline mb-4">Inquire About Your Event</h3>
              <p className="text-on-surface-variant text-lg">For international bookings and residency inquiries, please provide details about your vision.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="space-y-6">
                <div className="relative">
                  <input className="w-full bg-transparent border-0 border-b border-outline p-0 py-3 focus:ring-0 focus:border-primary-container transition-all placeholder:text-zinc-400" placeholder="Full Name" type="text" />
                </div>
                <div className="relative">
                  <input className="w-full bg-transparent border-0 border-b border-outline p-0 py-3 focus:ring-0 focus:border-primary-container transition-all placeholder:text-zinc-400" placeholder="Email Address" type="email" />
                </div>
                <button className="primary-gradient text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-[1.02] transition-transform" type="submit">Send Inquiry</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-t border-white/10 py-6 px-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="hidden md:flex items-center gap-6">
            <img alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-orange-500" src="https://via.placeholder.com/48x48?text=Profile" />
            <div>
              <p className="font-bold text-lg font-headline">{mixologist.user.name}</p>
              <p className="text-xs text-zinc-500 font-label tracking-widest uppercase">Next Available: Oct 12, 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-8 w-full md:w-auto">
            <div className="hidden sm:block">
              <p className="text-xs font-label uppercase tracking-widest text-zinc-500">Starting at</p>
              <p className="text-2xl font-bold text-zinc-900">${mixologist.rate * 3}.00</p>
            </div>
            <button className="flex-grow md:flex-none primary-gradient text-white px-12 py-4 rounded-full font-bold shadow-2xl hover:scale-[1.02] transition-transform active:scale-95 text-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-zinc-950 dark:bg-black w-full pt-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
          <div className="md:col-span-1">
            <div className="text-2xl font-black text-white font-headline mb-6">The Liquid Editorial</div>
            <p className="text-zinc-500 font-body light leading-relaxed text-sm">
              © 2024 The Liquid Editorial. High-end mixology redefined.
            </p>
          </div>
          <div>
            <h4 className="text-[0.75rem] tracking-widest uppercase font-bold text-orange-500 mb-6 font-label">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-zinc-500 hover:text-orange-400 transition-colors text-sm font-body">Home</Link></li>
              <li><Link to="/mixologists" className="text-zinc-500 hover:text-orange-400 transition-colors text-sm font-body">Mixologists</Link></li>
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm font-body" href="#">Experiences</a></li>
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm font-body" href="#">Journal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[0.75rem] tracking-widest uppercase font-bold text-orange-500 mb-6 font-label">Connect</h4>
            <ul className="space-y-4">
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm font-body" href="#">Instagram</a></li>
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm font-body" href="#">Careers</a></li>
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm font-body" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[0.75rem] tracking-widest uppercase font-bold text-orange-500 mb-6 font-label">Legal</h4>
            <ul className="space-y-4">
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm font-body" href="#">Terms</a></li>
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm font-body" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;