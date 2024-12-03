
import type { Receipt } from '../../types';

export const mockReceipts: Receipt[] = [
  {
    id: '1',
    fileName: 'Amazon Purchase - Electronics',
    timestamp: new Date('2024-03-10'),
    autoSynced: true,
    amount: 299.99,
    merchant: 'Amazon'
  },
  {
    id: '2',
    fileName: 'Whole Foods Grocery',
    timestamp: new Date('2024-03-09'),
    autoSynced: false,
    amount: 85.50,
    merchant: 'Whole Foods'
  },
  {
    id: '3',
    fileName: 'Office Supplies',
    timestamp: new Date('2024-03-08'),
    autoSynced: true,
    amount: 45.99,
    merchant: 'Staples'
  },
  {
    id: '4',
    fileName: 'Restaurant Dinner',
    timestamp: new Date('2024-03-07'),
    autoSynced: true,
    amount: 78.25,
    merchant: 'Olive Garden'
  },
  {
    id: '5',
    fileName: 'Gas Station',
    timestamp: new Date('2024-03-06'),
    autoSynced: true,
    amount: 42.50,
    merchant: 'Shell'
  }
];