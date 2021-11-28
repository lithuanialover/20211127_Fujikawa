const target = document.getElementById("menu");
console.log(target);
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("drawer_nav");
  nav.classList.toggle('in');
});


