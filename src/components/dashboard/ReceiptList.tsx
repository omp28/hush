import { motion } from 'framer-motion';
import { Receipt, Calendar, Check, X } from 'lucide-react';
import type { Receipt as ReceiptType } from '../../types';

const mockReceipts: ReceiptType[] = [
  {
    id: '1',
    fileName: 'Amazon Purchase',
    timestamp: new Date(),
    autoSynced: true,
    amount: 29.99,
    merchant: 'Amazon'
  },
  {
    id: '2',
    fileName: 'Grocery Store',
    timestamp: new Date(),
    autoSynced: false,
    amount: 85.50,
    merchant: 'Whole Foods'
  }
];

export function ReceiptList() {
  return (
    <div className="space-y-4">
      {mockReceipts.map((receipt, index) => (
        <motion.div
          key={receipt.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md p-4"
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
            {receipt.autoSynced ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <X className="w-5 h-5 text-red-500" />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}