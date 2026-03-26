import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/common/GlassCard';
import  Button from '../components/common/Button';
import  Input  from '../components/common/Input';
import { adminStats, pendingApprovals, users, revenueData } from '../data/mockData';

const AdminDashboard = () => {
  
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex min-h-screen bg-surface w-full">
      <AdminSidebar />
      
      <main className="flex-1 ml-72">
        <AdminHeader />
        
        <div className="p-10 space-y-12">
          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {adminStats.map((stat, idx) => (
              <AdminStatCard key={idx} {...stat} />
            ))}
          </section>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <RevenueChart data={revenueData} />
            <UserGrowthChart />
          </div>

          {/* Approvals and Users Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <PendingApprovalsSection approvals={pendingApprovals} />
            <UserDirectorySection users={users} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          {/* Recent Activity */}
          <RecentActivitySection />
        </div>
      </main>
    </div>
  );
};

const AdminSidebar = () => {
  const menuItems = [
    { icon: 'dashboard', label: 'Dashboard', href: '#', isActive: true },
    { icon: 'group', label: 'User Directory', href: '#' },
    { icon: 'verified', label: 'Approvals', href: '#' },
    { icon: 'payments', label: 'Transactions', href: '#' },
    { icon: 'bar_chart', label: 'Analytics', href: '#' },
    { icon: 'settings', label: 'Settings', href: '#' },
  ];

  return (
    <aside className="w-72 bg-surface-container-low flex flex-col fixed h-full z-40 border-r border-outline-variant/20">
      <div className="p-8">
        <Link className="text-xl font-bold tracking-tighter text-on-surface" to="/">
          The Liquid Editorial
        </Link>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        <div className="px-4 py-2 text-[0.75rem] font-bold text-on-surface-variant/50 uppercase tracking-widest">
          Management
        </div>
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              item.isActive
                ? 'sidebar-link-active'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-surface-container p-4 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">account_circle</span>
          </div>
          <div>
            <div className="text-sm font-bold text-on-surface">Admin Portal</div>
            <div className="text-[0.65rem] uppercase tracking-wider text-on-surface-variant">
              Chief Administrator
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const AdminHeader = () => (
  <header className="h-20 bg-white/70 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between px-10 shadow-sm border-b border-outline-variant/20">
    <div className="flex items-center gap-4">
      <h1 className="font-headline text-xl font-bold text-on-surface">System Overview</h1>
      <div className="px-3 py-1 bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest rounded-full">
        Live
      </div>
    </div>
    <div className="flex items-center gap-6">
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">search</span>
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">notifications</span>
      <Button variant="primary" size="sm">Generate Report</Button>
    </div>
  </header>
);

const AdminStatCard = ({ title, value, change, icon, trend }) => (
  <GlassCard variant="default" className="p-6">
    <div className="flex justify-between items-start mb-4">
      <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
      <span className={`text-xs font-bold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </span>
    </div>
    <h3 className="text-2xl font-bold text-on-surface mb-1">{value}</h3>
    <p className="text-sm text-on-surface-variant">{title}</p>
  </GlassCard>
);

const RevenueChart = ({ data }) => (
  <div className="lg:col-span-2 bg-surface-container-low rounded-xl p-6">
    <h3 className="font-bold text-on-surface mb-6">Revenue Overview</h3>
    <div className="h-80 flex items-end gap-2">
      {data.map((item, idx) => (
        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
          <div 
            className="w-full bg-gradient-to-t from-primary to-primary-container rounded-t-lg transition-all"
            style={{ height: `${(item.revenue / 20000) * 100}%` }}
          />
          <span className="text-xs text-on-surface-variant">{item.month}</span>
        </div>
      ))}
    </div>
  </div>
);

const UserGrowthChart = () => (
  <div className="bg-surface-container-low rounded-xl p-6">
    <h3 className="font-bold text-on-surface mb-6">User Growth</h3>
    <div className="space-y-4">
      <div>
        <div className="flex justify-between text-sm text-on-surface-variant mb-2">
          <span>Mixologists</span>
          <span>+24%</span>
        </div>
        <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
          <div className="bg-primary h-full w-[68%] rounded-full" />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm text-on-surface-variant mb-2">
          <span>Customers</span>
          <span>+42%</span>
        </div>
        <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
          <div className="bg-primary-container h-full w-[82%] rounded-full" />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm text-on-surface-variant mb-2">
          <span>Active Bookings</span>
          <span>+18%</span>
        </div>
        <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
          <div className="bg-tertiary h-full w-[54%] rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

const PendingApprovalsSection = ({ approvals }) => (
  <section className="lg:col-span-1 space-y-6">
    <h2 className="font-bold text-lg text-on-surface">Pending Approvals</h2>
    {approvals.map((approval, idx) => (
      <GlassCard key={idx} variant="default" className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden">
            <img src={approval.avatar} className="w-full h-full object-cover"
             alt={approval.name} />
          </div>
          <div>
            <div className="font-bold text-on-surface">{approval.name}</div>
            <div className="text-xs text-on-surface-variant">{approval.location} • {approval.experience} yrs exp.</div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="primary" size="sm" className="flex-1">Approve</Button>
          <Button variant="outline" size="sm" className="flex-1">Review</Button>
        </div>
      </GlassCard>
    ))}
  </section>
);

const UserDirectorySection = ({ users, searchTerm, setSearchTerm }) => (
  <section className="lg:col-span-2 bg-surface-container-low rounded-xl overflow-hidden">
    <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
      <h3 className="font-bold text-on-surface">Active Directory</h3>
      <Input
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        icon="search"
        className="max-w-xs"
      />
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-surface-container text-[0.65rem] uppercase font-bold text-on-surface-variant">
          <tr>
            <th className="px-6 py-4">User</th>
            <th className="px-6 py-4">Role</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Joined</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/20">
          {users.map((user, idx) => (
            <tr key={idx} className="hover:bg-surface-container/20 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container overflow-hidden">
                    <img src={user.avatar} className="w-full h-full object-cover" 
                    alt={user.name} />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm">{user.name}</p>
                    <p className="text-[10px] text-on-surface-variant">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="bg-surface-container px-2 py-1 rounded text-xs text-on-surface-variant">
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-sm text-on-surface-variant">Active</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-on-surface-variant">{user.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

const RecentActivitySection = () => {
  const activities = [
    { type: 'booking', user: 'Sarah Johnson', action: 'booked Julian Vance', amount: '$450', time: '5 minutes ago' },
    { type: 'registration', user: 'Marco Rossi', action: 'registered as mixologist', time: '1 hour ago' },
    { type: 'review', user: 'Emily Chen', action: 'left a 5-star review', time: '3 hours ago' },
    { type: 'booking', user: 'Michael Brown', action: 'booked Sasha Chen', amount: '$850', time: '5 hours ago' },
  ];

  return (
    <div className="bg-surface-container-low rounded-xl p-6">
      <h3 className="font-bold text-on-surface mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex items-center justify-between py-3 border-b border-outline-variant/20 last:border-0">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === 'booking' ? 'bg-primary/10' :
                activity.type === 'registration' ? 'bg-green-100' : 'bg-orange-100'
              }`}>
                <span className="material-symbols-outlined text-primary text-sm">
                  {activity.type === 'booking' ? 'event_available' :
                   activity.type === 'registration' ? 'person_add' : 'star'}
                </span>
              </div>
              <div>
                <p className="text-sm text-on-surface">
                  <span className="font-bold">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-on-surface-variant">{activity.time}</p>
              </div>
            </div>
            {activity.amount && (
              <span className="font-bold text-primary">{activity.amount}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;