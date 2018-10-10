import * as crypto from 'crypto';

import { HmacResponse } from '../interfaces/hmacResponse.interface';

export function createHmac(apiKey: string, apiSecret: string): HmacResponse {
  const nonce = Date.now();

  const rawSignature = toBase64(apiKey) + toBase64(nonce.toString());

  const hmacSignature = crypto.createHmac('sha384', apiSecret)
    .update(rawSignature)
    .digest('base64');

  return {
    'X-Blockbid-Signature': hmacSignature,
    'X-Blockbid-Nonce': nonce,
    'X-Blockbid-Api-Key': apiKey,
  };
}

function toBase64(value: string): string {
  return Buffer.from(value).toString('base64');
}
