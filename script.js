// ES6+ version of script.js
// Smooth scrolling using modern syntax


document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener('click', e => {
const target = link.getAttribute('href');
if (target && target !== '#') {
e.preventDefault();
document.querySelector(target)?.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});


// Contact form mailto handler — ES6 concise version
const form = document.querySelector('#contactForm');


form?.addEventListener('submit', e => {
e.preventDefault();


const formData = new FormData(form);
const name = formData.get('name');
const email = formData.get('email');
const message = formData.get('message');


const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
const body = encodeURIComponent(`Name: ${name}
Email: ${email}


Message:
${message}`);


window.location.href = `mailto:labidihaithem.dev@gmail.com?subject=${subject}&body=${body}`;
});