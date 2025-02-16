export interface TrendItem {
  month: number;
  total: number;
}

export interface FinancialProfile {
  name: string;
  description: string;
  spotify_link: string;
}

export interface TrendResponse {
  top_expenses: TrendItem[];
  top_savings: TrendItem[];
  financial_profile: FinancialProfile;
}
