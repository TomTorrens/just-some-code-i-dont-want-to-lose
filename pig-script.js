// Add a background animation to the header
var header = document.querySelector("header");
var colors = ["#F5A623", "#1F1F1F"];
var currentColor = 0;

setInterval(function() {
  header.style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
}, 1000);

// Add a hover effect to the game review links
var reviewLinks = document.querySelectorAll("#reviews a");

for (var i = 0; i < reviewLinks.length; i++) {
  reviewLinks[i].addEventListener("mouseenter", function() {
    this.style.color = "#F5A623";
  });
  reviewLinks[i].addEventListener("mouseleave", function() {
    this.style.color = "#FFFFFF";
  });
}

// Add a button to toggle the visibility of the news section
var newsSection = document.querySelector("#news");
var toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle News";

toggleButton.addEventListener("click", function() {
  if (newsSection.style.display === "none") {
    newsSection.style.display = "block";
    toggleButton.textContent = "Hide News";
  } else {
    newsSection.style.display = "none";
    toggleButton.textContent = "Show News";
  }
});

newsSection.parentNode.insertBefore(toggleButton, newsSection);
