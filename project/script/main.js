document.addEventListener('DOMContentLoaded', () => {
  // Display Current Year
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Track Form Submissions
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let submitCount = parseInt(localStorage.getItem('submitCount')) || 0;
    submitCount++;
    localStorage.setItem('submitCount', submitCount);

    document.getElementById('submitCount').textContent = `Form submissions: ${submitCount}`;

    // Alert with name and selected service
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    alert(`${name}, you sent an email showing interest in Service: ${service}`);

    form.reset();
  });
});
