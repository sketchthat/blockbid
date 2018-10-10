import { HmacResponse } from './interfaces/hmacResponse.interface';
export declare class Common {
    private uri;
    constructor();
    request(method: string, path: string, qs?: object, body?: object, headers?: HmacResponse): Promise<any>;
    private buildParams;
}
