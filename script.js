let annIndex = 0;
const announcementSlider = document.getElementById("announcement-slider");
const totalAnnouncements = announcementSlider.children.length;

document.getElementById("next-announcement").onclick = () => {
  annIndex = (annIndex + 1) % totalAnnouncements;
  announcementSlider.style.transform = `translateX(-${annIndex * 100}%)`;
};

document.getElementById("prev-announcement").onclick = () => {
  annIndex = (annIndex - 1 + totalAnnouncements) % totalAnnouncements;
  announcementSlider.style.transform = `translateX(-${annIndex * 100}%)`;
};

setInterval(() => {
  annIndex = (annIndex + 1) % totalAnnouncements;
  announcementSlider.style.transform = `translateX(-${annIndex * 100}%)`;
}, 3000);

let banIndex = 0;
const bannerSlides = document.getElementById("banner-slides");
const totalBanners = bannerSlides.children.length;

document.getElementById("next-banner").onclick = () => {
  banIndex = (banIndex + 1) % totalBanners;
  bannerSlides.style.transform = `translateX(-${banIndex * 100}%)`;
};

document.getElementById("prev-banner").onclick = () => {
  banIndex = (banIndex - 1 + totalBanners) % totalBanners;
  bannerSlides.style.transform = `translateX(-${banIndex * 100}%)`;
};

setInterval(() => {
  banIndex = (banIndex + 1) % totalBanners;
  bannerSlides.style.transform = `translateX(-${banIndex * 100}%)`;
}, 5000);

function scrollArrivals(direction) {
  const slider = document.getElementById("new-arrivals");
  slider.scrollBy({
    left: direction * 300,
    behavior: "smooth",
  });
}

const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const reviews = [
  {
    id: 1,
    text: "Charlie Lux Home exceeds expectations! Stunning wall art, exceptional quality. My favorite decor destination.",
    name: "Emily Johnson",
    location: "Los Angeles, CA",
    rating: 5,
  },
  {
    id: 2,
    text: "Tableware excellence! Charlie Lux Home's quality and style exceeded my expectations. Highly recommend! Luxury flower vases from Charlie Lux Home are exquisite! Elevate your space with their elegance.",
    name: "Christopher Wilson",
    location: "Los Angeles, CA",
    rating: 5,
  },
  {
    id: 3,
    text: "Impressive vintage styles, exceeded my expectations. Charlie Lux Home delivers top-notch home decor perfection.",
    name: "Michael Davis",
    location: "Los Angeles, CA",
    rating: 5,
  },
];

let currentIndex = 1;
function getReviewIndex(offset) {
  const index = currentIndex + offset;
  return ((index % reviews.length) + reviews.length) % reviews.length;
}
function updateCards() {
  const leftReview = reviews[getReviewIndex(-1)];
  const centerReview = reviews[getReviewIndex(0)];
  const rightReview = reviews[getReviewIndex(1)];

  document.getElementById("left-stars").textContent = "★".repeat(
    leftReview.rating
  );
  document.getElementById("left-text").textContent = leftReview.text;
  document.getElementById("left-name").textContent = leftReview.name;
  document.getElementById("left-location").textContent = leftReview.location;

  document.getElementById("center-stars").textContent = "★".repeat(
    centerReview.rating
  );
  document.getElementById("center-text").textContent = centerReview.text;
  document.getElementById("center-name").textContent = centerReview.name;
  document.getElementById("center-location").textContent =
    centerReview.location;

  document.getElementById("right-stars").textContent = "★".repeat(
    rightReview.rating
  );
  document.getElementById("right-text").textContent = rightReview.text;
  document.getElementById("right-name").textContent = rightReview.name;
  document.getElementById("right-location").textContent = rightReview.location;
}

function handlePrev() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  updateCards();
}
function handleNext() {
  currentIndex = (currentIndex + 1) % reviews.length;
  updateCards();
}
document.getElementById("review-prev").addEventListener("click", handlePrev);
document.getElementById("review-next").addEventListener("click", handleNext);
updateCards();
