import { Common } from './common';

import { OrderRequest } from './interfaces/orders/order-request.interface';
import { Order } from './interfaces/orders/order.interface';

export class Orders {
  private common: Common;

  constructor() {
    this.common = new Common();
  }

  public async orders(market: string, state?: string, limit?: number, page?: number): Promise<Order[]> {
    const qs = {
      market,
      state,
      limit,
      page,
    };

    return this.common.request('GET', '/orders', qs);
  }

  public async order(id: number): Promise<Order> {
    return this.common.request('GET', `/orders/${id}`);
  }

  public async createOrders(market: string, orders: OrderRequest[]): Promise<Order[]> {
    const body = {
      market,
      orders,
    };

    return this.common.request('GET', '/orders', null, body);
  }

  public async cancelOrders(side?: string): Promise<Order[]> {
    const body = {
      side,
    };

    return this.common.request('DELETE', '/orders', null, body);
  }

  public async cancelOrder(id?: number): Promise<Order> {
    return this.common.request('DELETE', `/orders/${id}`);
  }
}
