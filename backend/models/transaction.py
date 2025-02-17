from sqlalchemy import Column, Integer, ForeignKey, Numeric, Date, Time
from sqlalchemy.orm import relationship
from database import Base


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Numeric(10, 2), nullable=False)
    day = Column(Integer, nullable=False)
    month = Column(Integer, nullable=False)
    year = Column(Integer, nullable=False)
    time = Column(Time, nullable=False)
    
    category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)

    # Relationship with Category
    category = relationship("Category", back_populates="transactions")
