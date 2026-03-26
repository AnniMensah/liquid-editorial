const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  disabled = false,
  fullWidth = false,
  size = 'md'
}) => {
  const variants = {
    primary: 'bg-primary text-on-primary hover:bg-primary/90 shadow-md hover:shadow-lg',
    primaryGradient: 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95',
    secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90',
    outline: 'border border-outline text-on-surface hover:bg-surface-container-high',
    ghost: 'text-on-surface-variant hover:bg-surface-container-high',
    error: 'bg-error text-on-error hover:bg-error/90',
    tertiary: 'bg-tertiary text-on-tertiary hover:bg-tertiary/90',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        font-semibold rounded-full transition-all duration-300 font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;

