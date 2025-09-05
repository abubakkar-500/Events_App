import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Chat with us</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="h-96 p-4 overflow-y-auto">
            <div className="bg-gray-100 p-3 rounded-lg mb-2">
              Hello! How can I help you today?
            </div>
            {/* Add more chat messages here */}
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;