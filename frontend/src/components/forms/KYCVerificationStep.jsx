// src/components/forms/KYCVerificationStep.jsx
import React, { useState } from 'react';
// import { Button } from '../common';
// import { GlassCard } from '../common';

export const KYCVerificationStep = ({ data, onChange, onNext, onBack }) => {
  const [ setUploadedFiles] = useState({
    idFront: null,
    idBack: null,
    certification: null
  });

  const handleFileUpload = (type, file) => {
    setUploadedFiles(prev => ({ ...prev, [type]: file }));
    onChange(type, file);
  };

  const FileUploadZone = ({ onFileUpload, label, accept = "image/*,.pdf" }) => {
    const [dragActive, setDragActive] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleDrop = (e) => {
      e.preventDefault();
      setDragActive(false);
      const file = e.dataTransfer.files[0];
      if (file) {
        setFileName(file.name);
        onFileUpload(file);
      }
    };

    const handleChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFileName(file.name);
        onFileUpload(file);
      }
    };

    return (
      <div
        className={`border-2 border-dashed rounded-2xl p-6 text-center transition-colors cursor-pointer ${
          dragActive ? 'border-primary bg-primary-container/10' : 'border-outline-variant'
        }`}
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => document.getElementById(`file-input-${label}`).click()}
      >
        <input
          id={`file-input-${label}`}
          type="file"
          accept={accept}
          onChange={handleChange}
          className="hidden"
        />
        <span className="material-symbols-outlined text-4xl text-outline mb-2">cloud_upload</span>
        <p className="text-sm font-bold text-on-surface">
          {fileName || `Click to upload ${label.toLowerCase()}`}
        </p>
        <p className="text-xs text-on-surface-variant mt-1">
          PDF, JPG or PNG (max. 10MB)
        </p>
      </div>
    );
  };

  return (
    <GlassCard variant="elevated" className="p-8 md:p-12">
      <div className="space-y-8">
        <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 flex gap-4 items-start">
          <span className="material-symbols-outlined text-primary">info</span>
          <p className="text-sm text-on-surface-variant">
            To ensure the safety of our clients, all mixologists must undergo identity verification (KYC). 
            Your data is encrypted and stored securely.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              Government Issued ID Type
            </label>
            <div className="grid grid-cols-3 gap-4">
              {['Passport', "Driver's License", 'National ID'].map(type => (
                <button
                  key={type}
                  onClick={() => onChange('idType', type)}
                  className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                    data.idType === type
                      ? 'border-primary bg-primary-container text-on-primary-container'
                      : 'border-outline-variant hover:border-primary'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              Upload ID Document (Front & Back)
            </label>
            <FileUploadZone 
              onFileUpload={(file) => handleFileUpload('idFront', file)}
              label="Front Side"
            />
            <FileUploadZone 
              onFileUpload={(file) => handleFileUpload('idBack', file)}
              label="Back Side"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              Proof of Professional Certification
            </label>
            <FileUploadZone 
              onFileUpload={(file) => handleFileUpload('certification', file)}
              label="Upload Certificate"
              accept=".pdf,.jpg,.png"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
          <Button variant="primaryGradient" onClick={onNext} className="flex-[2]">
            Review & Submit
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default KYCVerificationStep;