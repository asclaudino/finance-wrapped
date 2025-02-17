// const cache = {};

/**
 * Fetches summary data for a given year and caches the result.
 * If data for the specified year is already cached, returns the cached data.
 *
 * @param {string} year - The year for which to fetch summary data.
 * @returns {Promise<Object>} - The summary data.
 */

export async function fetchSummary(year) {

  // if (cache[year]) {
  //   return cache[year];
  // }

  // Use the BACKEND_URL from your environment (or fallback)
  const backendUrl = process.env.BACKEND_URL || 'http://127.0.0.1:8000';
  // const response = await fetch(`${backendUrl}/summary/${year}`, {
  //   cache: 'no-store'
  // });

  const response = await fetch(`${backendUrl}/summary/${year}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch summary: ${response.status}`);
  }

  const data = await response.json();
  // cache[year] = data;
  return data;
}
