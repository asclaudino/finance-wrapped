from pydantic import BaseModel
from typing import List

class TrendData(BaseModel):
    month: int
    total: float

class TrendResponse(BaseModel):
    top_expenses: List[TrendData]
    top_savings: List[TrendData]
