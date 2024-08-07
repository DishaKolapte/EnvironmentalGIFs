// Import required modules
const express = require("express");
const router = express.Router();

const { getNews } = require("../modules/NewsAPI");
const { getGifs } = require("../modules/GiphyAPI");

// PAGE ROUTES
router.get("/", async (request, response) => {
  const category = request.query.category || "Sports";
  const newsData = await getNews(category); // default category
  const gifsData = await getGifs(category); // default category
  response.render("index", { title: "Home", gifsData, newsData });
});

router.get("/about", async (request, response) => {
  response.render("about", { title: "About" });
});

router.post("/category", async (req, res) => {
  const category = req.body.category || "Sports"; // Default category
  const newsData = await getNews(category);
  const gifsData = await getGifs(category);
  res.render("index", { title: "Home", gifsData, newsData });
});

module.exports = router;
