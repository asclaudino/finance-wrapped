// types/merchants.ts

export interface MerchantData {
    category: string;
    total: number;
  }
  
  export interface TopMerchantsResponse {
    top_merchants: MerchantData[];
  }
  