from database import Base
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text
from sqlalchemy.orm import relationship


class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer,primary_key=True,nullable=False)
    name = Column(String,nullable=False)
    description = Column(String,nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=text('now()'))
    
    # Relationship with Transaction to easily query all transactions 
    # from a given category
    transactions = relationship("Transaction", back_populates="category")