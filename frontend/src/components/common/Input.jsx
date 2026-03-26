const Input = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  error,
  icon,
  className = ''
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            {icon}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full px-5 py-4 rounded-xl border bg-surface/50
            focus:outline-none focus:ring-2 focus:ring-primary/20
            ${icon ? 'pl-12' : ''}
            ${error ? 'border-error' : 'border-outline-variant focus:border-primary'}
            ${className}
          `}
        />
      </div>
      {error && (
        <p className="text-xs text-error mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;