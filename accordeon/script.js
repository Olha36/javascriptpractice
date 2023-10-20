const tab = document.querySelectorAll('.tab');
console.log(tab);
const active = document.querySelector('.active');

tab.forEach(el => el.addEventListener('click', function() {
    el.classList.toggle('active');
}))