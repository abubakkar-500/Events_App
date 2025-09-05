import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onLearnMore: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onLearnMore }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {event.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{event.venue}</span>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{event.description}</p>
        
        <button
          onClick={() => onLearnMore(event)}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;