from pydantic import BaseModel, condecimal
from typing import List

class MerchantData(BaseModel):
    category: str
    total: condecimal(max_digits=10, decimal_places=2)

class TopMerchantsResponse(BaseModel):
    top_merchants: List[MerchantData]
