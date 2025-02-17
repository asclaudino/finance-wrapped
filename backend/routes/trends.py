from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func
from models import Transaction, Savings  
from database import SessionLocal      
from schemas import TrendResponse, TrendData, FinancialProfile

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


    total_expenses = db.query(func.sum(Transaction.amount)).filter(Transaction.year == year).scalar() or 0
    total_savings = db.query(func.sum(Savings.value)).filter(Savings.year == year).scalar() or 0


    if total_savings == 0:
        raise HTTPException(status_code=400, detail="Total savings is zero, unable to compute financial profile.")

    ratio = total_expenses / total_savings

    # Determine financial profile based on ratio intervals, including Spotify link
    if ratio < 0.5:
        profile_name = "The Natural Investor"
        description = "You don’t spend – you strategically reallocate capital!"
        
        #Money Trees – Kendrick Lamar
        spotify_link = "https://open.spotify.com/intl-pt/track/74tLlkN3rgVzRqQJgPfink?si=7131692ce771427c"
    
    elif ratio < 1.0:
        profile_name = "The Planner"
        description = "If money were a game, you’d be in the final level with a 100% completion rate!"
        
        #Money – Pink Floyd
        spotify_link = "https://open.spotify.com/intl-pt/album/4LH4d3cOWNNsVw41Gqt2kv?trackId=0vFOzaXqZHahrZp6enQwQb"
    
    elif ratio < 1.5:
        profile_name = "The Balanced One"
        description = "he secret to your success? Living for today without forgetting about tomorrow!"
        
        #I Will Survive – Gloria Gaynor
        spotify_link = "https://open.spotify.com/intl-pt/track/7rIovIsXE6kMn629b7kDig?si=73ba5cdf4bf54e79"
    
    elif ratio < 2.0:
        profile_name = "The Financial Adventurer"
        description = "Why worry about financial planning when there’s cashback, installments, and travel miles?"
        
        #Work Hard, Play Hard – Wiz Khalifa
        spotify_link = "https://open.spotify.com/intl-pt/track/5OOxMbmz5txzE78oZbGQhY?si=0e12665a44d7486c"
    
    else:
        profile_name = "The Financial Free Spirit "
        description = "Money comes, money goes… in the end, everything works out, right?"
        
        #Deixa a Vida Me Levar – Zeca Pagodinho
        spotify_link = "https://open.spotify.com/intl-pt/track/7bdhM9AJqWAIHooF4sh3wW?si=fc77b68fdd4f44e3"

    financial_profile = FinancialProfile(
        name=profile_name,
        description=description,
        spotify_link=spotify_link
    )

    return TrendResponse(
        top_expenses=top_expenses,
        top_savings=top_savings,
        financial_profile=financial_profile
    )
