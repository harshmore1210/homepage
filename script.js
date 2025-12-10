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


const slidesContainer = document.getElementById('banner-slides');
const slides = Array.from(slidesContainer.children);
let currentIndex = 0;

function goToSlide(index) {
  const width = slides[0].clientWidth;
  slidesContainer.style.transform = `translateX(-${index * width}px)`;
}

document.getElementById('next-banner').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
});

document.getElementById('prev-banner').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(currentIndex);
});

window.addEventListener('resize', () => goToSlide(currentIndex));



function scrollArrivals(direction) {
  const slider = document.getElementById("new-arrivals");
  slider.scrollBy({
    left: direction * 300,
    behavior: "smooth"
  });
}

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


document.addEventListener('DOMContentLoaded', () => {
   
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const cards = document.querySelectorAll('.review-card'); 
    
   
    let currentIndex = 1; 
    const numCards = cards.length; 

   
    function updateCarousel() {
        cards.forEach((card, index) => {
            
            card.classList.remove('card-center', 'card-left', 'card-right');

            const position = (index - currentIndex + numCards) % numCards;

            if (position === 0) {
               
                card.classList.add('card-center');
                
            } else if (position === 1) {
                
                card.classList.add('card-right');
                
            } else if (position === numCards - 1) {
           
                card.classList.add('card-left');
                
            } else {
               
                card.classList.add('opacity-0', 'transform', 'scale-75'); 
            }
        });
    }
    prevBtn.addEventListener('click', () => {

        currentIndex = (currentIndex - 1 + numCards) % numCards;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % numCards;
        updateCarousel();
    });

    updateCarousel(); 
});



