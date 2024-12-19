const axios = require('axios');

const apiClient = axios.create({
  baseURL: process.env.FOOTBALL_API_BASE_URL,
  headers: { 'X-Auth-Token': process.env.FOOTBALL_API_KEY },
});

async function fetchData(endpoint) {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error.message);
    throw error.response ? error.response.data : { error: 'Unknown error' };
  }
}

module.exports = { fetchData };