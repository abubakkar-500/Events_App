import React from 'react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to MedCare Hospital</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80"
            alt="Hospital Building"
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Providing Quality Healthcare
          </h2>
          <p className="text-gray-600 mb-4">
            At MedCare Hospital, we are committed to providing exceptional healthcare services
            with compassion and dedication. Our team of experienced medical professionals
            ensures that you receive the best possible care.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors w-fit">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Emergency Care</h3>
          <p className="text-gray-600">24/7 emergency medical services with state-of-the-art facilities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Specialized Departments</h3>
          <p className="text-gray-600">Expert care across multiple medical specialties.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Online Consultations</h3>
          <p className="text-gray-600">Virtual appointments with our healthcare professionals.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;