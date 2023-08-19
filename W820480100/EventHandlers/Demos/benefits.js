function color() {
  document.body.style.backgroundColor = 'red';
}

function reset() {
  document.body.style.backgroundColor = 'white';
}

function log(e) {
  const t = e.currentTarget;
  console.log(t.id + ' clicked');
}

window.addEventListener('load', function() {
  const btnColor = document.getElementById('btn-color');
  btnColor.addEventListener('click', color);
  btnColor.addEventListener('click', log);

  const btnReset = document.getElementById('btn-reset');
  btnReset.addEventListener('click', reset);
  btnReset.addEventListener('click', log);
});