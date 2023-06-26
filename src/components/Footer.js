import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Footer() {

return (


    <footer className="bg-gray-900 py-16 sm:py-16 lg:py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:max-w-none sm:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/product" className="text-gray-400 hover:text-white">Product </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
            </li>
            {/* Add more quick links as needed */}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">Who we are</a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy</a>
            </li>
            {/* Add more quick links as needed */}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Social</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </li>
         
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">More</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/credits" className="text-gray-400 hover:text-white">Credits</a>
            </li>
            <li>
              <a href="/data" className="text-gray-400 hover:text-white">Data Sources</a>
            </li>
          
          </ul>
        </div>
      </div>
      <div className="mt-16 text-center grid grid-cols-1 sm:grid-cols-1 gap-8">
      
     
        <div>
        
          <p className="mt-4 text-gray-400">145 Pine Haven Shores Suite 1000-A, Shelburne, VT, 05482, USA | &copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>

        </div>
      </div>
  
     
    </div>
    <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div
        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  </footer>
  
)

}