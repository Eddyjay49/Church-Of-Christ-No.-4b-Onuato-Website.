// Nav-links
  const menu = document.querySelector(".menu-toggle");
  const icon = document.querySelector(".menu-toggle i");
  const navLinks = document.querySelector(".nav-links");

  menu.onclick = () => {
  icon.classList.toggle('bx-x');
  navLinks.classList.toggle('active');
}

// Gallery section
  const track = document.querySelector(".gallery-track");
  const items = document.querySelectorAll(".gallery-item");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let index = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < items.length - 1) {
      index = index + 1;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index = index - 1;
      updateSlider();
    }
  });