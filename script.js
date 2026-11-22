// 1. Gallery Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    galleryItems.forEach(item => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// 3. Client Testimonials Slider
const reviews = [
  {
    text: '"Aura Events made our wedding look like a dream! Everything from decor to food was top notch."',
    author: '- Sara & Ahmed, Karachi'
  },
  {
    text: '"Very respectful and well-organized team. Our family dinner and Aqeeqah gathering went super smoothly."',
    author: '- Mrs. Zainab Tariq, Karachi'
  },
  {
    text: '"Professional team and zero stress. Our corporate annual dinner was arranged with great elegance."',
    author: '- TechNova Pvt Ltd, Karach'
  }
];

let currentReview = 0;
const reviewText = document.getElementById('reviewText');
const reviewAuthor = document.getElementById('reviewAuthor');

function showReview(index) {
  reviewText.textContent = reviews[index].text;
  reviewAuthor.textContent = reviews[index].author;
}

document.getElementById('nextSlide').addEventListener('click', () => {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
});

document.getElementById('prevSlide').addEventListener('click', () => {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  showReview(currentReview);
});

setInterval(() => {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}, 5000);

// 4. Booking Form Validation
const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('fullName').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (phone.length < 11 || isNaN(phone)) {
    formMessage.style.color = '#ef4444';
    formMessage.textContent = 'Please enter a valid 11-digit phone number!';
    return;
  }

  formMessage.style.color = '#22c55e';
  formMessage.textContent = `Thank you, ${name}! Our event planner will call you shortly.`;
  bookingForm.reset();
});