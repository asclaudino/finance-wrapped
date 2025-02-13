from pydantic import BaseModel

class SavingsBase(BaseModel):
    year: int
    month: int
    day: int
    hour: int
    minutes: int
    value: float

class SavingsCreate(SavingsBase):
    """
    Use this schema when creating a new Savings entry.
    """
    pass

class SavingsRead(SavingsBase):
    id: int

    class Config:
        orm_mode = True
