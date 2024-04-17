document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll('.sectionTitle');

    headers.forEach(header => {
      const content = header.nextElementSibling;

      header.addEventListener('click', function () {
        if (content.style.display === 'none') {
          content.style.display = 'grid';
          header.innerHTML = header.innerHTML.replace('fa-plus-square-o', 'fa-minus-square-o');
        } else {
          content.style.display = 'none';
          header.innerHTML = header.innerHTML.replace('fa-minus-square-o', 'fa-plus-square-o');
        }
      });
    });
  });

  function toggleContent(name) {
    var content = document.getElementById(name);
    var button = document.getElementById('bt' + name);

    if (content.style.display === 'none') {
      content.style.display = 'block';
      button.textContent = 'Hide Details';
    } else {
      content.style.display = 'none';
      button.textContent = 'Show Details';
    }
  }
  function scrollLeft() {
    const container = document.querySelector('.image-container');
    container.scrollLeft -= container.clientWidth / 2;
}

function scrollRight() {
    const container = document.querySelector('.image-container');
    container.scrollLeft += container.clientWidth / 2;
}