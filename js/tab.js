const tabs = document.querySelectorAll('.tab');
const images = document.querySelectorAll('.image-container');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and images
    tabs.forEach(t => t.classList.remove('active'));
    images.forEach(img => img.classList.remove('active'));

    // Add active class to the clicked tab and corresponding image
    tab.classList.add('active');
    const targetImage = document.querySelector(`#image-${tab.id.split('-')[1]}`);
    targetImage.classList.add('active');
  });
});