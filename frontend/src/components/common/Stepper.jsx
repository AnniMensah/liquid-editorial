const Stepper = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="relative flex justify-between items-center max-w-2xl mx-auto">
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-highest -z-10 -translate-y-1/2">
        <div 
          className="active-step-line h-full transition-all duration-500" 
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>
      {steps.map((step, index) => (
        <StepItem
          key={step.id}
          step={step}
          index={index}
          isActive={currentStep >= step.id}
          onClick={() => onStepClick?.(step.id)}
        />
      ))}
    </div>
  );
};

const StepItem = ({ step, isActive, onClick }) => (
  <div className="flex flex-col items-center gap-3 bg-surface px-2">
    <div 
      onClick={onClick}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 cursor-pointer
        ${isActive 
          ? 'bg-primary border-primary text-white shadow-lg' 
          : 'bg-surface border-outline-variant text-on-surface-variant'
        }
      `}
    >
      <span className="material-symbols-outlined text-xl">{step.icon}</span>
    </div>
    <span className={`text-[0.65rem] font-bold tracking-widest uppercase text-center w-20 ${isActive ? 'text-on-surface' : 'text-on-surface-variant'}`}>
      {step.title}
    </span>
  </div>
);

export default Stepper;