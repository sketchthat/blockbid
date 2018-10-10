"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
function createHmac(apiKey, apiSecret) {
    const nonce = new Date().getTime();
    const rawSignature = `${toBase64(apiKey)}${toBase64(nonce.toString())}`;
    const hmacSignature = crypto.createHmac('sha384', apiSecret)
        .update(rawSignature)
        .digest('base64');
    return {
        'X-Blockbid-Signature': hmacSignature,
        'X-Blockbid-Nonce': nonce,
        'X-Blockbid-Api-Key': apiKey,
    };
}
exports.createHmac = createHmac;
function toBase64(value) {
    return Buffer.from(value).toString('base64');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvYXV0aGVudGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBaUM7QUFJakMsb0JBQTJCLE1BQWMsRUFBRSxTQUFpQjtJQUMxRCxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRW5DLE1BQU0sWUFBWSxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBRXhFLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztTQUN6RCxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVwQixPQUFPO1FBQ0wsc0JBQXNCLEVBQUUsYUFBYTtRQUNyQyxrQkFBa0IsRUFBRSxLQUFLO1FBQ3pCLG9CQUFvQixFQUFFLE1BQU07S0FDN0IsQ0FBQztBQUNKLENBQUM7QUFkRCxnQ0FjQztBQUVELGtCQUFrQixLQUFhO0lBQzdCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0MsQ0FBQyJ9