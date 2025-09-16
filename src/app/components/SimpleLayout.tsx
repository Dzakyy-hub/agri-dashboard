import React from 'react';
import Link from 'next/link';

const SimpleLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="py-4 px-8 flex justify-between items-center bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-green-500 rounded-full"></div>
          <span className="text-xl font-bold text-gray-800">AgriSync <span className="text-sm font-normal text-gray-500">| Part of ZTS</span></span>
        </div>
        <Link href="/" className="px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-100 transition-colors duration-200">
          Kembali ke Beranda
        </Link>
      </header>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default SimpleLayout;