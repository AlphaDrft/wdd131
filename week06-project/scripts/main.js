document.addEventListener("DOMContentLoaded", function () {
  // === NAVBAR TOGGLE ===
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", open);
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.classList.contains("active")) return;
      if (!document.querySelector("nav").contains(e.target)) {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.focus();
      }
    });
  }

  // === CONTACT FORM HANDLING ===
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields before sending your message.");
        return;
      }

      // --- Save to localStorage ---
      const submissions = JSON.parse(localStorage.getItem("contactSubmissions")) || [];
      submissions.push({ name, email, message, date: new Date().toISOString() });
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

      alert(`✅ Message sent successfully!\n\nThank you, ${name}. We'll get back to you soon.`);

      contactForm.reset();
    });
  }


  // === SCROLL TO TOP BUTTON ===
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.style.display = "none";
        scrollTopBtn.classList.remove("show");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // === LIGHTBOX FEATURE (Gallery) ===
  document.querySelectorAll(".gallery-grid img").forEach((img) => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.classList.add("lightbox");
      overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
      document.body.appendChild(overlay);
      overlay.addEventListener("click", () => overlay.remove());
    });
  });

  // === FEATURED DESTINATIONS ARRAY ===
  const featuredDestinations = [
    {
      name: "Imugan Falls",
      location: "Santa Fe, Nueva Vizcaya",
      description:
        "A scenic waterfall surrounded by lush forest and clear mountain water — perfect for nature lovers and hikers.",
      bestSeason: "November to May",
      image: "images/imugan-falls.jpg",
    },
    {
      name: "Capisaan Cave System",
      location: "Kasibu, Nueva Vizcaya",
      description:
        "A complex network of caves featuring stalactites, stalagmites, and underground rivers.",
      bestSeason: "December to April",
      image: "images/capisaan-cave.jpg",
    },
    {
      name: "Lower Magat Eco-Tourism Park",
      location: "Diadi, Nueva Vizcaya",
      description:
        "An eco-friendly park with lakeside cabins, boating, and wildlife ideal for family trips and relaxation.",
      bestSeason: "All year round",
      image: "images/magat-dam.jpeg",
    },
  ];

  const filteredDestinations = featuredDestinations.filter((dest) =>
    dest.bestSeason.includes("November") || dest.bestSeason.includes("December")
  );

  const featuredContainer = document.getElementById("featured-destination");
  if (featuredContainer) {
    featuredContainer.innerHTML = "";

    filteredDestinations.forEach((dest) => {
      const card = `
        <div class="destination-card">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy">
          <div class="destination-info">
            <h3>${dest.name}</h3>
            <p class="location">${dest.location}</p>
            <p>${dest.description}</p>
            <p><em>Best Season: ${dest.bestSeason}</em></p>
          </div>
        </div>
      `;
      featuredContainer.innerHTML += card;
    });
  }
});
