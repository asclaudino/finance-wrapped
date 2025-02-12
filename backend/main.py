import sys
sys.dont_write_bytecode = True # prevents __pycache__ foldersnpm run dev 


from routes import category, transactions
from database import Base, engine  
import models
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Category
from schemas import CategoryCreate, CategoryResponse



app = FastAPI()

def create_tables():
    print("Ensuring database tables exist...")
    Base.metadata.create_all(bind=engine)

# Run table creation on startup
@app.on_event("startup")
async def startup_event():
    create_tables()

app.include_router(category.router)
app.include_router(transactions.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}