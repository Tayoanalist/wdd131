// Set the current year
const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

// Set last modified date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last modified: ${document.lastModified}`;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show'); // Toggle the 'show' class on the menu
});

// Temple data
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
  // Add more temple objects here...
  {
    templeName: "Toronto Canada",
    location: "Toronto, Ontario, Canada",
    dedicated: "1990, August, 25",
    area: 57982,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/400x250/toronto-temple-lds-817787-wallpaper.jpg"
  },
  {
    templeName: "Sydney Australia",
    location: "Sydney, New South Wales, Australia",
    dedicated: "1984, September, 20",
    area: 30677,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney-australia-temple-lds-christmas-1070459-wallpaper.jpg"
  },
  {
    templeName: "Baton Rouge Louisiana",
    location: "Baton Rouge, Louisiana, United States",
    dedicated: "2000, July, 16",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/400x250/3-a75beca22300a3263bd47fba03b5b0d1b5ca0753.jpeg"
  },
];

// Function to render temple cards
const renderTempleCards = (filteredTemples) => {
  const templeCardsContainer = document.getElementById('temple-cards');
  templeCardsContainer.innerHTML = ''; // Clear existing cards

  filteredTemples.forEach((temple) => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
    `;

    templeCardsContainer.appendChild(card);
  });
};

// Function to filter temples based on the selected category
const filterTemples = (category) => {
  let filteredTemples;

  switch (category) {
    case 'old':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      break;
    case 'new':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      break;
    case 'large':
      filteredTemples = temples.filter(temple => temple.area > 90000);
      break;
    case 'small':
      filteredTemples = temples.filter(temple => temple.area < 10000);
      break;
    case 'home':
    default:
      filteredTemples = temples; // Show all temples
      break;
  }

  renderTempleCards(filteredTemples);
};

// Event listeners for navigation links
document.querySelectorAll('#menu li a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const category = event.target.textContent.toLowerCase(); // Get the category from the link text
    filterTemples(category); // Filter temples based on the selected category
    menu.classList.remove('show'); // Close the menu after selection
  });
});

// Call the function to render all cards when the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  renderTempleCards(temples);
});
