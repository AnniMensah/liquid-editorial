import { Link } from 'react-router-dom';


const Sidebar = ({ menuItems, user, onLogout }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 glass-card sidebar-blur z-50 flex flex-col p-8 hidden md:flex">
      <div className="mb-12">
        <Link className="text-xl font-bold tracking-tighter text-zinc-900 hover:text-primary transition-colors" to="/">
          The Liquid Editorial
        </Link>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <SidebarLink key={item.label} {...item} />
        ))}
      </nav>

      {user && (
        <div className="mt-auto pt-8">
          <UserProfileCard user={user} onLogout={onLogout} />
        </div>
      )}
    </aside>
  );
};

const SidebarLink = ({ icon, label, href, isActive }) => (
  <a 
    href={href}
    className={`
      flex items-center gap-4 px-4 py-3 rounded-xl transition-all
      ${isActive 
        ? 'bg-primary-container text-on-primary-container font-semibold' 
        : 'text-zinc-600 hover:bg-surface-container-high'
      }
    `}
  >
    <span className="material-symbols-outlined">{icon}</span>
    <span className="text-sm">{label}</span>
  </a>
);

export default Sidebar;