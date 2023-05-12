export default function CondicionesEtp2(temp, sp, desaceleracion, valvula, etapa1) {

  const Compare1 = (valvula) => {
    const input2 = 100
    if (valvula === input2) {
      return 1
    } else {
      return 0
    }
  }

  const Compare2 = (temp, add) => {
    if (temp < add) {
      return 1
    } else {
      return 0
    }
  }

  const Add = (sp) => {
    const x2 = -1.000000
    let y = sp + x2
    return y
  }

  const And = (compare2, desaceleracion, compare1) => {
    if (compare2 && desaceleracion && compare1) {
      return 1
    } else {
      return 0
    }
  }

  const Compare3 = (add1, temp) => {
    if (add1 < temp) {
      return 1
    } else {
      return 0
    }
  }

  // TODO: El in2 no está funcionando, por ende el OR no está cumpliendo ninguna función
  const OR = (and1) => {
    const in2 = null
    if (and1 || in2) {
      return 1
    } else {
      return 0
    }
  }

  const AND1 = (etapa1, compare3) => {
    if (etapa1 && compare3) {
      return 1
    } else {
      return 0
    }
  }

  const Add1 = (temp) => {
    // TODO: De donde sale este valor?
    const x2 = 1.30000

    let y = temp + x2
    return y
  }

  function Out(On_enclavamiento, Off_enclavamiento) {
  
    const and = (in1, in2) => {
      if (!in1 && in2) {
        return 1
      } else {
        return 0
      }
    }
  
    const or = (in1, in2) => {
      if (in1 || in2) {
        return 1
      } else {
        return 0
      }
    }
  
    const Estado__enclavamiento = (x) => {
      switch (x) {
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
  
    const resultAnd = and(Off_enclavamiento, Estado__enclavamiento())
    
    const resultOR = or(On_enclavamiento, resultAnd)
  
    const estado = Estado__enclavamiento(resultOR)

    return estado
  }

  /**
   *  CODIGO
   */

  
  const resultCompare1 = Compare1(valvula)

  const resultCompare2 = Compare2(temp, Add(sp))

  const resultAnd = And(resultCompare2, desaceleracion, resultCompare1)

  const resultCompare3 = Compare3(Add1(sp), temp)

  const resultOR = OR(AND1(etapa1, resultCompare3))

  const Estado_Enclavamiento = Out(resultAnd, resultOR)

  return Estado_Enclavamiento

}

/**
 * RESULT:
 * - Si desaceleración es true, valvula es igual a 100 y la temperatura es menor a un grado del setPoint
 * el resultado de la CondicionesEtp2 será 1
 */

const RESULT = CondicionesEtp2(25, 26, true, 100, 1)

console.log(RESULT)