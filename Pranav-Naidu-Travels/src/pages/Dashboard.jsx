import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { schedules } from '../data/routes';
import { cars } from '../data/cars';
import { FaCar, FaRoute, FaClock, FaUsers, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaChartLine, FaCalendarCheck } from 'react-icons/fa';
import GlassCard from '../components/UI/GlassCard';
import SectionHeader from '../components/UI/SectionHeader';

const bookings = [
  { id: 'BK001', customer: 'Rajesh Kumar', route: 'Vijayawada → Hyderabad', car: 'Innova Crysta', date: '2026-05-26', status: 'Confirmed', amount: 4200 },
  { id: 'BK002', customer: 'Priya Sharma', route: 'Vijayawada → Tirupati', car: 'Tempo Traveller', date: '2026-05-26', status: 'In Transit', amount: 5500 },
  { id: 'BK003', customer: 'Venkat Reddy', route: 'Guntur → Hyderabad', car: 'BMW 5 Series', date: '2026-05-25', status: 'Completed', amount: 8500 },
  { id: 'BK004', customer: 'Lakshmi Devi', route: 'Vijayawada → Vizag', car: 'Swift Dzire', date: '2026-05-27', status: 'Pending', amount: 3200 },
  { id: 'BK005', customer: 'Arun Teja', route: 'Vijayawada → Chennai', car: 'Toyota Fortuner', date: '2026-05-27', status: 'Confirmed', amount: 6500 },
];

const statusColors = {
  'Confirmed': 'text-green-400 bg-green-500/10 border-green-500/20',
  'In Transit': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  'Completed': 'text-gray-400 bg-gray-500/10 border-gray-500/20',
  'Pending': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
};

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const overviewCards = [
    { icon: FaCalendarCheck, label: 'Active Bookings', value: '24', change: '+12%', color: 'text-green-400' },
    { icon: FaCar, label: 'Vehicles on Road', value: '18', change: '+5%', color: 'text-blue-400' },
    { icon: FaRoute, label: 'Routes Active', value: '12', change: '+3%', color: 'text-purple-400' },
    { icon: FaChartLine, label: "Today's Revenue", value: '₹1.2L', change: '+18%', color: 'text-gold' },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <span className="text-gold text-sm font-semibold tracking-[3px] uppercase mb-2 block">Live</span>
            <h1 className="text-3xl md:text-4xl font-outfit font-bold text-white">
              Booking <span className="gradient-text-gold">Dashboard</span>
            </h1>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <p className="text-white/30 text-xs">Live Time</p>
            <p className="text-gold font-outfit font-bold text-xl">
              {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </p>
          </div>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {overviewCards.map((card, i) => (
            <motion.div key={card.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <GlassCard className="hover:border-gold/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <card.icon className={card.color} />
                  </div>
                  <span className="text-white/40 text-xs">{card.label}</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-white font-outfit font-bold text-2xl">{card.value}</span>
                  <span className="text-green-400 text-xs">{card.change}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Live Schedule */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="font-outfit font-bold text-xl text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Live Travel Schedule
            </h2>
            <div className="space-y-3">
              {schedules.map((s) => (
                <GlassCard key={s.id} className="!p-4 hover:border-gold/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-outfit font-semibold text-white text-sm">{s.route}</h4>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                      s.status === 'On Time' ? 'text-green-400 bg-green-500/10 border-green-500/20' :
                      s.status === 'Delayed' ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' :
                      'text-gray-400 bg-gray-500/10 border-gray-500/20'
                    }`}>
                      {s.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white/40 text-xs">
                    <span className="flex items-center gap-1"><FaCar className="text-gold" /> {s.car}</span>
                    <span className="flex items-center gap-1"><FaClock className="text-gold" /> {s.departure} → {s.arrival}</span>
                    <span className="flex items-center gap-1"><FaUsers className="text-gold" /> {s.seats} seats</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          {/* Recent Bookings */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="font-outfit font-bold text-xl text-white mb-4">Recent Bookings</h2>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left text-white/40 font-medium p-4 text-xs">ID</th>
                      <th className="text-left text-white/40 font-medium p-4 text-xs">Customer</th>
                      <th className="text-left text-white/40 font-medium p-4 text-xs">Route</th>
                      <th className="text-left text-white/40 font-medium p-4 text-xs">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b) => (
                      <tr key={b.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4 text-gold font-mono text-xs">{b.id}</td>
                        <td className="p-4 text-white text-xs">{b.customer}</td>
                        <td className="p-4 text-white/50 text-xs">{b.route}</td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${statusColors[b.status]}`}>
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fleet Status */}
            <h2 className="font-outfit font-bold text-xl text-white mb-4 mt-8">Fleet Status</h2>
            <div className="grid grid-cols-2 gap-3">
              {cars.slice(0, 4).map((car) => (
                <GlassCard key={car.id} className="!p-4 hover:border-gold/20">
                  <h4 className="font-outfit font-semibold text-white text-sm mb-1">{car.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-xs">{car.seats} seats</span>
                    <span className={`flex items-center gap-1 text-xs ${car.available ? 'text-green-400' : 'text-red-400'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${car.available ? 'bg-green-400' : 'bg-red-400'}`} />
                      {car.available ? 'Available' : 'In Use'}
                    </span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
