import { motion } from "framer-motion";
import {
  Receipt,
  Calendar,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Store,
} from "lucide-react";
import type { Receipt as ReceiptType } from "../../types";
import { useState } from "react";

interface ReceiptCardProps {
  receipt: ReceiptType;
  index: number;
}

export function ReceiptCard({ receipt, index }: ReceiptCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Receipt className="w-5 h-5 text-blue-500" />
            <div>
              <h3 className="font-medium">{receipt.fileName}</h3>
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <Calendar className="w-4 h-4" />
                {receipt.timestamp.toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {receipt.autoSynced ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <X className="w-5 h-5 text-red-500" />
            )}
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden border-t border-gray-100"
      >
        <div className="p-4 space-y-3 bg-gray-50">
          <div className="flex items-center gap-2 text-gray-600">
            <Store className="w-4 h-4" />
            <span className="text-sm">Merchant: {receipt.merchant}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm">
              Amount: ${receipt.amount.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              Date:{" "}
              {receipt.timestamp.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
