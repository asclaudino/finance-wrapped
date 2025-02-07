import sys
sys.dont_write_bytecode = True # prevents __pycache__ folders
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



user = 'postgres'
password = 'postgres'
hostname = 'localhost'
port = 5432
databasename = 'finance-wrapped' 


SQLALCHEMY_DATABASE_URL = f'postgresql://{user}:{password}@{hostname}:{port}/{databasename}'

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()