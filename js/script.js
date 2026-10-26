// 1. Ejercicio Camellos
function calcularRepartoCamellos() {
  var camellosIniciales = parseInt(document.getElementById("inputCamellos").value);
  var totalConPrestado = camellosIniciales + 1;
  var hermanoMayor = Math.floor(totalConPrestado / 2);
  var hermanoMedio = Math.floor(totalConPrestado / 3);
  var hermanoMenor = Math.floor(totalConPrestado / 9);

  var camellosEntregados = hermanoMayor + hermanoMedio + hermanoMenor;
  var sobraParaBeremiz = totalConPrestado - camellosEntregados;

  var resultadoHTML = "<strong>Resultados con " + totalConPrestado + " camellos (1 prestado):</strong><br>" +
    "• Hermano Mayor (1/2): <strong>" + hermanoMayor + "</strong><br>" +
    "• Hermano Medio (1/3): <strong>" + hermanoMedio + "</strong><br>" +
    "• Hermano Menor (1/9): <strong>" + hermanoMenor + "</strong><br>" +
    "Total entregado: " + camellosEntregados + "<br>" +
    "Sobran para Beremiz: <strong>" + sobraParaBeremiz + "</strong>";

  document.getElementById("salidaCamellos").innerHTML = resultadoHTML;
}

// 2. Ejercicio Panes
function calcularPagoPanes() {
  var pBeremiz = parseInt(document.getElementById("panesBeremiz").value);
  var pHank = parseInt(document.getElementById("panesHank").value);

  var totalPanes = pBeremiz + pHank;
  var totalTercios = totalPanes * 3;
  var porcionPorPersona = totalTercios / 3;

  var aporteBeremiz = (pBeremiz * 3) - porcionPorPersona;
  var aporteHank = (pHank * 3) - porcionPorPersona;

  var resultadoHTML = "<strong>Distribución y pago:</strong><br>" +
    "• Total panes: " + totalPanes + " (" + totalTercios + " tercios)<br>" +
    "• Cada uno comió: " + porcionPorPersona.toFixed(1) + " tercios<br>" +
    "• Beremiz aporta: <strong>" + aporteBeremiz + " monedas</strong><br>" +
    "• Hank aporta: <strong>" + aporteHank + " monedas</strong>";

  document.getElementById("salidaPanes").innerHTML = resultadoHTML;
}

// 3. Ejercicio Cuadrática
function resolverCuadratica() {
  let a = parseFloat(document.getElementById('valA').value);
  let b = parseFloat(document.getElementById('valB').value);
  let c = parseFloat(document.getElementById('valC').value);

  let D = (b ** 2) - (4 * a * c);
  let textoResultado = "";

  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    textoResultado = "Two roots:\nx1 = " + x1.toFixed(4) + "\nx2 = " + x2.toFixed(4);
  } else if (D === 0) {
    let x = -b / (2 * a);
    textoResultado = "One root:\nx = " + x.toFixed(4);
  } else {
    textoResultado = "The equation has no real roots.";
  }

  document.getElementById('resultadoCuadratica').innerText = textoResultado;
}

// 4. Ejercicio Pi
function calcularPi() {
  let nValues = [100, 10000, 1000000];
  let textoResultado = "";

  for (let i = 0; i < nValues.length; i++) {
    let n = nValues[i];
    let suma = 0;

    for (let k = 1; k <= n; k++) {
      suma += 1 / (k ** 2);
    }

    let piEst = Math.sqrt(6 * suma);
    textoResultado += "n = " + n + " → " + piEst.toFixed(10) + "\n";
  }

  textoResultado += "\nMath.PI real = " + Math.PI.toFixed(10);
  document.getElementById('resultadoPi').innerText = textoResultado;
}