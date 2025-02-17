# Finance Wrapped



<p align="center">
  <img src="[https://example.com/path/to/image.png](https://github.com/user-attachments/assets/5d88aebb-6b15-4e0d-8a7b-353869e267e3)" alt="Alt Text">
</p>

Finance Wrapped is a full‑stack financial application developed as a project for an internship interview. It combines a FastAPI‑driven/PostgreSQL backend with a Next.js‑powered frontend to deliver a responsive financial dashboard with smooth animations and a creative Spotify integration.

---

## Overview & Architecture

This project is a modest yet fully integrated solution where the backend and frontend work together to deliver financial data and a unique user experience. Built with FastAPI for the backend and Next.js for the frontend, Finance Wrapped exemplifies:

- **Backend & Data Integration**:  
  The backend, powered by FastAPI, serves financial data via a RESTful API. Data is populated using a CSV generator script, which generates random financial transactions/savings. The backend runs on a Python virtual environment (venv) to ensure dependency isolation and stability.

- **Frontend**:  
  The frontend is built with Next.js. It features intuitive animations with framer-motion package for a smooth user experience and integrates a Spotify component to pull in music data, adding an innovative twist to financial insights.

- **Overall Integration**:  
  Both parts communicate via RESTful endpoints. 

---

## Getting Started

### Prerequisites

- **Backend**:  Python 3.8+ (using a virtual environment)
- **Frontend**: Next.js

### Setup & Installation

1. **Backend Setup**:
   - Create and activate a virtual environment:
     ```bash
     python -m venv venv
     source venv/bin/activate   # On Windows use `venv\Scripts\activate`
     ```
   - Install backend dependencies:
     ```bash
     pip install -r backend/requirements.txt
     ```
   - Populate the backend database using the CSV generator script:
     ```bash
      python generate_savings.py -n 500 -o savings.csv
      python generate_transactions.py -n 500 -o transactions.csv
     ```
   - Start the FastAPI server:
     ```bash
     make start
     ```

2. **Frontend Setup**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install the necessary packages:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```
---

## Future Enhancements

Although Finance Wrapped is a modest project built for an internship interview, there are plenty of opportunities for further development:

- **Enhance Page Transition Animations**: Further refine and polish the transitions between pages to provide an even smoother and more engaging user experience.
- **Add More Data Analysis**: Expand the financial data analysis features to offer deeper insights and more comprehensive visualizations.
- **Enhance Overall Designs**: Improve the overall aesthetic and usability of the application, ensuring a cohesive and modern design across all interfaces.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

I welcome your feedback and contributions—feel free to open an issue or submit a pull request with suggestions and improvements!
