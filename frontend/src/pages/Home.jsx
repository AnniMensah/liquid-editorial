"use client";

import { React } from 'react';
import { useNavigate, Link } from 'react-router-dom';   
import TopNav from '../components/layout/TopNav';
import Footer  from '../components/layout/Footer';
import GlassCard  from '../components/common/GlassCard';
// import  Button from '../components/common/Button';
// import  SearchBar  from '../components/common/SearchBar';
import  Rating  from '../components/common/Rating';
import { featuredMixologists, categoryData } from '../data/mockData';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface"> 
      <TopNav />
      <main className="pt-24">
        <HeroSection navigate={navigate} />
        <CategorySection categories={categoryData} navigate={navigate} />
        <FeaturedMixologistsSection mixologists={featuredMixologists} navigate={navigate} />
        <HowItWorksSection />
        {/* <TestimonialsSection testimonials={testimonials} /> */}
        <CTASection navigate={navigate} />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = ({ navigate }) => (
  <section className="relative px-8 py-16 md:py-32 overflow-hidden">
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6 z-10">
        <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-6 block">
          The Art of the Pour
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter font-headline leading-[1.1] mb-8 text-on-surface">
          Book Professional Mixologists for Your Events
        </h1>
        <p className="text-lg text-on-surface-variant max-w-lg mb-12">
          Elevate your gathering with curated cocktail experiences led by the world's most innovative bar talent.
        </p>
        
        <div className="glass-card p-2 rounded-2xl border border-outline-variant/30 flex flex-col md:flex-row items-stretch md:items-center gap-2 mb-8 max-w-xl shadow-2xl">
          <div className="flex-1 flex items-center gap-3 px-4 py-3">
            <span className="material-symbols-outlined text-primary">search</span>
            <input 
              type="text" 
              placeholder="Search by city or cocktail style..." 
              className="bg-transparent border-none focus:ring-0 w-full text-sm font-medium text-on-surface"
              onClick={() => navigate('/mixologists')}
            />
          </div>
          <Button 
            variant="primaryGradient" 
            onClick={() => navigate('/mixologists')}
            size="lg"
            className="rounded-xl"
          >
            Find Talent
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Quick Links:</p>
          <Link to="/mixologists" className="text-sm font-bold text-primary hover:underline underline-offset-4">Top Rated</Link>
          <span className="text-outline-variant">•</span>
          <Link to="/mixologists" className="text-sm font-bold text-primary hover:underline underline-offset-4">New York</Link>
          <span className="text-outline-variant">•</span>
          <Link to="/mixologists" className="text-sm font-bold text-primary hover:underline underline-offset-4">London</Link>
        </div>
      </div>
      
      <div className="lg:col-span-6 relative h-[500px] md:h-[700px]">
        <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaFXB-YHqzFOWJ04ortoi3VUaY3aImwlOdX2mYcFvru1dNjns2HNC2nSe8pJomjdrh1CQTJNZuD1Nurt9Le9R-pXRKWH6vfhHMGN8VgSgdN57_qCi7grTojHBV3cXZ1X1InzQIlenKuM2YwpLN4H0fqT0nz1dl46ot2Mzk4J_FIz_WBuoFzsoabejIdUFl4NtJSIHNAOCkkaNBA6bhmQXLipsMndOgQy8zYbBvhldkpyKLBDgQb89gZ25xZGfxT0WLdCOE4t5y4Kw" 
            alt="Mixologist at work"
          />
        </div>
        <GlassCard variant="elevated" className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 p-8 max-w-sm">
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
        </GlassCard>
      </div>
    </div>
  </section>
);

