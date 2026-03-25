import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-surface font-body text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(153,71,0,0.04)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 font-headline">
            The Liquid Editorial
          </div>
          <div className="hidden md:flex items-center gap-10">
            <Link className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" to="/mixologists">Mixologists</Link>
            <a className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Experiences</a>
            <a className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Venues</a>
            <a className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Journal</a>
          </div>
          <button className="btn-primary-gradient text-on-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-[1.02] transition-transform duration-300 active:scale-95">
            Book a Mixologist
          </button>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-8 py-16 md:py-32 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 z-10">
              <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-6 block">The Art of the Pour</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter font-headline leading-[1.1] mb-8">
                Book Professional Mixologists for Your Events
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg mb-12">
                Elevate your gathering with curated cocktail experiences led by the world's most innovative bar talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link className="btn-primary-gradient text-on-primary px-10 py-5 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform duration-300 shadow-xl inline-block text-center" to="/mixologists">
                  Find a Mixologist
                </Link>
                <button className="bg-surface-container-lowest glass-card ghost-border px-10 py-5 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform duration-300">
                  View Experiences
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[500px] md:h-[700px]">
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="High-end cocktail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaFXB-YHqzFOWJ04ortoi3VUaY3aImwlOdX2mYcFvru1dNjns2HNC2nSe8pJomjdrh1CQTJNZuD1Nurt9Le9R-pXRKWH6vfhHMGN8VgSgdN57_qCi7grTojHBV3cXZ1X1InzQIlenKuM2YwpLN4H0fqT0nz1dl46ot2Mzk4J_FIz_WBuoFzsoabejIdUFl4NtJSIHNAOCkkaNBA6bhmQXLipsMndOgQy8zYbBvhldkpyKLBDgQb89gZ25xZGfxT0WLdCOE4t5y4Kw" />
              </div>
              {/* Glassmorphic Overlay */}
              <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 glass-card p-8 rounded-lg shadow-2xl max-w-sm ghost-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary-fixed">local_bar</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Signature Service</h4>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider">Premium Ingredients Included</p>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  "Every event is a unique canvas. We don't just serve drinks; we craft memories through liquid art."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-2 block">Curation</span>
                <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">Featured Mixologists</h2>
              </div>
              <Link className="text-primary font-bold hover:underline flex items-center gap-2" to="/mixologists">
                View All Talent <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Simplified Mixologist Card (Repeatable) */}
              {[
                { name: "Julian Vance", role: "Aromatic Specialist", rating: "4.9", tags: ["Bitters", "Smoked"], img: "1" },
                { name: "Sasha Chen", role: "Molecular Alchemist", rating: "5.0", tags: ["Foams", "Tinctures"], img: "2" },
                { name: "Marco Rossi", role: "Aperitivo Master", rating: "4.8", tags: ["Vermouth", "Classics"], img: "3" },
                { name: "Elena Moretti", role: "Botanical Designer", rating: "4.9", tags: ["Gin Focus", "Floral"], img: "4" }
              ].map((pro, index) => (
                <div key={index} className="group bg-surface-container-lowest p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 shadow-sm">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={`http://googleusercontent.com/profile/picture/${pro.img}`} alt={pro.name} />
                    <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-bold">⭐ {pro.rating}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{pro.name}</h3>
                  <p className="text-xs text-on-surface-variant tracking-widest uppercase mb-4">{pro.role}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pro.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-secondary-container rounded-full text-[10px] font-bold">{tag}</span>
                    ))}
                  </div>
                  <button className="w-full py-3 rounded-xl border border-outline-variant font-bold hover:bg-on-surface hover:text-surface transition-colors">Book Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-950 pt-24 pb-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto text-sm text-zinc-500">
          <div className="md:col-span-1">
            <div className="text-2xl font-black text-white mb-6">The Liquid Editorial</div>
            <p>© 2024 The Liquid Editorial. High-end mixology redefined.</p>
          </div>
          {/* Footer links would go here */}
        </div>
      </footer>
    </div>
  );
};

export default Home;