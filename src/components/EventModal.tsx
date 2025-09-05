import React from 'react';
import { X, Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../types';

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!isOpen || !event) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {event.category}
            </span>
          </div>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{event.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-3 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{formatDate(event.date)}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-3 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-medium">{event.time}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-3 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Venue</p>
                <p className="font-medium">{event.venue}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">About This Event</h3>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Location</h3>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-y-2b8s&q=${encodeURIComponent(event.venue)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium">
              RSVP / Register
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;