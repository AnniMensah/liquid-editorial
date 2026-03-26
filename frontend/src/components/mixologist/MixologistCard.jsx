import { useNavigate } from 'react-router-dom';
import { Rating } from './common/Rating';
import { Button } from './common/Button';

const MixologistCard = ({ mixologist, variant = 'default' }) => {
  const navigate = useNavigate();

  if (variant === 'featured') {
    return (
      <div 
        onClick={() => navigate(`/mixologist-detail/${mixologist.id}`)}
        className="group bg-surface-container-lowest p-6 rounded-lg cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-[0_20px_40px_rgba(153,71,0,0.02)]"
      >
        <div className="relative h-64 rounded-xl overflow-hidden mb-6">
          <img 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            src={mixologist.image} 
            alt={mixologist.name}
          />
          <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-bold">
            ⭐ {mixologist.rating}
          </div>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-1">{mixologist.name}</h3>
        <p className="text-xs text-on-surface-variant tracking-widest uppercase mb-4">
          {mixologist.role}
        </p>
        <Button variant="outline" fullWidth size="sm">
          Book Now
        </Button>
      </div>
    );
  }

  return (
    <button 
      onClick={() => navigate(`/mixologist-detail/${mixologist.id}`)}
      className="group text-left bg-surface rounded-xl overflow-hidden hover:scale-[1.01] transition-all shadow-sm border border-outline-variant/20"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={mixologist.image} 
          alt={mixologist.name}
        />
        <div className="absolute top-6 right-6 bg-surface/90 px-3 py-1 rounded-full text-[0.7rem] font-bold text-on-surface">
          {mixologist.level}
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-on-surface mb-1">{mixologist.name}</h3>
            <Rating value={mixologist.rating} size="sm" />
          </div>
          <div className="text-right">
            <span className="block text-[0.65rem] font-bold text-outline">From</span>
            <span className="text-xl font-bold text-primary">{mixologist.hourlyRate}/hr</span>
          </div>
        </div>
        <div className="w-full py-4 rounded-xl border border-outline font-bold uppercase tracking-widest text-[0.75rem] text-center text-on-surface group-hover:bg-on-surface group-hover:text-surface transition-all">
          View Profile
        </div>
      </div>
    </button>
  );
};

export default MixologistCard;