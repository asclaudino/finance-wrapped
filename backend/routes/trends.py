from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from models import Transaction, Savings  
from database import SessionLocal      
from schemas import TrendResponse, TrendData

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/trend-analysis/{year}", response_model=TrendResponse)
def get_trends(year: int, db: Session = Depends(get_db)):

    expenses_query = (
        db.query(Transaction.month, func.sum(Transaction.amount).label("total"))
          .filter(Transaction.year == year)
          .group_by(Transaction.month)
          .order_by(func.sum(Transaction.amount).desc())
          .limit(6)
    )
    top_expenses = [TrendData(month=month, total=total) for month, total in expenses_query]

    savings_query = (
        db.query(Savings.month, func.sum(Savings.value).label("total"))
          .filter(Savings.year == year)
          .group_by(Savings.month)
          .order_by(func.sum(Savings.value).desc())
          .limit(6)
    )
    top_savings = [TrendData(month=month, total=total) for month, total in savings_query]

    return TrendResponse(top_expenses=top_expenses, top_savings=top_savings)
