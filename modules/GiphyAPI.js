const dotenv = require("dotenv");
dotenv.config();

const BASE_API_URL = "https://api.giphy.com/v1/gifs/search";
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

async function getGifs(query) {
  const response = await fetch(
    `${BASE_API_URL}?api_key=${GIPHY_API_KEY}&q=${query}&limit=10&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`
  );
  const data = await response.json();
  return data;
}
module.exports = { getGifs };
