import { motion } from "framer-motion";
import { ReceiptCard } from "./ReceiptCard";
import { mockReceipts } from "./mockData";

export function ReceiptList() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800 mb-6"
      >
        Recent Receipts
      </motion.h2>
      <div className="space-y-4">
        {mockReceipts.map((receipt, index) => (
          <ReceiptCard key={receipt.id} receipt={receipt} index={index} />
        ))}
      </div>
    </div>
  );
}
