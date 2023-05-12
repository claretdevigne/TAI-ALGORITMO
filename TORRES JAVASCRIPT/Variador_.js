import CondicionesEtp1 from "./CondicionesEtp1";
import CondicionesEtp2 from "./CondicionesEtp2";
import CondicionesEtp3 from "./CondicionesEtp3";

export default function Variador_(sensor__, sp__, variaciont, acelerar, desacelerar) {

  const valvulapro = (x, variador) => {
    switch (x) {
      case 0:
        return 20
        break;

      case 1:
        return 100
        break;

      case 2:
        return variador
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

  const condiciones = (x1, x2, x3) => {
    return x1 + x2 + x3
  }

  const Multiply4 = (x1) => {
    return x1 * 2
  }

  const etp2 = (x, Default, input0 ) => {
    switch (x) {
      case 0:
        return input0
        break;

      case 1:
        return 0
        break;
    
      default:
        return Default
        break;
    }
  }

  const Multiply5 = (x1) => {
    return x1 * 3
  }

  const etp3 = (x, Default, input0) => {
    switch (x) {
      case 0:
        return input0 
        break;
        
      case 1:
        return 0
        break;

      default:
        return Default
        break;
    }
  }

  /**
   * CODIGO
   */

  const resultCondicionesEtp1 = CondicionesEtp1(sensor__, sp__, acelerar, variaciont)
  const resultValvulaPro = valvulapro(condiciones(resultCondicionesEtp1, resultEtp2, resultEtp3))
  const resultCondicionesEtp2 = CondicionesEtp2(resultCondicionesEtp1, sensor__, sp, desacelerar, resultValvulaPro)
  const resultCondicionesEtp3 = CondicionesEtp3(sensor__, sp__, resultCondicionesEtp2)
  const resultEtapa2 = "TODO: POR DEFINIR"
  const resultMultiply4 = Multiply4(resultCondicionesEtp2)
  const resultEtp2 = etp2(resultCondicionesEtp1, resultMultiply4, resultMultiply4)
  const resultMultiply5 = Multiply5(resultCondicionesEtp3)
  const resultEtp3 = etp3(resultCondicionesEtp1, resultMultiply5, resultMultiply5)
}