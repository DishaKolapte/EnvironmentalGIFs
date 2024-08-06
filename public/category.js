document.querySelectorAll(".category-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const category = button.dataset.category;
    try {
      const response = await fetch(`/api/category/${category}`);
      const data = await response.json();

      // Update GIF
      const gifEmbed = document.getElementById("gif-embed");
      gifEmbed.src = data.gifs.data[0].embed_url;

      // Update news content
      const newsContainer = document.querySelector(".news-container");
      newsContainer.innerHTML = data.news.articles
        .map(
          (article) => `
        <div class="news-article">
          <h2 class="news-title">${article.title}</h2>
          <p class="news-description">${article.description}</p>
        </div>
      `
        )
        .join("");

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });
});
