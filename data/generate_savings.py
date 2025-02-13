import csv
import random
import datetime
import argparse

def random_date_2024():
    """Generate a random date in the year 2024."""
    start_date = datetime.date(2024, 1, 1)
    end_date = datetime.date(2024, 12, 31)
    delta = end_date - start_date
    random_days = random.randint(0, delta.days)
    return start_date + datetime.timedelta(days=random_days)

def random_hour_and_minute():
    """Generate a random hour (0-23) and minute (0-59)."""
    hour = random.randint(0, 23)
    minute = random.randint(0, 59)
    return hour, minute

def generate_savings(num_entries, output_file):
    """Generate a CSV file with random savings data for 2024."""
    with open(output_file, mode="w", newline="") as csvfile:
        fieldnames = ["id", "year", "month", "day", "hour", "minutes", "value", "created_at"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()

        for i in range(1, num_entries + 1):
            saving_date = random_date_2024()
            hour, minute = random_hour_and_minute()
            value = round(random.uniform(0.01, 1000.00), 2)
            created_at = datetime.datetime.now().isoformat()  # current local time

            writer.writerow({
                "id": i,
                "year": saving_date.year,
                "month": saving_date.month,
                "day": saving_date.day,
                "hour": hour,
                "minutes": minute,
                "value": value,
                "created_at": created_at,
            })

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate mock savings data CSV file")
    parser.add_argument("-n", "--num_entries", type=int, default=100,
                        help="Number of savings entries to generate (default: 100)")
    parser.add_argument("-o", "--output", type=str, default="savings.csv",
                        help="Output CSV file name (default: savings.csv)")
    args = parser.parse_args()

    generate_savings(args.num_entries, args.output)
    print(f"Generated {args.num_entries} savings entries in '{args.output}'")
