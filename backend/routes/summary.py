from fastapi import FastAPI, Depends, APIRouter
from database import SessionLocal
from sqlalchemy import func
from sqlalchemy.orm import Session
from pydantic import BaseModel
from datetime import datetime
from models import Transaction
from schemas import SummaryResponse

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/summary/{year}", response_model=SummaryResponse)
def get_summary(year: int, db: Session = Depends(get_db)):
    # Calculate the total spent by summing up the 'amount' field in transactions for the given year
    total = db.query(func.sum(Transaction.amount)) \
              .filter(Transaction.year == year) \
              .scalar() or 0.0
              
    return SummaryResponse(total_spent=total)
