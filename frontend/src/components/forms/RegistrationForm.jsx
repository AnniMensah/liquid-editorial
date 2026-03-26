// src/pages/MixologistRegistration.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import  TopNav  from '../components/layout/TopNav';
import Button  from '../components/common/Button';
import  GlassCard from '../components/common/GlassCard';
import  Input  from '../components/common//Input';

const MixologistRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    experienceLevel: 'Professional (5+ Years)',
    specialties: '',
    portfolioLink: '',
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the Terms of Service and Privacy Policy');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Application submitted successfully! Our team will review your profile within 48 hours.');
      navigate('/mixologist-dashboard');
    }, 1500);
  };

  const experienceLevels = [
    'Professional (5+ Years)',
    'Intermediate (2-5 Years)',
    'Rising Star (1-2 Years)'
  ];

  return (
    <div className="bg-surface min-h-screen">
      <TopNav />
      
      <main className="pt-24">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Benefits Section */}
        <BenefitsSection />
        
        {/* Application Form Section */}
        <ApplicationFormSection 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          experienceLevels={experienceLevels}
        />
      </main>
      
      {/* Footer */}
      <RegistrationFooter />
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative px-8 py-24 md:py-32 flex flex-col items-center overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
      
      <div className="max-w-4xl text-center relative z-10">
        <span className="label-md text-primary font-bold tracking-widest uppercase mb-6 block">
          Career Opportunities
        </span>
        <h1 className="text-[3.5rem] leading-tight font-bold tracking-tighter font-headline mb-8">
          Elevate Your Career with <br/>
          <span className="text-gradient">The Liquid Editorial</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
          Join an elite collective of master mixologists. We connect top-tier talent with world-class venues 
          and premium private experiences.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Button 
            variant="primaryGradient" 
            size="lg"
            onClick={() => {
              document.getElementById('apply-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-5 rounded-xl font-headline font-bold text-lg shadow-lg"
          >
            Join Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/mixologists')}
            className="glass-card px-10 py-5 rounded-xl font-headline font-bold text-lg hover:bg-surface-container-highest transition-colors"
          >
            View Opportunities
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-20 w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl relative">
        <img 
          alt="Mixologist crafting a premium cocktail" 
          className="w-full h-[500px] object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1dtqH686w5aA_h2B3Ozz20phY6bHsddqNCimKDoNtQFbw2MSHpJWk5Cc3RAxqdOW_FVS5_fKNpuP6A8tAY2cbw1WtadcZ-rE3cDNTMeYbsWTAyoD-XEfvw1xdxrjvTE-aMe8_e3pD9ugOB07xtvrCrC2v2B4P8WI1PWwzRfJ-mx2ZUvbNggPvjpELcJYfDiVy0oL2kSjNSukgWcUWzVlJJneg41pR1DsyZofq8Hqty912scuLFDO6AOFRqtjHgAd2_JqEA_vLLGg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
      </div>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'star',
      title: 'Premium Clients',
      description: 'Gain access to high-net-worth individuals and luxury corporate events looking for artisanal beverage experiences.'
    },
    {
      icon: 'calendar_today',
      title: 'Flexible Schedule',
      description: 'Choose the assignments that fit your lifestyle. From one-off masterclasses to recurring venue residencies.'
    },
    {
      icon: 'badge',
      title: 'Profile Showcase',
      description: 'A dedicated editorial-style profile page highlighting your signature creations, philosophy, and professional background.'
    }
  ];

  return (
    <section className="bg-surface-container-low py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[1.75rem] font-bold font-headline mb-4 text-on-surface">
              Why Partner With Us?
            </h2>
            <p className="text-on-surface-variant text-lg">
              We provide the platform, the clients, and the stage. You bring the artistry.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ icon, title, description }) => (
  <div className="glass-card p-10 rounded-xl hover:translate-y-[-8px] transition-transform duration-500 bg-white/70 backdrop-blur-xl border border-outline-variant/30">
    <div className="w-16 h-16 bg-primary-fixed rounded-xl flex items-center justify-center mb-8">
      <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold font-headline mb-4 text-on-surface">{title}</h3>
    <p className="text-on-surface-variant leading-relaxed">{description}</p>
  </div>
);

