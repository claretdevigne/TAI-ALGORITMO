function VariacionTemperatura(nviTempTorre, sensor) {

    let result = (( nviTempTorre + (sensor * -1) ) * -1) + ( nviTempTorre + (sensor * -1) )

    return result

}

function AIA2(sensor, sp) {
    
    let valor = 0

    if (sensor > sp) {
        for (let i = valor; i <= 100; i++) {
          valor = i
        }
    } else if (sensor > sp) {
        for (let i = valor; i >= 0; i--) {
            valor = i
        }
    }

    return valor
}
    
console.log(VariacionTemperatura(30, 20));

console.log(AIA2(27, 26));