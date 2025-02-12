// src/actions/summary.js

export async function fetchSummary(year) {
    // Use the BACKEND_URL from your environment (or fallback)
    const backendUrl = process.env.BACKEND_URL || 'http://0.0.0.0:5000';
    const response = await fetch(`${backendUrl}/summary/${year}`, {
      // Disable caching to always fetch fresh data (optional)
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch summary: ${response.status}`);
    }
    return response.json();
  }
  