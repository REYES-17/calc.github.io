function obtenerPeso() {
  let pesoInput = document.querySelector('input[name="peso"]');
  return pesoInput.value;
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button[name="Calcular"]').addEventListener('click', function () {
    var p = obtenerPeso();
    let peso = parseInt(p);
    if (!isNaN(peso) && peso > 0) {
      let error = document.getElementById("error");
      error.style.display = "none"
      if (peso <= 10) {
        let VD = peso * 100;
        let M = VD / 24;
        let MM = M * 1.5;
        mostrarResultados(M.toFixed(2), MM.toFixed(2));
      } else if (peso <= 20) {
        peso -= 10;
        let VD = (peso * 50) + 1000;
        let M = VD / 24;
        let MM = M * 1.5;
        mostrarResultados(M.toFixed(2), MM.toFixed(2));
      } else if (peso <= 30) {
        peso -= 20;
        let VD = (peso * 20) + 1500;
        let M = VD / 24;
        let MM = M * 1.5;
        mostrarResultados(M.toFixed(2), MM.toFixed(2));
      } else {
        let SC = ((peso * 4) + 7) / (peso + 90);
        let VD1 = SC * 1500;
        let VD2 = SC * 2000;
        mostrarResultados(VD1.toFixed(2), VD2.toFixed(2));
      }
    } else {
      let error = document.getElementById("error");
      error.style.display = "block"
    }
  });
});

function mostrarResultados(M, MM) {
  var resu1Element = document.getElementById("resu1");
  var resu2Element = document.getElementById("resu2");

  resu1Element.textContent = " " + M + " cc/hr";
  resu2Element.textContent = " " + MM + " cc/hr";
}
