export type TradesOrderByType = 'asc' | 'desc';

export interface Trades {
  id: number;
  price: number;
  volume: number;
  funds: number;
  market: string;
  createdAt: string;
  side: string;
}
