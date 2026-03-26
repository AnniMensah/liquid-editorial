import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TopNav, Footer } from '../components/layout';
import { GlassCard, Button, Rating, Input } from '../components/common';
import { mixologistData, servicePackages, reviews } from '../data/mockData';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  const mixologist = mixologistData.find(m => m.id === parseInt(id)) || mixologistData[0];

  return (
    <div className="bg-surface">
      <TopNav />
      <main className="pt-24 pb-32">
        {/* Hero Section */}
        <HeroSection mixologist={mixologist} />
        
        {/* Content Sections */}
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            <div className="lg:col-span-2">
              <AboutSection mixologist={mixologist} />
              <SpecialtiesSection specialties={mixologist.specialties} />
              <PortfolioSection portfolio={mixologist.portfolio} />
              <ReviewsSection reviews={reviews} />
            </div>
            <div className="lg:col-span-1">
              <BookingSidebar 
                mixologist={mixologist}
                selectedPackage={selectedPackage}
                setSelectedPackage={setSelectedPackage}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                onBook={() => setShowBookingModal(true)}
              />
            </div>
          </div>
        </div>

        {/* Service Packages Section */}
        <PackagesSection 
          packages={servicePackages} 
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
        />

        {/* Booking Modal */}
        {showBookingModal && (
          <BookingModal 
            mixologist={mixologist}
            selectedPackage={selectedPackage}
            selectedDate={selectedDate}
            onClose={() => setShowBookingModal(false)}
            onConfirm={() => navigate('/book')}
          />
        )}
      </main>
      
      {/* Sticky Footer CTA */}
      <StickyFooter 
        mixologist={mixologist}
        selectedPackage={selectedPackage}
        onBook={() => setShowBookingModal(true)}
      />
      
      <Footer />
    </div>
  );
};

