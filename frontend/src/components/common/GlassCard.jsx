const GlassCard = ({ children, className = '', onClick, variant = 'default' }) => {
  const variants = {
    default: 'bg-white/70 backdrop-blur-xl border border-outline-variant/30',
    elevated: 'bg-white/70 backdrop-blur-xl shadow-2xl border border-white/20',
    interactive: 'bg-white/70 backdrop-blur-xl border border-outline-variant/30 hover:scale-[1.02] transition-all cursor-pointer',
    dark: 'bg-surface-container/80 backdrop-blur-xl border border-outline-variant/20',
  };

  return (
    <div 
      className={`${variants[variant]} rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;