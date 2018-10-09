export type OhlcPeriodType = 1 | 5 | 15 | 30 | 60 | 120 | 240 | 360 | 720 | 1440 | 4320 | 10080;

export interface Ohlc {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}
