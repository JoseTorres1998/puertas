
const casilla1 = document.getElementById('casilla1');
const casilla2 = document.getElementById('casilla2');
const evaluarBtn = document.getElementById('evaluar');
const andSpan = document.getElementById('and');
const orSpan = document.getElementById('or');
const xorSpan = document.getElementById('xor');


evaluarBtn.addEventListener('click', function() {
  // Obtener el estado de las casillas (true si están marcadas, false si no)
  const c1 = casilla1.checked;
  const c2 = casilla2.checked;


  andSpan.textContent = (c1 && c2) ? 'true' : 'false'; // AND: true solo si ambas son true
  orSpan.textContent = (c1 || c2) ? 'true' : 'false';   // OR: true si al menos una es true
  xorSpan.textContent = (c1 !== c2) ? 'true' : 'false'; // XOR: true si son diferentes
});