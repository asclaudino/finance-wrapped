from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models.savings import Savings
from schemas.savings import SavingsCreate, SavingsRead

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/savings", response_model=List[SavingsRead])
def get_all_savings(db: Session = Depends(get_db)):
    """
    Fetch a list of all Savings entries.
    """
    savings_list = db.query(Savings).all()
    return savings_list

@router.post("/savings", response_model=SavingsRead)
def create_saving(saving: SavingsCreate, db: Session = Depends(get_db)):
    """
    Create a new Savings entry.
    """
    db_saving = Savings(
        year=saving.year,
        month=saving.month,
        day=saving.day,
        hour=saving.hour,
        minutes=saving.minutes,
        value=saving.value
    )
    db.add(db_saving)
    db.commit()
    db.refresh(db_saving)
    return db_saving
