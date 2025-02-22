// script.js
function buyCard(cardName) {
    alert("You are buying " + cardName + "! (This is a demo)");
}

// Basic search functionality (can be improved)
document.getElementById('search').addEventListener('keyup', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    // In a real application, you would filter the displayed cards here.
    console.log("Searching for:", searchTerm);
});

const cards = document.querySelectorAll('.card');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

cards.forEach(card => {
  const cardImg = card.querySelector('img'); // Select the image within the card

  cardImg.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = cardImg.src; // Set the modal image source
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

