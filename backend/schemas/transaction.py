from pydantic import BaseModel, condecimal
from datetime import time
from typing import Optional

class TransactionBase(BaseModel):
    amount: condecimal(max_digits=10, decimal_places=2)
    day: int
    month: int
    year: int
    time: time
    category_id: int

class TransactionCreate(TransactionBase):
    pass

class TransactionResponse(TransactionBase):
    id: int

    class Config:
        from_attributes = True 
