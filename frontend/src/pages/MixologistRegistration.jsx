import { useState } from 'react';
import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { Stepper } from '../components/common/Stepper';
import { PersonalDetailsStep } from '../components/forms/PersonalDetailsStep';
import { ProfessionalProfileStep } from '../components/forms/ProfessionalProfileStep';
import { KYCVerificationStep } from '../components/forms/KYCVerificationStep';
// import { SubmissionStep } from '../components/forms/SubmissionStep';
import { useForm } from '../hooks/useForm';

const registrationSteps = [
  { id: 1, title: 'Personal Details', icon: 'person' },
  { id: 2, title: 'Professional Profile', icon: 'liquor' },
  { id: 3, title: 'KYC Verification', icon: 'verified_user' },
  { id: 4, title: 'Submission', icon: 'task_alt' }
];

const initialFormData = {
  firstName: '', lastName: '', email: '', phone: '',
  specialty: 'Classic Craft', experience: '', bio: '',
  portfolio: '', instagram: '',
  idType: 'Passport', idNumber: '', idExpiry: '',
  certifications: '', references: ''
};

const MixologistRegistration = () => {
  const [step, setStep] = useState(1);
  const { formData, updateFormData } = useForm(initialFormData);
  
  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const steps = {
    1: <PersonalDetailsStep data={formData} onChange={updateFormData} onNext={nextStep} />,
    2: <ProfessionalProfileStep data={formData} onChange={updateFormData} onNext={nextStep} onBack={prevStep} />,
    3: <KYCVerificationStep data={formData} onChange={updateFormData} onNext={nextStep} onBack={prevStep} />,
    4: <SubmissionStep data={formData} onSubmit={() => {}} />
  };

  return (
    <div className="bg-surface min-h-screen">
      <TopNav />
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-4 block">
            Onboarding Portal
          </span>
          <h1 className="text-5xl font-headline font-bold tracking-tighter mb-4">
            Professional Mixologist Registration
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Join our elite network. Complete the 4-stage verification process to begin your journey.
          </p>
        </header>

        <Stepper steps={registrationSteps} currentStep={step} />
        
        <div className="glass-card p-8 md:p-12 rounded-2xl border shadow-2xl mt-16">
          {steps[step]}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MixologistRegistration;