import { motion } from "framer-motion";
import { Receipt } from "lucide-react";
import { Link } from "react-router-dom";

export function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <Receipt className="w-20 h-20 text-white mb-4 mx-auto" />
        <h1 className="text-4xl font-bold text-white mb-2">Valet Chat</h1>
        <p className="text-blue-100 mb-6">Your personal receipt assistant</p>

        {/* Navigation Buttons */}
        <div className="space-x-4">
          <Link to="/login">
            <button className="px-6 py-2 bg-white text-blue-500 font-bold rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300">
              Login
            </button>
          </Link>
          <Link to="/chat">
            <button className="px-6 py-2 bg-white text-blue-500 font-bold rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300">
              Chat
            </button>
          </Link>
          <Link to="/receipts">
            <button className="px-6 py-2 bg-white text-blue-500 font-bold rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300">
              Receipts
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
