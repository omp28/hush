export interface Receipt {
  id: string;
  fileName: string;
  timestamp: Date;
  autoSynced: boolean;
  amount: number;
  merchant: string;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  isPinned?: boolean;
}