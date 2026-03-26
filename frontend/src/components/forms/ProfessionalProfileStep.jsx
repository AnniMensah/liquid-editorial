
import React from 'react';
import  Button from '../components/common/Button';
import  Input from '../components/common/Button';
import  GlassCard  from '../components/common/GlassCard';

export const ProfessionalProfileStep = ({ data, onChange, onNext, onBack }) => {
  const specialties = [
    'Molecular Mixology',
    'Classic Craft & Prohibition',
    'Botanical & Sustainable',
    'Tiki & Tropical Arts',
    'Wine & Spirits Education',
    'Flair Bartending'
  ];

  return (
    <GlassCard variant="elevated" className="p-8 md:p-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Specialty / Primary Style
          </label>
          <div className="grid grid-cols-2 gap-3">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => onChange('specialty', spec)}
                className={`p-3 rounded-xl border text-center transition-all ${
                  data.specialty === spec
                    ? 'border-primary bg-primary-container text-on-primary-container'
                    : 'border-outline-variant hover:border-primary'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Years of Experience
          </label>
          <input
            type="number"
            value={data.experience || ''}
            onChange={(e) => onChange('experience', e.target.value)}
            placeholder="Number of years"
            className="w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary bg-surface/50 text-on-surface"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Professional Bio
          </label>
          <textarea
            rows={4}
            value={data.bio || ''}
            onChange={(e) => onChange('bio', e.target.value)}
            placeholder="Tell us about your journey behind the bar, your philosophy, and what makes your craft unique..."
            className="w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary bg-surface/50 text-on-surface"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input
            label="Portfolio / Website"
            value={data.portfolio || ''}
            onChange={(e) => onChange('portfolio', e.target.value)}
            placeholder="https://portfolio.com"
            icon="link"
          />
          <Input
            label="Instagram Handle"
            value={data.instagram || ''}
            onChange={(e) => onChange('instagram', e.target.value)}
            placeholder="@mixology_pro"
            icon="photo_camera"
          />
        </div>

        <div className="flex gap-4">
          <Button variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
          <Button variant="primaryGradient" onClick={onNext} className="flex-[2]">
            Next: KYC Verification
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProfessionalProfileStep;