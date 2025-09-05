import React from 'react';
import { Home, Calendar, Users, FileText, Phone, Menu } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
  const menuItems = [
    { icon: <Home size={20} />, text: 'Home', href: '#' },
    { icon: <Calendar size={20} />, text: 'Appointments', href: '#' },
    { icon: <Users size={20} />, text: 'Doctors', href: '#' },
    { icon: <FileText size={20} />, text: 'Services', href: '#' },
    { icon: <Phone size={20} />, text: 'Contact', href: '#' },
  ];

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>
      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-64 z-40`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-8">MedCare</h2>
          <nav>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;