import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function LoginScreen() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
        
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-3 bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors">
            <Mail className="w-5 h-5" />
            Continue with Gmail
          </button>
          
          <button disabled className="w-full flex items-center justify-center gap-3 bg-gray-200 text-gray-500 py-3 px-4 rounded-lg cursor-not-allowed">
            <Mail className="w-5 h-5" />
            Outlook (Coming Soon)
          </button>
          
          <button disabled className="w-full flex items-center justify-center gap-3 bg-gray-200 text-gray-500 py-3 px-4 rounded-lg cursor-not-allowed">
            <Mail className="w-5 h-5" />
            Yahoo (Coming Soon)
          </button>
        </div>
        
        <p className="text-sm text-gray-500 text-center mt-6">
          Right now, we only support Gmail, but others are coming soon!
        </p>
      </motion.div>
    </div>
  );
}