const card = document.querySelector('aside');
let cambio = document.getElementById('change');
card.addEventListener('click', function (e) {
  card.classList.toggle('large');
  cambio.style.background = '#fe9'
});
card.addEventListener('dblclick', function (e) {
  card.classList.toggle('double');
  cambio.style.background = '#ce9'

});