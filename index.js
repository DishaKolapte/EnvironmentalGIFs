// Import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const { getNews } = require("./modules/NewsAPI");
const { getGifs } = require("./modules/GiphyAPI");

// Set up Express app
const app = express();
const port = process.env.PORT || 8888;

app.use(express.urlencoded({ extended: true }));

// Define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Setup public folder
app.use(express.static(path.join(__dirname, "public")));

// PAGE ROUTES
app.get("/", async (request, response) => {
  const category = request.query.category || "Sports";
  const newsData = await getNews(category); // default category
  const gifsData = await getGifs(category); // default category
  response.render("index", { title: "Home", gifsData, newsData });
});

// // API ROUTES
// app.get("/api/category/:category", async (req, res) => {
//   const category = req.params.category;
//   try {
//     const gifsData = await getGifs(category);
//     const newsData = await getNews(category);
//     res.json({ gifs: gifsData, news: newsData });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });

app.post("/category", async (req, res) => {
  const category = req.body.category || "Sports"; // Default category
  const newsData = await getNews(category);
  const gifsData = await getGifs(category);
  res.render("index", { title: "Home", gifsData, newsData });
});

// Set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
