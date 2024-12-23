document.addEventListener("DOMContentLoaded", () => {
    const loaderContainer = document.querySelector('.loader-container');
    const mainContent = document.querySelector('.main-content');
    let percentage = 0;
    const percentageElement = document.getElementById('loading-percentage');
  
    const interval = setInterval(() => {
      if (percentage < 100) {
        percentage += 20;
        percentageElement.textContent = `${percentage}%`;
      } else {
        clearInterval(interval);
        loaderContainer.style.opacity = "0";
        setTimeout(() => {
          loaderContainer.style.display = "none";
          mainContent.style.visibility = "visible";
        }, 500);
      }
    }, 670);
  });