// Hamburger Menu Toggle
const menuButton = document.querySelector("#menu");
const navList = document.querySelector(".navigation ul");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Temple data array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Manila Philippines Temple",
    location: "Quezon City, 1110 Metro Manila",
    dedicated: "1984, September, 25-27",
    area: 26683,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  },
  {
    templeName: "Cebu City Philippines Temple",
    location: "Lahug Cebu City, 6000 Cebu",
    dedicated: "2010, June, 13",
    area: 29556,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
  },
    {
    templeName: "Brisbane Australio Temple",
    location: "Kangaroo Point, Queensland 4169, Australia",
    dedicated: "2003, June, 15",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/brisbane-australia-temple/brisbane-australia-temple-62132-main.jpg"
  },
];

// Function to create and display temple cards
function displayTemples(filteredTemples) {
  const main = document.querySelector("main");
  main.innerHTML = ""; // Clear old content

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple">
    `;

    main.appendChild(card);
  });
}

// Filtering logic
function filterTemples(criteria) {
  let filtered = temples;

  if (criteria === "old") {
    filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
  } else if (criteria === "new") {
    filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
  } else if (criteria === "large") {
    filtered = temples.filter(t => t.area > 90000);
  } else if (criteria === "small") {
    filtered = temples.filter(t => t.area < 10000);
  }

  displayTemples(filtered);
}

// Initial load
displayTemples(temples);

// Add event listeners for navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const choice = event.target.textContent.toLowerCase();

    if (choice === "home") filterTemples("home");
    else if (choice === "old") filterTemples("old");
    else if (choice === "new") filterTemples("new");
    else if (choice === "large") filterTemples("large");
    else if (choice === "small") filterTemples("small");
  });
});