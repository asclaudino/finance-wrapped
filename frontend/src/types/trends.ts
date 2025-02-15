export interface TrendItem {
    month: number;
    total: number;
  }
  
export interface TrendResponse {
    top_expenses: TrendItem[];
    top_savings: TrendItem[];
  }

