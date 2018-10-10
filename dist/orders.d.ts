import { OrderRequest } from './interfaces/orders/order-request.interface';
import { Order } from './interfaces/orders/order.interface';
export declare class Orders {
    private common;
    private apiKey;
    private apiSecret;
    constructor(apiKey?: string, apiSecret?: string);
    orders(market: string, state?: string, limit?: number, page?: number, orderBy?: string): Promise<Order[]>;
    order(id: number): Promise<Order>;
    createOrders(market: string, orders: OrderRequest[]): Promise<Order[]>;
    cancelOrders(side?: string): Promise<Order[]>;
    cancelOrder(id: number): Promise<Order>;
}
