from pydantic import BaseModel, condecimal

class SavingsBase(BaseModel):
    year: int
    month: int
    day: int
    hour: int
    minutes: int
    value: condecimal(max_digits=10, decimal_places=2)

class SavingsCreate(SavingsBase):
    pass

class SavingsRead(SavingsBase):
    id: int

    class Config:
        from_attributes = True
