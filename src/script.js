const button = document.querySelector('.button');
const navbar = document.querySelector('#navbar');
const content = document.querySelector('#content');
const text = document.querySelector('#text-description-mobile');
const gallery = document.querySelector('#gallery');
button.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
  content.classList.toggle('hidden');
  text.classList.toggle('hidden');
  gallery.classList.toggle('hidden');
})

function showModal() {
const modal = document.getElementById("modal");
modal.classList.add("visible");
console.log("showModal");
}
function closeModal() {
const modal = document.getElementById("modal");
modal.classList.remove("visible");
console.log("closeModal");
}