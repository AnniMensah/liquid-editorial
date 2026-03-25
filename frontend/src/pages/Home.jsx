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
          <Link className="btn-primary-gradient text-on-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-[1.02] transition-transform duration-300 active:scale-95" to="/mixologists">
            Book a Mixologist
          </Link>
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
                <Link className="btn-primary-gradient text-on-primary px-10 py-5 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform duration-300 shadow-xl inline-block text-center" to="/mixologists">Find a Mixologist</Link>
                <button className="bg-surface-container-lowest glass-card ghost-border px-10 py-5 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform duration-300">
                  View Experiences
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 relative h-[500px] md:h-[700px]">
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="High-end cocktail being poured into a crystal glass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaFXB-YHqzFOWJ04ortoi3VUaY3aImwlOdX2mYcFvru1dNjns2HNC2nSe8pJomjdrh1CQTJNZuD1Nurt9Le9R-pXRKWH6vfhHMGN8VgSgdN57_qCi7grTojHBV3cXZ1X1InzQIlenKuM2YwpLN4H0fqT0nz1dl46ot2Mzk4J_FIz_WBuoFzsoabejIdUFl4NtJSIHNAOCkkaNBA6bhmQXLipsMndOgQy8zYbBvhldkpyKLBDgQb89gZ25xZGfxT0WLdCOE4t5y4Kw" />
              </div>
              {/* Glassmorphic Card Overlay */}
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
        {/* Featured Mixologists */}
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
              {/* Mixologist Card 1 */}
              <div className="group bg-surface-container-lowest p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_20px_40px_rgba(153,71,0,0.02)]">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Professional male mixologist shaking a cocktail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt3VOO2chjYz5iJEeYzW85c9-bAdycgGbCDCfL9OgXjUDUK5ZCir5vTQkCIup1-B4ytkIOVfK58jpRD-65FLEePnTV_oK4fcrNZg1iopL91-Jv3dMzYFqC6KtXJGpiLblGGO2gW0luEgJxH_Vlm5ZtQ766yQKwd8dhhl9c_0_0Eh-T6Q3P_rJ3MVPByYqyr6-B7RLmT6xAIe5vNl1M4y6TbkGUQ8sToHx4QR-JhO-LBj4_HYpgejXJC3eTd2k8k76LgdpeKCB-Qts" />
                  <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-bold ghost-border">
                    ⭐ 4.9
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">Julian Vance</h3>
                <p className="text-xs text-on-surface-variant tracking-widest uppercase mb-4">Aromatic Specialist</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary-container rounded-full text-[10px] font-bold">Bitters</span>
                  <span className="px-3 py-1 bg-secondary-container rounded-full text-[10px] font-bold">Smoked Spirits</span>
                </div>
                <Link className="w-full py-3 rounded-xl border border-outline-variant font-bold hover:bg-on-surface hover:text-surface transition-colors inline-block text-center" to="/mixologists">Book Now</Link>
              </div>
              {/* Mixologist Card 2 */}
              <div className="group bg-surface-container-lowest p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_20px_40px_rgba(153,71,0,0.02)]">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Female mixologist garnishing a sophisticated drink" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Bqii_-M8wYewpvJ4geXEQ5DFV0WbHbkggR7nu0EbvXZbjBPYnQE8pxrU6Ado-UQKbesulgR_edpQ3RbrzhRBYFC3zK-A1ueImNliwiMqdB9Fi8_3qzgulef7dq28DAe4IQcZFcsm_7gjC3tLPYLtpm-nrJugufO-Zd4cH_m_rgJmoFIps2LtoyHnlJawtCcOUpODIZwU3Yr4gO-C-H8YYYkCwH7MGXtHNBYLsnmKK0AjaV8DSnHOfi2S5aOLP687In8GOpFO3oY" />
                  <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-bold ghost-border">
                    ⭐ 5.0
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">Sasha Chen</h3>
                <p className="text-xs text-on-surface-variant tracking-widest uppercase mb-4">Molecular Alchemist</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary-container rounded-full text-[10px] font-bold">Foams</span>
                  <span className="px-3 py-1 bg-secondary-container rounded-full text-[10px] font-bold">Tinctures</span>
                </div>
                <Link className="w-full py-3 rounded-xl border border-outline-variant font-bold hover:bg-on-surface hover:text-surface transition-colors inline-block text-center" to="/mixologists">Book Now</Link>
              </div>
              {/* Mixologist Card 3 */}
              <div className="group bg-surface-container-lowest p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_20px_40px_rgba(153,71,0,0.02)]">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Mixologist pouring a bright orange drink" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6mQyD-c3qc7jy7TSLexQFPz2y84DzzRfAiLpqaMkqslFL9eo_di-z6Ak8bbTz3qRcbEdPJXA_SJhRGnwYhXn6MPnciBKrmeERJjrNzgFSfFBOwgn9S6WvUoEZ0ehtY0jkP1F45aRE3vASYvGsA5cOwFLfyy69ZjcmKGAtytXjNv1hyoZruF_lNvstMEa0LZ30FVrmbXPa7cAEELFYlcRlZ3S3PR0gyZJO55ZqlCwophNjQfsO8hpoYYhMwSAf7a21PD8THVpwgxk" />
                  <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-bold ghost-border">
                    ⭐ 4.8
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">Marco Rossi</h3>
                <p className="text-xs text-on-surface-variant tracking-widest uppercase mb-4">Aperitivo Master</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary-container rounded-full text-[10px] font-bold">Vermouth</span>
                  <span className="px-3 py-1 bg-secondary-container rounded-full text-[10px] font-bold">Classics</span>
                </div>
                <Link className="w-full py-3 rounded-xl border border-outline-variant font-bold hover:bg-on-surface hover:text-surface transition-colors inline-block text-center" to="/mixologists">Book Now</Link>
              </div>
              {/* Mixologist Card 4 */}
              <div className="group bg-surface-container-lowest p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_20px_40px_rgba(153,71,0,0.02)]">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Close up of cocktail hands stir" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRkf9D1Je67LK39Fh8F3PJO2afcDxTMfEXrS8weMnMWHiXKMYWxt7a0kqZ55mIj2V8r1oEP0Cx1QTX6pn1-T-NjDjPMM-1nQqZCOrTR2rPkXFbxgnKa1Zk8sA65keNFDsz_XV7ZMX5HsjlaPy04Fq3m2SyGtPtuhrMoCYrQ0nacIJIBUyYtxX7bS00UwJS9swQBHKCkR1kybmfvn9h-xf9aMacD1W5jMVjyQOVRul4ElwPhHlmY_RUFqaqB99rdd4pNZUvm6SeOV8" />
                  <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-bold ghost-border">
                    ⭐ 4.9
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">Elena Moretti</h3>
                <p className="text-xs text-on-surface-variant tracking-widest uppercase mb-4">Botanical Designer</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary-container rounded-full text-[10px] font-bold">Gin Focus</span>
                  <span className="px-3 py-1 bg-secondary-container rounded-full text-[10px] font-bold">Floral</span>
                </div>
                <Link className="w-full py-3 rounded-xl border border-outline-variant font-bold hover:bg-on-surface hover:text-surface transition-colors inline-block text-center" to="/mixologists">Book Now</Link>
              </div>
            </div>
          </div>
        </section>
        {/* How it Works */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-screen-xl mx-auto text-center">
            <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-2 block">Seamless Experience</span>
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter mb-20">Three Steps to Perfection</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mb-8 relative z-10">
                  <span className="material-symbols-outlined text-primary text-3xl">search</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Search</h3>
                <p className="text-on-surface-variant leading-relaxed">Filter by specialty, availability, and event type to find your ideal match.</p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mb-8 relative z-10">
                  <span className="material-symbols-outlined text-primary text-3xl">event_available</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Select</h3>
                <p className="text-on-surface-variant leading-relaxed">Book your date and collaborate on a custom cocktail menu with your artist.</p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mb-8 relative z-10">
                  <span className="material-symbols-outlined text-primary text-3xl">liquor</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sip</h3>
                <p className="text-on-surface-variant leading-relaxed">Sit back and enjoy while a world-class professional handles every detail.</p>
              </div>
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-outline-variant/30"></div>
            </div>
          </div>
        </section>
        {/* Popular Packages */}
        <section className="bg-zinc-950 py-32 px-8 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-20">
              <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-orange-400 mb-2 block">Investment</span>
              <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter text-white">Choose Your Experience</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Classic Package */}
              <div className="bg-zinc-900/50 backdrop-blur-xl p-10 rounded-xl border border-white/5 flex flex-col hover:border-white/20 transition-all">
                <h3 className="text-2xl font-bold text-white mb-2">Classic</h3>
                <p className="text-zinc-400 mb-8">Essential professional service</p>
                <div className="text-4xl font-bold text-white mb-8">$250 <span className="text-lg font-normal text-zinc-500">/ night</span></div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="material-symbols-outlined text-orange-400 text-sm">check</span>
                    4 Hours of Service
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="material-symbols-outlined text-orange-400 text-sm">check</span>
                    3 Signature Cocktails
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="material-symbols-outlined text-orange-400 text-sm">check</span>
                    Basic Barware Included
                  </li>
                </ul>
                <Link className="w-full py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-all inline-block text-center" to="/mixologists">Select Classic</Link>
              </div>
              {/* Premium Package */}
              <div className="bg-white/10 backdrop-blur-2xl p-10 rounded-xl border border-orange-500/30 flex flex-col relative scale-105 shadow-2xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
                <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                <p className="text-zinc-300 mb-8">The Liquid Editorial standard</p>
                <div className="text-4xl font-bold text-white mb-8">$450 <span className="text-lg font-normal text-zinc-400">/ night</span></div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-center gap-3 text-white">
                    <span className="material-symbols-outlined text-orange-400 text-sm">check</span>
                    6 Hours of Service
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span className="material-symbols-outlined text-orange-400 text-sm">check</span>
                    5 Custom Cocktails
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span className="material-symbols-outlined text-orange-400 text-sm">check</span>
                    Premium Glassware Rental
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span className="material-symbols-outlined text-orange-400 text-sm">check</span>
                    Artisanal Ice Program
                  </li>
                </ul>
                <Link className="w-full py-4 rounded-xl btn-primary-gradient text-white font-bold hover:scale-[1.02] transition-all inline-block text-center" to="/mixologists">Select Premium</Link>
              </div>
              {/* Luxury Package */}
              <div className="bg-zinc-900/50 backdrop-blur-xl p-10 rounded-xl border border-white/5 flex flex-col hover:border-white/20 transition-all">
                <h3 className="text-2xl font-bold text-white mb-2">Luxury</h3>
                <p className="text-zinc-400 mb-8">Unrivaled mixology experience</p>
                <div className="text-4xl font-bold text-white mb-8">$800+ <span className="text-lg font-normal text-zinc-500">/ night</span></div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="material-symbols-outlined text-orange-400 text-sm">check</span>
                    Unlimited Service Time
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="material-symbols-outlined text-orange-400 text-sm">check</span>
                    Molecular Mixology Menu
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="material-symbols-outlined text-orange-400 text-sm">check</span>
                    Rare Spirit Selection
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="material-symbols-outlined text-orange-400 text-sm">check</span>
                    2 Mixologists + Bar Back
                  </li>
                </ul>
                <Link className="w-full py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-all inline-block text-center" to="/mixologists">Select Luxury</Link>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-2 block">Guest Voices</span>
                <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter mb-8 leading-tight">Shared Moments of Excellence</h2>
                <p className="text-on-surface-variant mb-10">We believe in the power of the pour. Here is what our clients have to say about their bespoke experiences.</p>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-highest transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-highest transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-surface-container-lowest p-10 rounded-lg shadow-[0_20px_40px_rgba(153,71,0,0.02)]">
                    <div className="text-orange-500 mb-6">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                    </div>
                    <p className="text-lg mb-8 italic">"The Liquid Editorial transformed my birthday party into a sophisticated gala. Julian's smoked cocktails were the talk of the night."</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
                        <img alt="Client portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPkRw7f8tw2MjHTaoIfakUJpIg_mzpUHmYgw7ohW2C_8mTO-APHXHMmaV58J0P7_uR_ZmvCJYE9N7j-GX6Ywpj_eqtubmlDqSd2M9xCysxjSyzbjvf0AO1jLmvaCpd6baZnRx1lztzh73D9lXyeebwlkD46LLkg3qGS8IEWNvE-DwgbioA9NmmIQwqIcH4AyzZ87kgg0pRb6gO9WUkJvWcL21j7S50FYV2FjrpLbSnqCIRe82oLtGCI9D9c6U9SKL2RmZAsLgnsQ0" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Sarah Jenkins</p>
                        <p className="text-xs text-on-surface-variant">Private Client, NYC</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-10 rounded-lg shadow-[0_20px_40px_rgba(153,71,0,0.02)]">
                    <div className="text-orange-500 mb-6">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                    </div>
                    <p className="text-lg mb-8 italic">"Incredible attention to detail. The custom menu pairing with our dinner course was flawless. Highly professional service."</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
                        <img alt="Client portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn0epQkRp8ll6df989udJc5fkyD6iiqW2HWbUn00kycsWSMIfSualP3iA_sEzRCxox__Kb0A7awvq7bVRPpxGkbfm2aLc1iz4AyFwIw9L4He1pVXt1AIVATblOETYT5WFMn_JH1WRFCi2iHffmbrXLfhJwepten5TAayDxDCy0P74BaUKHuand-h5UK-TXsHZ8Lu9wmQ5JpaF0rWlSHf7-JUPzQcUKT1GjSovH_-m0UOFqLea8qyU5RnrW1kvVHEsxxy-MWy_iMaI" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Michael Thorne</p>
                        <p className="text-xs text-on-surface-variant">Event Planner, LA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer Section */}
      <footer className="bg-zinc-950 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
          <div className="md:col-span-1">
            <div className="text-2xl font-black text-white mb-6">The Liquid Editorial</div>
            <p className="text-zinc-500 text-sm font-body light leading-relaxed">
              © 2024 The Liquid Editorial. High-end mixology redefined.
            </p>
          </div>
          <div>
            <h5 className="text-[0.75rem] tracking-widest uppercase font-bold text-white mb-6">Company</h5>
            <ul className="space-y-4">
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm" href="#">About</a></li>
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm" href="#">Careers</a></li>
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[0.75rem] tracking-widest uppercase font-bold text-white mb-6">Legal</h5>
            <ul className="space-y-4">
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm" href="#">Terms</a></li>
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm" href="#">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[0.75rem] tracking-widest uppercase font-bold text-white mb-6">Follow Us</h5>
            <ul className="space-y-4">
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm" href="#">Instagram</a></li>
              <li><a className="text-zinc-500 hover:text-orange-400 transition-colors text-sm" href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;