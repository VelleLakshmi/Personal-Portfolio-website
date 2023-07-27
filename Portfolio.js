document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
 
  const formData = new FormData(this);
  console.log('Form data:', Object.fromEntries(formData));
  this.reset();
});
