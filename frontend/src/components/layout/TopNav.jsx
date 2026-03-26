import { Link, useNavigate } from 'react-router-dom';

const TopNav = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(153,71,0,0.04)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-900 font-headline">
          The Liquid Editorial
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/mixologists">Mixologists</NavLink>
          <NavLink to="/mixologist-registration">Become a Mixologist</NavLink>
        </div>
        <Button 
          variant="primary" 
          onClick={() => navigate('/mixologists')}
          className="px-6 py-2.5 rounded-full text-sm"
        >
          Book a Mixologist
        </Button>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-zinc-600 hover:text-zinc-900 transition-colors"
  >
    {children}
  </Link>
);

export default TopNav;