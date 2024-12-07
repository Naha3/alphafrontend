export interface HistoryItem {
    date: string;          // The date of the submission
    description: string;   // Description of the submission
    approved: number;      // Number of approved submissions
    deferred: number;      // Number of deferred submissions
    channel: string;       // The channel through which the submission was made
    amount: string;        // The amount associated with the submission
  }
  