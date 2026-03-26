// src/components/forms/PersonalDetailsStep.jsx
import React, { useState } from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

// duplicate import removed
import  GlassCard  from '../components/common/GlassCard';

export const PersonalDetailsStep = ({ data, onChange, onNext }) => {
  const [errors, setErrors] = useState({});

  const validateAndNext = () => {
    const newErrors = {};
    if (!data.firstName) newErrors.firstName = 'First name is required';
    if (!data.lastName) newErrors.lastName = 'Last name is required';
    if (!data.email) newErrors.email = 'Email is required';
    if (!data.phone) newErrors.phone = 'Phone number is required';
    
    if (Object.keys(newErrors).length === 0) {
      onNext();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <GlassCard variant="elevated" className="p-8 md:p-12">
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input
            label="First Name"
            value={data.firstName || ''}
            onChange={(e) => onChange('firstName', e.target.value)}
            placeholder="John"
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            value={data.lastName || ''}
            onChange={(e) => onChange('lastName', e.target.value)}
            placeholder="Doe"
            error={errors.lastName}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input
            label="Email Address"
            type="email"
            value={data.email || ''}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="john@example.com"
            error={errors.email}
            icon="mail"
          />
          <Input
            label="Phone Number"
            type="tel"
            value={data.phone || ''}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="+1 (555) 000-0000"
            error={errors.phone}
            icon="call"
          />
        </div>

        <Button variant="primaryGradient" fullWidth size="lg" onClick={validateAndNext}>
          Continue to Professional Profile
          <span className="material-symbols-outlined ml-2">arrow_forward</span>
        </Button>
      </div>
    </GlassCard>
  );
};

export default PersonalDetailsStep;