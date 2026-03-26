"use client";

import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import StatsCard from '../components/dashboard/StatsCard';
import GlassCard from '../components/common/GlassCard';

import { currentUser, pendingRequests } from '../data/mockData';


const VendorDashboard = () => {
  
  const menuItems = [
    { icon: 'dashboard', label: 'Overview', href: '#', isActive: true },
    { icon: 'wine_bar', label: 'Services', href: '#' },
    { icon: 'event_note', label: 'Bookings', href: '#' },
    { icon: 'calendar_month', label: 'Calendar', href: '#' },
    { icon: 'settings', label: 'Settings', href: '#' },
  ];

  const stats = [
    { title: 'Monthly Earnings', value: '$12,450.00', icon: 'payments', trend: { icon: 'trending_up' }, trendValue: '+12%' },
    { title: 'Upcoming Events', value: '18', icon: 'confirmation_number', trendValue: '4 confirmed this weekend' },
    { title: 'Avg. Rating', value: '4.92', icon: 'grade', trendValue: 'Based on 142 reviews' },
  ];

  return (
    <div className="bg-surface min-h-screen flex w-full">
      <Sidebar menuItems={menuItems} user={currentUser} />
      
      <main className="flex-1 md:ml-72 p-6 md:p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
            <span className="label-md text-[0.75rem] tracking-widest uppercase font-bold text-primary mb-2 block">
              Vendor Dashboard
            </span>
            <h1 className="text-4xl font-headline font-bold tracking-tighter text-on-surface">
              Welcome back, Julian.
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-surface-container-low rounded-full">
              <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            </div>
            <Button variant="primaryGradient" size="md">
              Go Online
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-surface-container-low p-10 rounded-xl">
              <h2 className="text-xl font-headline font-bold text-on-surface mb-8">
                Earnings Growth
              </h2>
              <div className="h-64 w-full flex items-end gap-3 px-2">
                {[40, 65, 55, 85, 75, 95].map((h, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-t-lg transition-all duration-500 ${
                      i === 5 ? 'bg-gradient-to-t from-primary to-primary-container' : 'bg-primary/20'
                    }`} 
                    style={{height: `${h}%`}}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-4 px-2 text-[0.65rem] font-bold tracking-widest uppercase text-on-surface-variant">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
            
            <PendingRequests />
          </div>
          
          <div className="space-y-12">
            <TodaySchedule />
            <EditorStatusCard />
          </div>
        </div>
      </main>
    </div>
  );
};

const PendingRequests = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-headline font-bold text-on-surface">Pending Requests</h2>
    {pendingRequests.map((request, index) => (
      <GlassCard key={index} variant="default" className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover" src={request.image} 
              alt={request.event} />
            </div>
            <div>
              <h4 className="font-bold text-on-surface">{request.event}</h4>
              <p className="text-sm text-on-surface-variant">{request.location} • {request.date}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" className="text-error">Decline</Button>
            <Button variant="primary" size="sm">Approve</Button>
          </div>
        </div>
      </GlassCard>
    ))}
  </div>
);

const TodaySchedule = () => (
  <div className="bg-surface-container-low p-8 rounded-xl">
    <h2 className="text-xl font-headline font-bold text-on-surface mb-6">
      Today's Schedule
    </h2>
    <div className="space-y-8 relative pl-4 border-l-2 border-outline-variant/30">
      <ScheduleItem time="10:00 AM" title="Inventory" isPrimary />
      <ScheduleItem time="2:00 PM" title="Prep: Manhattan Gala" />
      <ScheduleItem time="7:00 PM" title="Penthouse Soirée" />
    </div>
  </div>
);

const ScheduleItem = ({ time, title, isPrimary = false }) => (
  <div className="relative">
    <span className={`absolute -left-[25px] top-1.5 w-4 h-4 rounded-full border-2 ${
      isPrimary ? 'border-primary bg-surface' : 'border-outline-variant bg-surface'
    }`} />
    <p className={`text-[0.65rem] font-bold ${isPrimary ? 'text-primary' : 'text-on-surface-variant'}`}>
      {time}
    </p>
    <h5 className="font-bold text-sm text-on-surface">{title}</h5>
  </div>
);

const EditorStatusCard = () => (
  <div className="bg-inverse-surface p-8 rounded-xl text-inverse-on-surface">
    <h2 className="text-xl font-headline font-bold mb-2">Editor's Status</h2>
    <p className="text-on-surface-variant text-sm mb-6">Platinum Tier reached. Visibility boosted.</p>
    <div className="w-full bg-surface-container-high h-2 rounded-full mb-2">
      <div className="bg-primary-container h-full w-[88%] rounded-full shadow-[0_0_15px_rgba(255,122,0,0.5)]" />
    </div>
    <p className="text-[0.6rem] text-on-surface-variant font-bold uppercase">88% of target reached</p>
  </div>
);

export default VendorDashboard;