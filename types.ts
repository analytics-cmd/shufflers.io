export interface PromoCode {
  id: string;
  code: string;
  description: string;
  bonus: string;
  expiry: string;
  type: 'Welcome' | 'Reload' | 'VIP';
}

export interface Game {
  id: string;
  title: string;
  provider: string;
  category: string;
  rtp: number;
  image: string;
  volatility: 'Low' | 'Medium' | 'High';
}

export interface ReviewData {
  title: string;
  rating: number;
  content: string;
  author: string;
  date: string;
}

export enum PageRoute {
  HOME = '/',
  REVIEW = '/review',
  REGISTER = '/register',
  PROMOS = '/promos',
  GAMES = '/games',
  LOTTERY = '/lottery'
}