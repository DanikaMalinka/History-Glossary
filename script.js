
const boxEl = document.getElementById("overlay");
const termEl = document.getElementById("def-term");
const imageEl = document.getElementById("def-image");
const textEl = document.getElementById("def-text");
const closeBtn = document.getElementById("close-btn");

const listEl = document.getElementById("word-list");

// Fixed order for topics — add more here as you introduce them
const topicOrder = ["Ancient times", "Medieval times"];

topicOrder.forEach(function(topic) {
  const topicWords = words.filter(function(w) { return w.topic === topic; });
  if (topicWords.length === 0) return; // skip empty topics for now

  const heading = document.createElement("h2");
  heading.textContent = topic;
  listEl.appendChild(heading);

  const ul = document.createElement("ul");

  topicWords.forEach(function(word) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = word.term;
    link.addEventListener("click", function(event) {
      event.preventDefault();
      showDefinition(word.id);
    });
    li.appendChild(link);
    ul.appendChild(li);
  });

  listEl.appendChild(ul);
});

function showDefinition(id) {
  const word = words.find(function(w) { return w.id === id; });
  if (!word) return;

  termEl.textContent = word.term;
  textEl.textContent = word.definition;
  imageEl.src = word.image;
  imageEl.style.display = word.image ? "block" : "none";

  boxEl.classList.remove("hidden");
}

closeBtn.addEventListener("click", function() {
  boxEl.classList.add("hidden");
});

const themeToggle = document.getElementById("theme-toggle");

// Default to dark mode, unless the user previously chose light
if (localStorage.getItem("theme") !== "light") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

boxEl.addEventListener("click", function(event) {
  if (event.target === boxEl) {
    boxEl.classList.add("hidden");
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    boxEl.classList.add("hidden");
  }
});