import React from 'react';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar Navigasi */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-6">
        <div className="flex items-center space-x-2">
            <img src="/agrisync-logo-light.png" alt="AgriSync Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg">AgriSync <span className="text-sm font-normal text-gray-400 block">Member of ZTS</span></span>
        </div>
        <nav className="space-y-2">
          <Link href="/dashboard" className="flex items-center space-x-3 text-lg font-medium p-2 rounded-lg bg-green-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>Dashboard</span>
          </Link>
          <Link href="/" className="flex items-center space-x-3 text-lg font-medium p-2 rounded-lg hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Beranda</span>
          </Link>
        </nav>
      </aside>

      {/* Konten Utama Dashboard */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Ringkasan Dashboard</h1>
            <div className="text-right text-sm text-gray-500">
                <span>Hi, Dzaky 👋</span>
                <span>Kamis, 11 September 2025</span>
                <span>Lokasi: Depok, Indonesia</span>
            </div>
        </div>
        <p className="text-gray-600 mb-8">Pantau kondisi pertanian secara real-time.</p>

        {/* Indikator Cuaca dan Tanah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <h4 className="text-lg font-semibold text-gray-700">Suhu Udara</h4>
                <p className="text-3xl font-bold text-green-600 mt-2">31.28 <span className="text-lg">°C</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <h4 className="text-lg font-semibold text-gray-700">Kelembaban Udara</h4>
                <p className="text-3xl font-bold text-green-600 mt-2">75.42 <span className="text-lg">%</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <h4 className="text-lg font-semibold text-gray-700">Kelembaban Tanah</h4>
                <p className="text-3xl font-bold text-green-600 mt-2">26.45 <span className="text-lg">%</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <h4 className="text-lg font-semibold text-gray-700">pH Tanah</h4>
                <p className="text-3xl font-bold text-green-600 mt-2">5.5</p>
            </div>
        </div>

        {/* Peta Lokasi */}
        <div className="mb-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Peta Lokasi</h4>
            <div className="bg-white p-4 rounded-xl shadow-md">
                <img src="/map-placeholder.jpg" alt="Peta Lokasi" className="w-full h-96 object-cover rounded-lg" />
            </div>
        </div>

        {/* Video Monitoring */}
        <div className="mb-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Video Monitoring</h4>
            <div className="bg-gray-900 h-96 rounded-xl shadow-md flex items-center justify-center">
                <span className="text-white text-xl">Video akan tampil di sini</span>
            </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;