const HeroSection = ({ mixologist }) => (
  <section className="px-8 max-w-screen-2xl mx-auto h-[600px] mb-24 rounded-xl overflow-hidden relative">
    <img src={mixologist.heroImage} className="w-full h-full object-cover"
     alt={mixologist.name} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div className="absolute bottom-12 left-12 glass-card p-10 rounded-xl max-w-xl border border-white/10 shadow-2xl">
      <span className="text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-4 block">
        Master Mixologist
      </span>
      <h1 className="text-5xl font-bold tracking-tighter text-on-surface mb-4">{mixologist.name}</h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Rating value={mixologist.rating} size="md" />
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">location_on</span>
          <span className="font-medium text-on-surface">{mixologist.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">schedule</span>
          <span className="font-medium text-on-surface">{mixologist.experience} years exp.</span>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = ({ mixologist }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-on-surface mb-6">The Craft Philosophy</h2>
    <p className="text-xl leading-relaxed text-on-surface-variant font-light mb-8">
      {mixologist.bio}
    </p>
    <div className="flex flex-wrap gap-2">
      {mixologist.certifications.map((cert, idx) => (
        <span key={idx} className="bg-secondary-container px-4 py-1 rounded-full text-xs font-bold text-on-secondary-container">
          {cert}
        </span>
      ))}
    </div>
  </div>
);

const SpecialtiesSection = ({ specialties }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-bold text-on-surface mb-6">Signature Specialties</h3>
    <div className="grid grid-cols-2 gap-4">
      {specialties.map((specialty, idx) => (
        <div key={idx} className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-primary">local_bar</span>
          <span className="text-on-surface font-medium">{specialty}</span>
        </div>
      ))}
    </div>
  </div>
);

const PortfolioSection = ({ portfolio }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-bold text-on-surface mb-6">Portfolio</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {portfolio.map((item, idx) => (
        <div key={idx} className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group">
          <img src={item} className="w-full h-full object-cover" 
          alt={`Portfolio ${idx + 1}`} />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ReviewsSection = ({ reviews }) => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-2xl font-bold text-on-surface">Client Reviews</h3>
      <Button variant="outline" size="sm">Write a Review</Button>
    </div>
    <div className="space-y-6">
      {reviews.map((review, idx) => (
        <GlassCard key={idx} variant="default" className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <img src={review.avatar} className="w-12 h-12 rounded-full object-cover" 
            alt={review.name} />
            <div>
              <h4 className="font-bold text-on-surface">{review.name}</h4>
              <Rating value={review.rating} size="sm" />
            </div>
            <span className="ml-auto text-sm text-on-surface-variant">{review.date}</span>
          </div>
          <p className="text-on-surface-variant">{review.comment}</p>
          {review.event && (
            <p className="text-sm text-primary mt-4">Event: {review.event}</p>
          )}
        </GlassCard>
      ))}
    </div>
  </div>
);

const BookingSidebar = ({ mixologist, selectedPackage, setSelectedPackage, selectedDate, setSelectedDate, onBook }) => (
  <GlassCard variant="elevated" className="sticky top-32 p-6">
    <h3 className="text-2xl font-bold text-on-surface mb-6">Book {mixologist.name.split(' ')[0]}</h3>
    
    <div className="space-y-6">
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block">
          Select Package
        </label>
        <div className="space-y-2">
          {servicePackages.map(pkg => (
            <div 
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedPackage?.id === pkg.id 
                  ? 'border-primary bg-primary-container/10' 
                  : 'border-outline-variant hover:border-primary'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-on-surface">{pkg.name}</h4>
                  <p className="text-sm text-on-surface-variant">{pkg.duration}</p>
                </div>
                <span className="text-xl font-bold text-primary">${pkg.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block">
          Select Date
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface text-on-surface"
        />
      </div>

      <Button 
        variant="primaryGradient" 
        fullWidth 
        size="lg"
        onClick={onBook}
        disabled={!selectedPackage || !selectedDate}
      >
        Continue to Booking
      </Button>

      <div className="text-center text-sm text-on-surface-variant">
        <p>Secure booking • Free cancellation • 24/7 support</p>
      </div>
    </div>
  </GlassCard>
);

const PackagesSection = ({ packages, selectedPackage, setSelectedPackage }) => (
  <section className="bg-surface-container-low py-24 px-8 mb-32">
    <div className="max-w-screen-2xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-on-surface mb-4">Service Packages</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Choose from our curated selection of premium experiences
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <PackageCard 
            key={idx} 
            package={pkg} 
            isSelected={selectedPackage?.id === pkg.id}
            onSelect={() => setSelectedPackage(pkg)}
          />
        ))}
      </div>
    </div>
  </section>
);

const PackageCard = ({ package: pkg, isSelected, onSelect }) => {
  const isFeatured = pkg.name === 'Editorial Soirée';
  
  if (isFeatured) {
    return (
      <div className="bg-inverse-surface text-inverse-on-surface p-10 rounded-xl flex flex-col h-full scale-105 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-primary text-on-primary px-4 py-1 text-xs font-bold rounded-bl-xl">
          Most Popular
        </div>
        <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
        <p className="text-on-surface-variant mb-8 flex-grow">{pkg.description}</p>
        <div className="mb-8">
          <span className="text-4xl font-bold">${pkg.price}</span>
          <span className="text-on-surface-variant"> / event</span>
        </div>
        <Button variant="primaryGradient" fullWidth onClick={onSelect}>
          {isSelected ? 'Selected' : 'Reserve Prime'}
        </Button>
      </div>
    );
  }
  
  return (
    <GlassCard variant="default" className={`p-10 flex flex-col h-full ${isSelected ? 'border-primary ring-2 ring-primary' : ''}`}>
      <h3 className="text-2xl font-bold mb-4 text-on-surface">{pkg.name}</h3>
      <p className="mb-8 flex-grow text-on-surface-variant">{pkg.description}</p>
      <div className="mb-8">
        <span className="text-4xl font-bold text-on-surface">${pkg.price}</span>
        <span className="text-on-surface-variant"> / event</span>
      </div>
      <Button variant="outline" fullWidth onClick={onSelect}>
        {isSelected ? 'Selected' : 'Select Package'}
      </Button>
    </GlassCard>
  );
};

const StickyFooter = ({ mixologist, selectedPackage, onBook }) => (
  <div className="fixed bottom-0 left-0 w-full z-40 bg-white/80 backdrop-blur-2xl border-t border-outline-variant/30 py-6 px-8 shadow-2xl">
    <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-6">
        <img 
          src={mixologist.avatar} 
          className="w-12 h-12 rounded-full object-cover border-2 border-primary" 
          alt={mixologist.name}
        />
        <div>
          <p className="font-bold text-on-surface">{mixologist.name}</p>
          <p className="text-xs text-on-surface-variant">
            Available from {mixologist.availableFrom}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="hidden sm:block text-right">
          <p className="text-xs text-on-surface-variant">Starting from</p>
          <p className="text-2xl font-bold text-primary">
            ${selectedPackage ? selectedPackage.price : mixologist.startingPrice}
          </p>
        </div>
        <Button variant="primaryGradient" size="lg" onClick={onBook}>
          Book Now
        </Button>
      </div>
    </div>
  </div>
);

const BookingModal = ({ mixologist, selectedPackage, selectedDate, onClose, onConfirm }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
    <GlassCard variant="elevated" className="max-w-md w-full p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-on-surface">Confirm Booking</h3>
        <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      
      <div className="space-y-4 mb-8">
        <div className="flex justify-between pb-3 border-b border-outline-variant/30">
          <span className="text-on-surface">Mixologist</span>
          <span className="font-bold text-on-surface">{mixologist.name}</span>
        </div>
        <div className="flex justify-between pb-3 border-b border-outline-variant/30">
          <span className="text-on-surface">Package</span>
          <span className="font-bold text-on-surface">{selectedPackage?.name}</span>
        </div>
        <div className="flex justify-between pb-3 border-b border-outline-variant/30">
          <span className="text-on-surface">Date</span>
          <span className="font-bold text-on-surface">{selectedDate}</span>
        </div>
        <div className="flex justify-between pt-2">
          <span className="text-xl font-bold text-on-surface">Total</span>
          <span className="text-2xl font-bold text-primary">${selectedPackage?.price}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <Button variant="primaryGradient" fullWidth size="lg" onClick={onConfirm}>
          Proceed to Payment
        </Button>
        <Button variant="ghost" fullWidth onClick={onClose}>
          Cancel
        </Button>
      </div>
    </GlassCard>
  </div>
);

export default Profile;