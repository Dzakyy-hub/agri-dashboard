"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HomeIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';

interface User {
  name: string;
}

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('agriUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }

    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setCurrentDateTime(now.toLocaleDateString('id-ID', options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('agriUser');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-4 space-y-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6">AgriSync</h1>
          <nav className="space-y-2">
            {/* Tombol yang mengarah ke dashboard, dengan tulisan "Dashboard" */}
            <Link href="/dashboard" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
              <HomeIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            
            {/* Tombol yang mengarah ke beranda, dengan tulisan "Beranda" */}
            <Link href="/" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
              <span className="text-lg">⬅️ Beranda</span>
            </Link>
          </nav>
        </div>
        
        {user && (
          <div className="mt-auto">
            <button onClick={handleLogout} className="w-full flex items-center justify-center space-x-2 p-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors duration-200">
              <ArrowLeftOnRectangleIcon className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Ringkasan Dashboard</h2>
            <p className="text-gray-500 mt-2">Pantau kondisi pertanian secara real-time.</p>
          </div>
          <div className="text-right">
            {user && (
              <p className="text-lg font-semibold text-gray-800">Hi, {user.name} 👋</p>
            )}
            <p className="text-sm text-gray-500">{currentDateTime}</p>
            <p className="text-sm text-gray-500">Lokasi: Depok, Indonesia</p>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;