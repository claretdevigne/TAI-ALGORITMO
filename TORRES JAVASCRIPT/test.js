function Monitoreo(sensor, tematorre1, habilitar) {

    let SetPt = sensor + 0 + 0
    let disable = !habilitar

    const AIA2 = (sensor, SetPt, disable) => {
        return
    }

    const desaceleracion = (AIA2) => {
        if (AIA2 > (AIA2 * 1) + 0) {
            return 1
        } else {
            return 0
        }
    }

    const aceleracion = (AIA2) => {
        if (AIA2 < (AIA2 * 1) + 0) {
            return 1
        } else {
            return 0
        }
    }

    const variacionTemperatura = (sensor, nvitorre1) => {
        let result = ((sensor * -1) + nvitorre1) * -1
        return result
    }

    return {
        desaceleracion: desaceleracion(AIA2(sensor, SetPt, disable)),
        aceleracion: aceleracion(AIA2(sensor, SetPt, disable)),
        variacionTemperatura: variacionTemperatura(sensor, tematorre1)
    }
}

function Variador(sensor, sp, variacionTemp, aceleracion, desaceleracion) {

    const valvulaPro = (x, Etapa2) => {
        switch (x) {
            case 0:
                return 20
                break;

            case 1:
                return 100
                break;
            
            case 2:
                return Etapa2
                break;

            case 3:
                return 100
                break;

            case 4:
                return 100
                break;

            case 5:
                return 100
                break;
        
            default:
                return 20
                break;
        }
    }

    const CE1 = (temp, sp, acelerar) => {
        if (temp >= sp + 1 && acelerar) {
            return 1
        } else {
            return 0
        }
    }

    let ce1 = CE1(sensor, sp, aceleracion)

    const CE2 = (temp, sp, desacelerar, valvula) => {
        if (desacelerar === 1 && valvula === 100 && temp > sp - 1) {
            return 1
        } else {
            return 0
        }
    }

    let valvula = valvulaPro(null)
    let ce2 = CE2(sensor, sp, desaceleracion, valvula)

    const ETP2 = (ce1, ce2) => {
        if (ce1 === 1) {
            return 0
        } else {
            return ce2 * 2
        }
    }

    let etp2 = ETP2(ce1, ce2)

    const CE3 = (temp, sp, ce2) => {
        if (ce2 = 1 && temp >= sp + 1.21) {
            return 1
        } else {
            return 0
        }
    }

    const ETP3 = (ce1, ce3) => {
        if (ce1 = 1) {
            return 0
        } else {
            return ce3 * 3
        }
    }

    let ce3 = CE3(sensor, sp, ce2)
    let etp3 = ETP3(ce1, ce3)

    console.log(ce1);
    console.log(etp2);
    console.log(etp3);
    
    let resultX = ce1 + etp2 + etp3

    return valvulaPro(resultX)
}

let sensor = 30
let tematorre1 = 29 
let habilitar = true
let sp = 26

const resultMonitoreo = Monitoreo(sensor, tematorre1, habilitar)
console.log(resultMonitoreo);

let resultVariador = Variador(sensor, sp, resultMonitoreo.variacionTemperatura, resultMonitoreo.aceleracion, resultMonitoreo.desaceleracion)
console.log(resultVariador);

