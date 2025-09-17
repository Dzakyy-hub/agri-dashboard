import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      
      {/* Header & Navigasi */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center bg-white shadow-md">
        <div className="flex items-center space-x-2">
            <Image src="/agrisync-logo.png" alt="AgriSync Logo" width={32} height={32} />
            <span className="font-bold text-lg text-gray-800">AgriSync <span className="text-sm font-normal text-gray-500 hidden md:inline-block">| Member of Zona Technology Solution</span></span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Login
          </Link>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-16 w-full max-w-6xl mx-auto px-6">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
            Menciptakan Masa Depan Pertanian dengan Teknologi Cerdas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-lg">
            Sistem pemantauan lingkungan AgriSync dirancang untuk meningkatkan produktivitas pertanian secara berkelanjutan.
          </p>
          <Link href="/about" className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-colors inline-flex items-center space-x-2">
            <span>Pelajari Lebih Lanjut</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 12h-11m0 0l4-4m-4 4l4 4" />
            </svg>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <Image src="/agrisync-visual.jpg" alt="AgriSync Visual" width={700} height={400} className="w-full rounded-xl shadow-2xl" />
        </div>
      </div>
    </main>
  );
}