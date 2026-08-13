const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.navbar');
menuBtn.addEventListener('click',()=>nav.classList.toggle('nav-open'));
document.querySelectorAll('.navbar nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('nav-open')));
