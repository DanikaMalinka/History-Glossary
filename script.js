const boxEl = document.getElementById("overlay");
const termEl = document.getElementById("def-term");
const imageEl = document.getElementById("def-image");
const textEl = document.getElementById("def-text");
const closeBtn = document.getElementById("close-btn");
const contentEl = document.getElementById("content");

function createGlossaryLink(wordId) {
  const word = words.find(function(w) { return w.id === wordId; });
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = word ? word.term : wordId;
  link.addEventListener("click", function(event) {
    event.preventDefault();
    showDefinition(wordId);
  });
  li.appendChild(link);
  return li;
}

topics.forEach(function(topic) {
  const row = document.createElement("div");
  row.className = "topic-row";

  // Column 1: topic name
  const nameCol = document.createElement("div");
  nameCol.className = "topic-name";
  nameCol.textContent = topic.name;
  row.appendChild(nameCol);

  // Column 2: main text
  const textCol = document.createElement("div");
  textCol.className = "main-text";
  topic.sections.forEach(function(section) {
    const h3 = document.createElement("h3");
    h3.textContent = section.heading;
    const p = document.createElement("p");
    p.textContent = section.text;
    textCol.appendChild(h3);
    textCol.appendChild(p);
  });
  row.appendChild(textCol);

  // Column 3: glossary, grouped by category
  const glossCol = document.createElement("div");
  glossCol.className = "glossary-col";
  Object.keys(topic.glossary).forEach(function(groupName) {
    const h4 = document.createElement("h4");
    h4.textContent = groupName;
    glossCol.appendChild(h4);

    const ul = document.createElement("ul");
    topic.glossary[groupName].forEach(function(wordId) {
      ul.appendChild(createGlossaryLink(wordId));
    });
    glossCol.appendChild(ul);
  });
  row.appendChild(glossCol);

  contentEl.appendChild(row);
});

function showDefinition(id) {
  const word = words.find(function(w) { return w.id === id; });
  if (!word) return;

  termEl.textContent = word.term;
  textEl.textContent = word.definition;

  const mapEl = document.getElementById("def-map");

  if (word.mapBox) {
    imageEl.style.display = "none";
    mapEl.innerHTML = '<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=' + word.mapBox + '&layer=mapnik" loading="lazy"></iframe>';
  } else {
    mapEl.innerHTML = "";
    imageEl.src = word.image;
    imageEl.style.display = word.image ? "block" : "none";
  }

  boxEl.classList.remove("hidden");
}

closeBtn.addEventListener("click", function() {
  boxEl.classList.add("hidden");
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

const themeToggle = document.getElementById("theme-toggle");

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
