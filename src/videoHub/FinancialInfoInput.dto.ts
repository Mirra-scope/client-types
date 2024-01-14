export interface CreateFinancialInfoInput {
  
  NetProfit: number;

  
  Budget: number;

  Revenue: number;
}

export interface UpdateFinancialInfoInput {
  NetProfit?: number;
  Budget?: number;
  Revenue?: number;
}