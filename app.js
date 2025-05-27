
  document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector('#box1');
   

    image.style.display = "none"; // Hide it initially

    setTimeout(() => {
      image.style.display = "block"; // Show after 2 seconds
    }, 2000);
  });
  document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector('#s2');
    image.style.display = "none"; // Hide it initially

    setTimeout(() => {
      image.style.display = "block"; // Show after 2 seconds
    },4000);
  });

