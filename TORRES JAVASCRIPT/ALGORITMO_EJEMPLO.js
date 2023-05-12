  function mostrarValores(tempAmbiente, setPoint, rpm, tempTarget, acumulaciónCalórica) {
  
    // Limpiar la pantalla
    console.clear();
  
    // Mostrar los valores en la consola
    console.log("Temperatura Ambiente: ", tempAmbiente);
    console.log("Set Point: ", setPoint);
    console.log("RPM: ", rpm);
    console.log("Acumulación Calórica: ", Number(acumulaciónCalórica).toFixed(3))

    console.log("\nTemperatura Target: ", Number(tempTarget).toFixed(3));

    if (tempTarget >= 32) {
      console.warn('ALARMA: La temperatura supera los 32 grados.')
    }
  }
  
  // Valores
  let tempTarget = 27
  let tempAmbiente = 32
  let acumulaciónCalórica = 0.1
  let sp = 27
  let rpm = 20
  let valorDeAcumulacion = 0.0009
  
  // Iniciar el bucle de actualización de valores
  setInterval(() => {
    mostrarValores(tempAmbiente, sp, rpm, tempTarget, acumulaciónCalórica, )
    tempTarget += acumulaciónCalórica

    if (tempTarget > sp) {
      rpm = 100
    } else {
      rpm = 20
    }

    if (rpm === 100) {
      acumulaciónCalórica -= 0.0009
    } else if (rpm === 20) {
      acumulaciónCalórica += 0.003
    }

  }, 80)
