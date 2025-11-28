export function loadMoreProducts() {
  const container = document.getElementById('products-container');
  const loadMoreBtn = document.getElementById('load-more-btn');

  let visibleCount = 4; // should match initialCount
  const increment = 4;

  loadMoreBtn.addEventListener('click', () => {
    const items = container.querySelectorAll('.more-product-item');
    const nextCount = visibleCount + increment;

    for (let i = visibleCount; i < nextCount && i < items.length; i++) {
      items[i].style.display = '';
    }

    visibleCount = nextCount;

    if (visibleCount >= items.length) {
      loadMoreBtn.style.display = 'none';
    }
  });
}