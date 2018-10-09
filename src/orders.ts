import { Common } from './common';
import { createHmac } from './services/authentication';

import { OrderRequest } from './interfaces/orders/order-request.interface';
import { Order } from './interfaces/orders/order.interface';

export class Orders {
  private common: Common;

  private apiKey: string;
  private apiSecret: string;

  constructor(
    apiKey?: string,
    apiSecret?: string,
  ) {
    this.common = new Common();

    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }

  public async orders(market: string, state?: string, limit?: number, page?: number): Promise<Order[]> {
    const qs = {
      market,
      state,
      limit,
      page,
    };

    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('GET', '/orders', qs, null, headers);
  }

  public async order(id: number): Promise<Order> {
    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('GET', `/orders/${id}`, null, null, headers);
  }

  public async createOrders(market: string, orders: OrderRequest[]): Promise<Order[]> {
    const body = {
      market,
      orders,
    };

    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('GET', '/orders', null, body, headers);
  }

  public async cancelOrders(side?: string): Promise<Order[]> {
    const body = {
      side,
    };

    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('DELETE', '/orders', null, body, headers);
  }

  public async cancelOrder(id?: number): Promise<Order> {
    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('DELETE', `/orders/${id}`, headers);
  }
}
