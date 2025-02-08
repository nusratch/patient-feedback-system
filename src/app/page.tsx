import React from 'react';
import { Heart, Clock, Star, ChevronRight, Phone, MessageCircle, Award, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Experience world-class healthcare with compassionate service
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Book Appointment
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-200">Specialists</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-blue-200">Happy Patients</div>
              </div>
              <div>
                <div className="text-3xl font-bold">15+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-200">Emergency Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="text-gray-600 mt-4">Comprehensive healthcare solutions for you and your family</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Emergency Care', desc: '24/7 emergency medical services' },
              { icon: Star, title: 'Expert Doctors', desc: 'Qualified healthcare professionals' },
              { icon: Shield, title: 'Primary Care', desc: 'Regular check-ups and preventive care' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <button className="mt-4 text-blue-600 font-medium flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                {[
                  { icon: Clock, title: 'Quick Appointments', desc: 'Get appointments without long waiting times' },
                  { icon: Award, title: 'Certified Doctors', desc: 'Experienced and board-certified specialists' },
                  { icon: Shield, title: 'Safe & Clean', desc: 'Highest standards of cleanliness and safety' },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg">
              {/* Placeholder for image */}
              <div className="w-full h-full rounded-lg bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need Urgent Care?</h2>
              <p className="text-blue-100 mb-8">Don't wait! Contact us now for immediate assistance</p>
              <div className="flex gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call Now
                </button>
                <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Chat with Us
                </button>
              </div>
            </div>
            <div className="bg-blue-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Emergency Hotline</div>
                    <div className="text-blue-200">1-800-HOSPITAL</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">WhatsApp Support</div>
                    <div className="text-blue-200">+1 234 567 8900</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
              <p className="text-sm">Providing quality healthcare services for over 15 years.</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>Services</li>
                <li>Doctors</li>
                <li>Appointments</li>
                <li>Emergency Care</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>1234 Healthcare Ave</li>
                <li>City, State 12345</li>
                <li>contact@hospital.com</li>
                <li>1-800-HOSPITAL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
              <div className="flex gap-4">
                {/* Social media icons */}
                <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            © 2024 Healthcare Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}