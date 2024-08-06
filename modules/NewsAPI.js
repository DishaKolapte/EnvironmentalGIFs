const dotenv = require("dotenv");
dotenv.config();

const BASE_API_URL = "https://newsapi.org/v2/top-headlines?";
const NEWS_API_KEY = process.env.NEWS_API_KEY;

async function getNews(query) {
  const response = await fetch(`${BASE_API_URL}country=ca&q=${query}&apiKey=${NEWS_API_KEY}`);
  const data = await response.json();
  console.log(query);
  console.log(data);
  return data;
}
module.exports = { getNews };
