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
  var pBeremiz = parseInt(document.getElementById("panesBeremiz").value) || 0;
  var pHank = parseInt(document.getElementById("panesHank").value) || 0;
  var totalMonedas = parseFloat(document.getElementById("monedasVizconde").value) || 0;

  var totalPanes = pBeremiz + pHank;
  var totalTercios = totalPanes * 3;
  var porcionPorPersona = totalTercios / 3;

  var aporteBeremizTercios = (pBeremiz * 3) - porcionPorPersona;
  var aporteHankTercios = (pHank * 3) - porcionPorPersona;

  var valorPorTercio = totalMonedas / totalTercios;

  var pagoBeremiz = aporteBeremizTercios * valorPorTercio;
  var pagoHank = aporteHankTercios * valorPorTercio;

  var resultadoHTML = "<strong>Distribución y pago (" + totalMonedas + " monedas):</strong><br>" +
    "• Total panes: " + totalPanes + " (" + totalTercios + " tercios)<br>" +
    "• Consumo por persona: " + porcionPorPersona.toFixed(1) + " tercios<br>" +
    "• Beremiz aporta: <strong>" + pagoBeremiz.toFixed(2) + " monedas</strong><br>" +
    "• Hank aporta: <strong>" + pagoHank.toFixed(2) + " monedas</strong>";

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

// 4. Ejercicio Pi (Actualizado para cualquier valor de n ingresado)
function calcularPi() {
  let n = parseInt(document.getElementById("inputNPi").value);

  if (isNaN(n) || n <= 0) {
    document.getElementById('resultadoPi').innerText = "Por favor, ingresa un número válido mayor a 0.";
    return;
  }

  let suma = 0;
  for (let k = 1; k <= n; k++) {
    suma += 1 / (k ** 2);
  }

  let piEst = Math.sqrt(6 * suma);
  
  let textoResultado = "Para n = " + n + ":\n" +
    "• Pi estimado = " + piEst.toFixed(15) + "\n" +
    "• Math.PI real = " + Math.PI.toFixed(15);

  document.getElementById('resultadoPi').innerText = textoResultado;
}