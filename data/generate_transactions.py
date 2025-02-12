import csv
import random
import datetime
import argparse

CATEGORIES = ["Food", "Housing", "Transportation", "Shopping", "Leisure", "Trips", "Health"]

def random_date_2024():
    """Generate a random date in the year 2024."""
    start_date = datetime.date(2024, 1, 1)
    end_date = datetime.date(2024, 12, 31)
    delta = end_date - start_date
    random_days = random.randint(0, delta.days)
    return start_date + datetime.timedelta(days=random_days)

def random_time():
    """Generate a random time (HH:MM:SS)."""
    hour = random.randint(0, 23)
    minute = random.randint(0, 59)
    second = random.randint(0, 59)
    return datetime.time(hour, minute, second)

def generate_transactions(num_entries, output_file):
    """Generate a CSV file with random transaction data."""
    with open(output_file, mode="w", newline="") as csvfile:
        fieldnames = ["id", "amount", "day", "month", "year", "time", "category_id"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for i in range(1, num_entries + 1):
            transaction_date = random_date_2024()
            transaction_time = random_time()
            amount = round(random.uniform(0.01, 10000), 2)
            category_id = random.randint(1, len(CATEGORIES))
            writer.writerow({
                "id": i,
                "amount": amount,
                "day": transaction_date.day,
                "month": transaction_date.month,
                "year": transaction_date.year,
                "time": transaction_time.strftime("%H:%M:%S"),
                "category_id": category_id,
            })

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate mock transactions CSV file")
    parser.add_argument("-n", "--num_entries", type=int, default=100,
                        help="Number of transactions to generate (default: 100)")
    parser.add_argument("-o", "--output", type=str, default="transactions.csv",
                        help="Output CSV file name (default: transactions.csv)")
    args = parser.parse_args()
    generate_transactions(args.num_entries, args.output)
    print(f"Generated {args.num_entries} transactions in '{args.output}'")
