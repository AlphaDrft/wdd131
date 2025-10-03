document.addEventListener("DOMContentLoaded", () => {
  let count = localStorage.getItem("reviewCount");

  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }

  localStorage.setItem("reviewCount", count);

  const display = document.getElementById("reviewCount");
  display.textContent = `You have submitted ${count} review${count > 1 ? "s" : ""}.`;
});
