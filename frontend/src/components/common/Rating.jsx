const Rating = ({ value, size = 'sm', showNumber = true }) => {
  const fullStars = Math.floor(value);
  //const hasHalfStar = value % 1 >= 0.5;
  
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i}
            className="material-symbols-outlined text-primary"
            style={{
              fontVariationSettings: i < fullStars ? "'FILL' 1" : "'FILL' 0",
              fontSize: size === 'sm' ? '16px' : size === 'md' ? '20px' : '24px'
            }}
          >
            star
          </span>
        ))}
      </div>
      {showNumber && (
        <span className={`font-bold text-on-surface ${sizeClasses[size]}`}>{value}</span>
      )}
    </div>
  );
};

export default Rating;