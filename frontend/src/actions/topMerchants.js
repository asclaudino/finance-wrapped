const cache = {};

/**
 * Fetches top merchant data for a given year and caches the result.
 * If the data for the year is already cached, the cached data is returned.
 *
 * @param {string} year - The year for which to fetch top merchant data.
 * @returns {Promise<Object>} - The top merchant data.
 */
export async function fetchTopMerchants(year) {
  // Return cached data if available
  if (cache[year]) {
    return cache[year];
  }

  // Use the BACKEND_URL from your environment (or fallback)
  const backendUrl = process.env.BACKEND_URL || 'http://127.0.0.1:8000';
  const response = await fetch(`${backendUrl}/top-merchants/${year}`, {
    cache: 'no-store'
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch top merchants: ${response.status}`);
  }
  
  const data = await response.json();
  cache[year] = data;
  return data;
}
