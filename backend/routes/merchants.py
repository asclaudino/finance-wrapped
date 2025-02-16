from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func
from sqlalchemy.orm import Session
from typing import List

from models import Transaction, Category
from schemas.merchants import TopMerchantsResponse, MerchantData
from database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/top-merchants/{year}", response_model=TopMerchantsResponse)
def get_top_merchants(year: str, db: Session = Depends(get_db)):
    """
    Returns the top 5 categories by accumulated spending for the specified year.
    """
    try:
        top_merchants = (
            db.query(
                Category.name,
                func.sum(Transaction.amount).label("total")
            )
            .join(Category, Transaction.category_id == Category.id)
            .filter(Transaction.year == year)
            .group_by(Category.name)
            .order_by(func.sum(Transaction.amount).desc())
            .limit(5)
            .all()
        )

        return TopMerchantsResponse(
            top_merchants=[MerchantData(category=item[0], total=item[1]) for item in top_merchants]
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
