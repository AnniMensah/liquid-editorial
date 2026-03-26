const StatsCard = ({ title, value, icon, trend, trendValue }) => {
  return (
    <div className="glass-card p-8 rounded-xl flex flex-col justify-between min-h-[160px] bg-white/70">
      <div className="flex justify-between items-start">
        <span className="material-symbols-outlined text-primary">{icon}</span>
        <span className="text-[0.65rem] font-bold tracking-widest uppercase text-on-surface-variant">
          {title}
        </span>
      </div>
      <div>
        <h3 className="text-3xl font-headline font-bold text-on-surface">{value}</h3>
        {trend && (
          <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-xs">{trend.icon}</span>
            {trendValue}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;