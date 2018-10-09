export interface Orderbooks {
  asks: Order[];
  bids: Order[];
}

interface Order {
  price: number;
  averagePrice: number;
  remainingVolume: number;
}
