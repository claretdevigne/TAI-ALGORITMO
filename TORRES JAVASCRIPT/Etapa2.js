function Etapa2(temp, sp, onEtapa1, onEtapa2) {
    
    const resta = (sp, temp) => {
        let y = sp - temp
        return y
    }

    const suma = (sp, temp) => {
        let y = sp + temp
        return y
    }

    const Select = (resta) => {
        switch (resta) {
            case 0:
                return 0
                break;

            case 1:
                return -1
                break;
        
            default:
                return 0
                break;
        }
    }

    const Select1 = (suma) => {
        switch (suma) {
            case 0:
                return 0
                break;

            case 1:
                return 1
                break;
        
            default:
                return 0
                break;
        }
    }

    const Add = (select1, select2) => {
        let y = select1 + select2
        return y
    }

    const Select2 = (onEtapa2) => {
        switch (onEtapa2) {
            case 0:
                return 0
                break;

            case 1:
                return 1
                break;
        
            default:
                return 0
                break;
        }
    }

    const toff = (onEtapa2) => {
        switch (onEtapa2) {
            case 0:
                return 1
                break;
        
            case 1:
                return 60
                break;

            default:
                return 0
                break;
        }
    }

    const ton = (onEtapa2) => {
        switch (onEtapa2) {
            case 0:
                return 100
                break;

            case 1:
                return 10
                break;
        
            default:
                return 0
                break;
        }
    }

    const Select3 = (onEtapa2) => {
        switch (onEtapa2) {
            case 0:
                return 1
                break;

            case 1:
                return resultPaso3Renovacion
                break;
        
            default:
                return 1
                break;
        }
    }

    const Select4 = (onEtapa2) => {
        switch (onEtapa2) {
            case 0:
                return 1
                break;

            case 1:
                return resultAdd
                break;
        
            default:
                return 1
                break;
        }
    }

    function Paso3Renovacion (TiempoOff, Tiempo_on, On_off) {
        const And = (On_contador, resultSalidaRetardo) => {
            if (On_contador && resultSalidaRetardo) {
                return 1
            } else {
                return 0
            }
        }

        const SalidaRetardo = (resultAnd, trueDelay, falseDelay) => {
            // Retorna con delay de acuerdo a los parámetros
            return resultAnd
        }

        const ValvulaAh = (counter) => {
            const input2 = 2
            if (counter > input2) {
                return 1
            } else {
                return 0
            }
        }

        const Select = (resultValvulaAh) => {
            switch (resultValvulaAh) {
                case 0:
                    return 1
                    break;

                case 1:
                    return 0
                    break;
            
                default:
                    break;
            }
        }

        const Counter = (input, enable, preset) => {
            for (let i = 0; i < )
        }

        const counterLogic = (input, enable, preset, presetValue = 0, countValue = 1, stopAtZero = false) => {
            let value = preset ? presetValue : countValue;
          
            if (enable) {
              if (input === 1) {
                value++;
              } else if (input === 0) {
                value--;
              }
            }
          
            if (stopAtZero && value < 0) {
              value = 0;
            }
          
            return value;
          }
          

        const And1 = (resultValvulaAh, resultSalidaRetardo) => {
            if (resultValvulaAh && resultSalidaRetardo) {
                return 1
            } else {
                return 0
            }
        }

        const ValvulaAc = (resultValvulaAh, resultSalidaRetardo) => {
            if (!resultValvulaAh && resultSalidaRetardo) {
                return 1
            } else {
                return 0
            }
        }

        const ValvulaAc1 = (resultCounter1) => {
            if()
        }
    }


}