import React from 'react'
import { FiMail, FiPhone, FiClock, FiInstagram, FiFacebook } from 'react-icons/fi';
import { Separator } from '../ui/separator';

export default function Footer() {
  return (
    <footer id='contact' className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Details */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 mb-8">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <FiPhone className="mr-2 text-2xl" />
                <div>
                  <h4 className="font-bold">Thomas</h4>
                  <p className="text-gray-300">Phone Number: 08123456789</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <FiPhone className="mr-2 text-2xl" />
                <div>
                  <h4 className="font-bold">Sekar</h4>
                  <p className="text-gray-300">Phone Number: 08164829372</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <FiMail className="mr-2 text-2xl" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-300">info@example.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 mb-8">
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-gray-300">
              Jl. Contoh No. 123, Surabaya, Indonesia
            </p>
          </div>

          {/* Operating Hours */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 mb-8">
            <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <FiClock className="mr-2 text-2xl" />
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 7:00 PM</p>
              </div>
              <div className="flex items-center mb-2">
                <FiClock className="mr-2 text-2xl" />
                <p className="text-gray-300">Saturday: 10:00 AM - 5:00 PM</p>
              </div>
              <div className="flex items-center mb-2">
                <FiClock className="mr-2 text-2xl" />
                <p className="text-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 mb-8">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FiInstagram className="text-3xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FiFacebook className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <Separator />
        <p className="text-gray-300 text-center mt-5">
          © 2024 SEA Salon. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
