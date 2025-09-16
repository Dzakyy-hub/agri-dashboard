import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faWhatsapp,
    faFacebookF,
    faLinkedinIn,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SimpleLayout = ({ children }: { children: React.ReactNode }) => {
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

      {/* Social Media Buttons (Fixed at bottom right) */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <a 
            href="https://www.instagram.com/agrisync.zts" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 hover:bg-pink-600 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Instagram"
        >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a 
            href="https://wa.me/6285364694196" // Ganti dengan nomor WhatsApp Anda
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="WhatsApp"
        >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </a>
        <a 
            href="https://www.facebook.com/agrisync_id" // Ganti dengan URL Facebook Anda
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Facebook"
        >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
        <a 
            href="https://www.linkedin.com/company/agri-sync-zts/" // Ganti dengan URL LinkedIn Anda
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-800 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
        >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
        <a 
            href="https://www.youtube.com/channel/agrisync_id" // Ganti dengan URL YouTube Anda
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="YouTube"
        >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
        <a 
            href="mailto:info@agrisync.com" // Ganti dengan alamat email Anda
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-800 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
        >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>
    </div>
  );
};

export default SimpleLayout;