// src/app/components/DashboardLayout.tsx

import React from 'react';
import Link from 'next/link';
import { HomeIcon, BeakerIcon, MapIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-6">AgriSync</h1>
        <nav className="space-y-2">
          <Link href="/dashboard" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
            <HomeIcon className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="#sensor" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
            <BeakerIcon className="h-5 w-5" />
            <span>Data Sensor</span>
          </Link>
          <Link href="#map" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
            <MapIcon className="h-5 w-5" />
            <span>Peta Lokasi</span>
          </Link>
          <Link href="#video" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
            <VideoCameraIcon className="h-5 w-5" />
            <span>Live Video</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Ringkasan Dashboard</h2>
          <p className="text-gray-500 mt-2">Pantau kondisi pertanian secara real-time.</p>
        </header>

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;