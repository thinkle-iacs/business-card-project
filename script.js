// Add click event listeners to all cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// A button with class="change-size" switches every card to the next size
const sizes = ["landscape", "portrait", "square"];
document.querySelectorAll(".change-size").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".card").forEach((card) => {
      const current = sizes.findIndex((size) => card.classList.contains(size));
      card.classList.remove(...sizes);
      card.classList.add(sizes[(current + 1) % sizes.length]);
    });
  });
});
