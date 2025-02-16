from pydantic import BaseModel
from typing import List

class TrendData(BaseModel):
    month: int
    total: float

class FinancialProfile(BaseModel):
    name: str
    description: str
    spotify_link: str

class TrendResponse(BaseModel):
    top_expenses: List[TrendData]
    top_savings: List[TrendData]
    financial_profile: FinancialProfile
