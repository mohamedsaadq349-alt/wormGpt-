
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChaosState {
  level: number; // 0 to 100
  isGlitching: boolean;
}

export interface WormImage {
  url: string;
  prompt: string;
}
