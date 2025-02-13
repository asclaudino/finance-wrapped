from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class SummaryResponse(BaseModel):
    total_spent: float
    total_saved: float
    