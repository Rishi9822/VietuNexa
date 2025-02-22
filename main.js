const toggle = document.querySelector(".toggle");

toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});



function filterCategory(category) {
    let images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.style.display = (category === 'all' || img.dataset.category === category) ? 'block' : 'none';
    });
}

function filterImages() {
    let search = document.getElementById('search').value.toLowerCase();
    let images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        let altText = img.alt.toLowerCase();
        img.style.display = altText.includes(search) ? 'block' : 'none';
    });
}

// Show all images by default
filterCategory('all');


function gallery() {
    const contactSection = document.getElementById('gallery');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }