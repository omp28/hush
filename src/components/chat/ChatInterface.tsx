import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Image, MoreVertical } from 'lucide-react';
import type { Message } from '../../types';

const mockMessages: Message[] = [
  {
    id: '1',
    content: "Hello! How can I help you with your receipts today?",
    sender: 'assistant',
    timestamp: new Date(),
  },
  {
    id: '2',
    content: "I need help finding a receipt from last week's grocery shopping",
    sender: 'user',
    timestamp: new Date(),
  }
];

export function ChatInterface() {
  const [messages] = useState<Message[]>(mockMessages);
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Image className="w-6 h-6 text-gray-500" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your receipts..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Send className="w-6 h-6 text-blue-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MoreVertical className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}