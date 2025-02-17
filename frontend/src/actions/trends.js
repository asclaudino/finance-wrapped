const cache = {};

/**
 * Fetches trend analysis data for a given year and caches the result.
 * If the data for the year is already cached, the cached data is returned.
 *
 * @param {string} year - The year for which to fetch trend data.
 * @returns {Promise<Object>} - The trend analysis data.
 */

export async function fetchTrends(year) {
  // Return cached data if available
  if (cache[year]) {
    return cache[year];
  }

  // Use the BACKEND_URL from your environment (or fallback)
  const backendUrl = process.env.BACKEND_URL || 'http://127.0.0.1:8000';
  const response = await fetch(`${backendUrl}/trend-analysis/${year}`, {
    cache: 'no-store'
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch trends: ${response.status}`);
  }
  
  const data = await response.json();
  cache[year] = data;
  return data;
}
