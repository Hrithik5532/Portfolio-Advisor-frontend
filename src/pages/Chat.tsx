import React, { useState } from 'react';
import { Send, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'advisor';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your PortfolioPilot advisor. How can I help you today?",
      sender: 'advisor',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate advisor response
    setTimeout(() => {
      const advisorMessage: Message = {
        id: messages.length + 2,
        text: "I'll analyze your portfolio and get back to you with personalized recommendations shortly.",
        sender: 'advisor',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, advisorMessage]);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold text-gray-900">Live Consultation</h1>
        <p className="text-sm text-gray-500">Chat with your financial advisor</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-2 ${
              message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <div className={`p-2 rounded-full ${
              message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'
            }`}>
              {message.sender === 'user' ? (
                <User className="h-5 w-5 text-blue-600" />
              ) : (
                <Bot className="h-5 w-5 text-gray-600" />
              )}
            </div>
            <div className={`max-w-[70%] rounded-lg p-3 ${
              message.sender === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}>
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1 opacity-70">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;