// Application Form Section Component
const ApplicationFormSection = ({ 
  formData, 
  handleChange, 
  handleSubmit, 
  isSubmitting,
  experienceLevels 
}) => {
  const steps = [
    { number: 1, label: 'Basic Info', active: true },
    { number: 2, label: 'Interview', active: false },
    { number: 3, label: 'Onboarding', active: false }
  ];

  return (
    <section className="py-32 px-8 flex flex-col lg:flex-row items-start gap-24 max-w-7xl mx-auto" id="apply-section">
      {/* Left Side - Steps */}
      <div className="lg:w-1/3">
        <h2 className="text-[1.75rem] font-bold font-headline mb-6 text-on-surface">
          Start Your Application
        </h2>
        <p className="text-on-surface-variant mb-10">
          Complete the form below to begin the vetting process. Our curation team will review your portfolio within 48 hours.
        </p>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <StepIndicator key={index} {...step} />
          ))}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-2/3 w-full">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FormField 
              label="Full Name"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              placeholder="Julian Vigne"
              required
            />
            <FormSelect 
              label="Experience Level"
              value={formData.experienceLevel}
              onChange={(e) => handleChange('experienceLevel', e.target.value)}
              options={experienceLevels}
            />
          </div>

          <FormField 
            label="Specialties"
            type="text"
            value={formData.specialties}
            onChange={(e) => handleChange('specialties', e.target.value)}
            placeholder="Molecular Mixology, Classic Aperitifs, Japanese Bar Craft"
            helperText="Separate your expertise with commas"
          />

          <FormField 
            label="Portfolio Link / Instagram"
            type="url"
            value={formData.portfolioLink}
            onChange={(e) => handleChange('portfolioLink', e.target.value)}
            placeholder="https://instagram.com/yourhandle"
          />

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={formData.termsAccepted}
              onChange={(e) => handleChange('termsAccepted', e.target.checked)}
              className="rounded-sm text-primary-container focus:ring-primary-container border-outline-variant w-5 h-5"
            />
            <label htmlFor="terms" className="text-sm text-on-surface-variant">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <Button 
            type="submit"
            variant="primaryGradient"
            size="lg"
            disabled={isSubmitting}
            className="w-full md:w-auto px-16 py-5 rounded-xl font-headline font-bold text-lg shadow-xl"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </div>
    </section>
  );
};

// Form Field Component
const FormField = ({ label, type, value, onChange, placeholder, helperText, required }) => (
  <div className="relative group">
    <label className="label-md text-on-surface-variant font-bold tracking-widest uppercase mb-2 block">
      {label}
      {required && <span className="text-primary ml-1">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary-container focus:ring-0 px-0 py-3 text-lg transition-all placeholder:text-surface-container-highest text-on-surface"
    />
    {helperText && (
      <p className="text-xs text-on-surface-variant/60 mt-2 italic">{helperText}</p>
    )}
  </div>
);

// Form Select Component
const FormSelect = ({ label, value, onChange, options }) => (
  <div className="relative group">
    <label className="label-md text-on-surface-variant font-bold tracking-widest uppercase mb-2 block">
      {label}
    </label>
    <select
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary-container focus:ring-0 px-0 py-3 text-lg transition-all text-on-surface"
    >
      {options.map(option => (
        <option key={option} value={option} className="bg-surface text-on-surface">
          {option}
        </option>
      ))}
    </select>
  </div>
);

// Step Indicator Component
const StepIndicator = ({ number, label, active }) => (
  <div className="flex items-center gap-4">
    <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold transition-all ${
      active 
        ? 'border-primary bg-primary text-on-primary' 
        : 'border-outline-variant text-on-surface-variant opacity-40'
    }`}>
      {number}
    </div>
    <span className={`font-bold text-sm tracking-widest uppercase ${
      active ? 'text-on-surface' : 'text-on-surface-variant opacity-40'
    }`}>
      {label}
    </span>
  </div>
);

// Footer Component
const RegistrationFooter = () => {
  const footerLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Press Kit', href: '/press' }
  ];

  return (
    <footer className="bg-zinc-50 w-full rounded-t-[3rem] mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="text-lg font-black text-zinc-900 font-headline tracking-tighter mb-2">
            The Liquid Editorial
          </div>
          <p className="text-zinc-400 font-body text-sm">
            © 2024 The Liquid Editorial. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-zinc-400 font-body text-sm tracking-widest uppercase hover:text-orange-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

// Add custom CSS for text gradient
const style = document.createElement('style');
style.textContent = `
  .text-gradient {
    background: linear-gradient(135deg, #ff7a00 0%, #994700 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(224, 192, 175, 0.15);
  }
`;
document.head.appendChild(style);

export default MixologistRegistration;