const CategorySection = ({ categories, navigate }) => (
  <section className="bg-surface-container-low py-24 px-8">
    <div className="max-w-screen-2xl mx-auto">
      <h3 className="text-center text-[0.75rem] tracking-widest uppercase font-bold text-on-surface-variant/60 mb-10">
        What are you planning?
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, idx) => (
          <div 
            key={idx} 
            onClick={() => navigate('/mixologists')} 
            className={`${category.bg} p-8 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:scale-105 transition-transform border border-transparent hover:border-primary/20 shadow-sm`}
          >
            <span className="material-symbols-outlined text-3xl text-primary">{category.icon}</span>
            <span className="font-bold text-on-surface">{category.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedMixologistsSection = ({ mixologists, navigate }) => (
  <section className="py-24 px-8">
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-2 block">
            Curation
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter text-on-surface">
            Featured Mixologists
          </h2>
        </div>
        <Link className="text-primary font-bold hover:underline flex items-center gap-2" to="/mixologists">
          View All Talent <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mixologists.map((mixologist) => (
          <FeaturedMixologistCard key={mixologist.id} mixologist={mixologist} navigate={navigate} />
        ))}
      </div>
    </div>
  </section>
);

const FeaturedMixologistCard = ({ mixologist, navigate }) => (
  <div 
    onClick={() => navigate(`/mixologist-detail/${mixologist.id}`)} 
    className="group bg-surface-container-lowest p-6 rounded-lg cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-[0_20px_40px_rgba(153,71,0,0.02)] border border-outline-variant/20"
  >
    <div className="relative h-64 rounded-xl overflow-hidden mb-6">
      <img 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        src={mixologist.image}
        alt={mixologist.name}
      />
      <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-bold text-on-surface">
        ⭐ {mixologist.rating}
      </div>
    </div>
    <h3 className="text-xl font-bold text-on-surface mb-1">{mixologist.name}</h3>
    <p className="text-xs text-on-surface-variant tracking-widest uppercase mb-4">{mixologist.role}</p>
    <Button variant="outline" fullWidth size="sm">
      Book Now
    </Button>
  </div>
);

const HowItWorksSection = () => {
  const steps = [
    {
      icon: 'search',
      title: 'Browse Talent',
      description: 'Explore our curated list of professional mixologists'
    },
    {
      icon: 'calendar_month',
      title: 'Select & Book',
      description: 'Choose your date and package that fits your event'
    },
    {
      icon: 'local_bar',
      title: 'Enjoy Experience',
      description: 'Sit back and enjoy world-class cocktail craftsmanship'
    },
    {
      icon: 'star',
      title: 'Rate & Review',
      description: 'Share your experience to help the community'
    }
  ];

  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-2 block">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter text-on-surface">
            How It Works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-20 h-20 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl text-primary">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">{step.title}</h3>
              <p className="text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = ({ testimonials }) => (
  <section className="py-24 px-8 bg-surface-container-low">
    <div className="max-w-screen-2xl mx-auto">
      <div className="text-center mb-16">
        <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-2 block">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter text-on-surface">
          What Our Clients Say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <GlassCard key={idx} variant="default" className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-on-surface">{testimonial.name}</h4>
                <Rating value={testimonial.rating} size="sm" />
              </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed">"{testimonial.comment}"</p>
            <p className="text-sm text-primary mt-4">{testimonial.event}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const BlogSection = ({ posts }) => (
  <section className="py-24 px-8 bg-surface">
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-2 block">
            From Our Blog
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter text-on-surface">
            Liquid Insights
          </h2>
        </div>
        <Link to="/blog" className="text-primary font-bold hover:underline flex items-center gap-2">
          Read All Articles <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="h-64 rounded-xl overflow-hidden mb-6">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <p className="text-xs text-primary font-bold uppercase tracking-wider mb-3">{post.category}</p>
            <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-on-surface-variant">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = ({ navigate }) => (
  <section className="py-24 px-8 bg-gradient-to-r from-primary to-primary-container">
    <div className="max-w-screen-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter text-on-primary mb-6">
        Ready to Elevate Your Event?
      </h2>
      <p className="text-on-primary text-lg mb-12 max-w-2xl mx-auto">
        Join hundreds of satisfied clients who've transformed their gatherings into unforgettable experiences.
      </p>
      <Button 
        variant="outline" 
        onClick={() => navigate('/mixologists')}
        size="lg"
        className="bg-transparent border-on-primary text-on-primary hover:bg-on-primary hover:text-primary"
      >
        Book Your Mixologist Today
      </Button>
    </div>
  </section>
);

export default HomePage;