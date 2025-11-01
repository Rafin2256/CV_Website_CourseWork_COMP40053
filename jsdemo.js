// ✅ Change background color
document.getElementById("colorBtn").addEventListener("click", function () {
    const colors = ["#ff9999", "#99ccff", "#ccffcc", "#ffff99"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  });
  
  // ✅ Fetch joke from external API (replaced quote API)
  document.getElementById("quoteBtn").addEventListener("click", function () {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then(response => response.json())
      .then(data => {
        document.getElementById("quoteDisplay").textContent = data.joke;
      })
      .catch(error => {
        console.error("Error fetching joke:", error);
        document.getElementById("quoteDisplay").textContent = "Failed to load joke.";
      });
  });
  
  // ✅ Load data from local JSON file
  document.getElementById("loadDataBtn").addEventListener("click", function () {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const list = document.getElementById("dataList");
        list.innerHTML = "";
        data.items.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          list.appendChild(li);
        });
      });
  });
  
  // ✅ Move SVG circle
  document.getElementById("moveBtn").addEventListener("click", function () {
    const circle = document.getElementById("myCircle");
    const randomX = Math.floor(Math.random() * 100);
    circle.setAttribute("cx", randomX);
  });
  