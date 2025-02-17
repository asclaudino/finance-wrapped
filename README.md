# Finance Wrapped

Finance Wrapped is a humble, full‑stack financial application developed as a project for an internship interview. It combines a FastAPI‑driven backend with a Next.js‑powered frontend to deliver a responsive financial dashboard with smooth animations and a creative Spotify integration.

---

## Overview & Architecture

This project is a modest yet fully integrated solution where the backend and frontend work in harmony to deliver real‑time financial data and a unique user experience. Built with FastAPI for the backend and Next.js for the frontend, Finance Wrapped exemplifies:

- **Backend & Data Integration**:  
  The backend, powered by FastAPI, serves financial data via a RESTful API. Data is populated using a CSV generator script, which simulates and tests various financial scenarios. The backend runs on a Python virtual environment (venv) to ensure dependency isolation and stability.

- **Frontend**:  
  The frontend is built with Next.js and styled using modern CSS frameworks. It features intuitive animations for a smooth user experience and integrates a Spotify component to pull in music data, adding an innovative twist to financial insights.

- **Overall Integration**:  
  Both parts communicate via clean, well‑documented RESTful endpoints. The project’s architecture is straightforward, clean, and designed to demonstrate the ability to learn and implement new technologies quickly.

---

## Getting Started

### Prerequisites

- **Backend**: Python 3.8+ (using a virtual environment)
- **Frontend**: Node.js and npm

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
     python backend/scripts/csv_generator.py
     ```
   - Start the FastAPI server:
     ```bash
     uvicorn backend.main:app --reload
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

3. **Configuration**:
   - Ensure that environment variables (e.g., for Spotify API credentials) are set in a `.env` file for both the backend and frontend as needed.

---

## Future Enhancements

Although Finance Wrapped is a modest project built for an internship interview, there are plenty of opportunities for further development:
- **Expanded Testing**: Implement additional unit and integration tests.
- **Performance Optimization**: Further optimize API responses and bundle sizes.
- **Security Enhancements**: Introduce features like rate limiting and improved authentication.
- **Feature Expansion**: Add more financial analytics, data visualizations, and third‑party integrations.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Finance Wrapped is a testament to my journey in mastering new technologies during an internship interview. I welcome your feedback and contributions—feel free to open an issue or submit a pull request with suggestions and improvements!
