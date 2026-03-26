import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNav, Footer } from '../components/layout';
import { GlassCard, Button, Input, Stepper } from '../components/common';
import { servicePackages } from '../data/mockData';

const bookingSteps = [
  { id: 1, title: 'Package', icon: 'sell' },
  { id: 2, title: 'Date & Time', icon: 'calendar_month' },
  { id: 3, title: 'Details', icon: 'edit_note' },
  { id: 4, title: 'Payment', icon: 'payments' }
];

const Bookings = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    package: null,
    date: '',
    time: '',
    guestCount: 1,
    eventType: '',
    specialRequests: '',
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const updateBookingData = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(s => s + 1);
  const prevStep = () => setCurrentStep(s => s - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PackageStep 
            selectedPackage={bookingData.package}
            onSelect={(pkg) => updateBookingData('package', pkg)}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <DateTimeStep 
            date={bookingData.date}
            time={bookingData.time}
            onChange={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <DetailsStep 
            data={bookingData}
            onChange={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <PaymentStep 
            data={bookingData}
            onBack={prevStep}
            onComplete={() => navigate('/booking-confirmation')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-surface min-h-screen">
      <TopNav />
      <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-headline font-bold tracking-tighter text-on-surface mb-12">
            Reserve Your Experience
          </h1>
          <Stepper steps={bookingSteps} currentStep={currentStep} />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {renderStep()}
          </div>
          <div className="lg:col-span-1">
            <BookingSummary data={bookingData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const PackageStep = ({ selectedPackage, onSelect, onNext }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-on-surface mb-6">Select Your Package</h2>
    <div className="grid grid-cols-1 gap-4">
      {servicePackages.map((pkg) => (
        <div
          key={pkg.id}
          onClick={() => onSelect(pkg)}
          className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
            selectedPackage?.id === pkg.id
              ? 'border-primary bg-primary-container/10'
              : 'border-outline-variant hover:border-primary'
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-2">{pkg.name}</h3>
              <p className="text-on-surface-variant">{pkg.description}</p>
              <div className="flex gap-4 mt-3">
                <span className="text-sm text-on-surface-variant">⏱️ {pkg.duration}</span>
                <span className="text-sm text-on-surface-variant">👥 {pkg.maxGuests} guests max</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-primary">${pkg.price}</span>
              <p className="text-xs text-on-surface-variant">per event</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Button 
      variant="primaryGradient" 
      fullWidth 
      size="lg"
      onClick={onNext}
      disabled={!selectedPackage}
    >
      Continue to Date & Time
    </Button>
  </div>
);

const DateTimeStep = ({ date, time, onChange, onNext, onBack }) => {
  const availableDates = ['2024-10-15', '2024-10-16', '2024-10-17', '2024-10-18', '2024-10-19'];
  const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-on-surface">Select Date & Time</h2>
      
      <div>
        <label className="text-sm font-bold text-on-surface mb-4 block">Available Dates</label>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          {availableDates.map((d) => (
            <button
              key={d}
              onClick={() => onChange('date', d)}
              className={`p-3 rounded-xl border text-center transition-all ${
                date === d
                  ? 'border-primary bg-primary-container text-on-primary-container'
                  : 'border-outline-variant hover:border-primary'
              }`}
            >
              <div className="text-sm font-bold">{new Date(d).toLocaleDateString('en-US', { weekday: 'short' })}</div>
              <div className="text-xs">{new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-bold text-on-surface mb-4 block">Available Times</label>
        <div className="grid grid-cols-3 gap-3">
          {availableTimes.map((t) => (
            <button
              key={t}
              onClick={() => onChange('time', t)}
              className={`p-3 rounded-xl border text-center transition-all ${
                time === t
                  ? 'border-primary bg-primary-container text-on-primary-container'
                  : 'border-outline-variant hover:border-primary'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button variant="primaryGradient" onClick={onNext} disabled={!date || !time}>
          Continue to Details
        </Button>
      </div>
    </div>
  );
};

const DetailsStep = ({ data, onChange, onNext, onBack }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-on-surface">Event Details</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Input
        label="Guest Count"
        type="number"
        value={data.guestCount}
        onChange={(e) => onChange('guestCount', parseInt(e.target.value))}
        placeholder="Number of guests"
      />
      <Input
        label="Event Type"
        value={data.eventType}
        onChange={(e) => onChange('eventType', e.target.value)}
        placeholder="e.g., Wedding, Corporate, Private Party"
      />
    </div>

    <Input
      label="Special Requests"
      type="textarea"
      value={data.specialRequests}
      onChange={(e) => onChange('specialRequests', e.target.value)}
      placeholder="Any dietary restrictions, preferred cocktails, or special requirements?"
      rows={3}
    />

    <div className="border-t border-outline-variant/30 pt-6">
      <h3 className="text-xl font-bold text-on-surface mb-4">Contact Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          value={data.name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="John Doe"
        />
        <Input
          label="Email"
          type="email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          placeholder="john@example.com"
        />
        <Input
          label="Phone"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          placeholder="+1 (555) 000-0000"
        />
        <Input
          label="Address"
          value={data.address}
          onChange={(e) => onChange('address', e.target.value)}
          placeholder="Event address"
        />
      </div>
    </div>

    <div className="flex gap-4">
      <Button variant="outline" onClick={onBack}>
        Back
      </Button>
      <Button 
        variant="primaryGradient" 
        onClick={onNext} 
        disabled={!data.name || !data.email || !data.phone}
      >
        Continue to Payment
      </Button>
    </div>
  </div>
);

const PaymentStep = ({ data, onBack, onComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment logic here
    onComplete();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-on-surface">Payment Information</h2>
      
      <div className="space-y-4">
        <label className="text-sm font-bold text-on-surface block">Payment Method</label>
        <div className="grid grid-cols-2 gap-4">
          {['card', 'paypal'].map((method) => (
            <button
              key={method}
              onClick={() => setPaymentMethod(method)}
              className={`p-4 rounded-xl border text-center transition-all ${
                paymentMethod === method
                  ? 'border-primary bg-primary-container/10'
                  : 'border-outline-variant'
              }`}
            >
              <span className="capitalize">{method}</span>
            </button>
          ))}
        </div>
      </div>

      {paymentMethod === 'card' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            icon="credit_card"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Expiry Date"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
            />
            <Input
              label="CVV"
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
            />
          </div>
          <Button variant="primaryGradient" fullWidth size="lg" type="submit">
            Complete Booking
          </Button>
        </form>
      )}

      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
      </div>
    </div>
  );
};

const BookingSummary = ({ data }) => {
  const subtotal = data.package?.price || 0;
  const serviceFee = subtotal * 0.1;
  const total = subtotal + serviceFee;

  return (
    <GlassCard variant="elevated" className="sticky top-32 p-6">
      <h3 className="text-xl font-bold text-on-surface mb-6">Booking Summary</h3>
      
      <div className="space-y-4 mb-6">
        {data.package && (
          <div className="flex justify-between">
            <span className="text-on-surface-variant">{data.package.name}</span>
            <span className="font-bold text-on-surface">${data.package.price}</span>
          </div>
        )}
        
        {data.date && (
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Date</span>
            <span className="text-on-surface">{new Date(data.date).toLocaleDateString()}</span>
          </div>
        )}
        
        {data.time && (
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Time</span>
            <span className="text-on-surface">{data.time}</span>
          </div>
        )}
        
        {data.guestCount > 0 && (
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Guests</span>
            <span className="text-on-surface">{data.guestCount}</span>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/30 pt-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-on-surface-variant">Subtotal</span>
          <span className="text-on-surface">${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-on-surface-variant">Service Fee</span>
          <span className="text-on-surface">${serviceFee}</span>
        </div>
        <div className="flex justify-between pt-3 border-t border-outline-variant/30">
          <span className="text-xl font-bold text-on-surface">Total</span>
          <span className="text-2xl font-bold text-primary">${total}</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-surface-container-low rounded-xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="material-symbols-outlined text-primary">verified</span>
          <span className="text-sm font-bold text-on-surface">Secure Booking</span>
        </div>
        <p className="text-xs text-on-surface-variant">
          Free cancellation up to 48 hours before the event
        </p>
      </div>
    </GlassCard>
  );
};

export default Bookings;