
const menuRoot =  document.querySelector('.sidebar .category');

function toggleMenu () {
    menuRoot.classList.toggle('active');
}
document.addEventListener('click', (event) => {
    var isClickInside = menuRoot.contains(event.target);
    if(!isClickInside &&  menuRoot.classList.contains("active")) {
}});