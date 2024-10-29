document.addEventListener('DOMContentLoaded', () => {
  const productSelect = document.getElementById('product');
  const products = [
    { id: 'prod1', name: 'Product 1' },
    { id: 'prod2', name: 'Product 2' },
    { id: 'prod3', name: 'Product 3' }
  ];

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  const currentYear = new Date().getFullYear();
  document.getElementById('currentYear').textContent = currentYear;
});
