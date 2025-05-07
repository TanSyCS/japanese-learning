'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 p-4 border-t border-blue-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/mascot.png" // 
            alt="Night Owl Logo"
            width={50}
            height={50}
            className="rounded-full mr-2"
          />
          <span className="text-lg font-semibold text-gray-800">Night Owl</span>
        </div>

        {/* Info Section */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
          <div>
            <h3 className="font-semibold">Info</h3>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:text-blue-600">About us</a></li>
              <li><a href="/terms" className="hover:text-blue-600">Terms of use</a></li>
              <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div>
            <h3 className="font-semibold">Get in touch</h3>
            <ul className="space-y-1">
              <li><a href="/contact" className="hover:text-blue-600">Contact us</a></li>
              <li><a href="/request" className="hover:text-blue-600">Request a topic for a lesson</a></li>
            </ul>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <span>𝙛</span> {/* Unicode cho biểu tượng Facebook */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <span>𝕩</span> {/* Unicode cho biểu tượng Twitter/X */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <span>📷</span> {/* Unicode cho biểu tượng Instagram */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}