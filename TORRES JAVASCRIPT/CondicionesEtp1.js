export default function condicionesEtp1 (temp, sp, acelerar, deltaT, etapa2) {

  const tempmenos1 = (sp, Select) => {
    let y = sp + Select
    return y
  }
  
  const tempmenos2 = (sp, Select) => {
    let y = sp + Select
    return y
  }
  
  const Compare = (temp, tempmenos1) => {
    if (temp > tempmenos1) {
      return 1
    } else {
      return 0
    }
  }
  
  const Compare1 = (Multiply) => {
    // TODO: ¿De dónde sale este valor?
    let input2 = 0.009000
    if (Multiply > input2) {
      return 1
    } else {
      return 0
    }
  }
  
  const Compare2 = (temp, temmas) => {
    if (temp > temmas) {
      return 1
    } else {
      return 0
    }
  }
  
  const Compare3 = (temp, tempmenos2) => {
    if (temp < tempmenos2) {
      return 1
    } else {
      return 0
    }
  }
  
  const Multiply = (deltaT) => {
    const x2 = -1.000000
    let y = deltaT * x2
    return y 
  }
  
  const temmas = (sp) => {
    const x2 = 1
    let y = sp + x2
    return y
  }
  
  const OR = (enclavamiento, compare2) => {
    if (enclavamiento || compare2) {
      return 1
    } else {
      return 0
    }
  }
  
  const Select = (etapa2) => {
    switch (x) {
      case 0:
        return -1.000000
        break;
    
      case 1:
        return 0.500000
        break;
  
      default:
        return -1.000000
        break;
    }
  }
  
  const prioridadval = (compare, enclavamiento1, or) => {
    if (compare && enclavamiento1 && or) {
      return 1
    } else {
      return 0
    }
  }
  
  // TODO: El algoritmo de la función devuelve el valor de On_enclavamiento siempre.
  // Lo que indica que el algoritmo no está haciendo nada.
  function Enclavamiento(On_enclavamiento, Off_enclavamiento) {
  
    const and = (in1, in2) => {
      if (!in1 && in2) {
        return true
      } else {
        return false
      }
    }
  
    const or = (in1, in2) => {
      if (in1 || in2) {
        return true
      } else {
        return false
      }
    }
  
    const Estado__enclavamiento = (x) => {
      switch (x) {
        case false:
          return false
          break;
  
        case true:
          return true
          break;
      
        default:
          return false
          break;
      }
    }
  
    const resultAnd = and(Off_enclavamiento, Estado__enclavamiento())
    
    const resultOR = or(On_enclavamiento, resultAnd)
  
    const estado = Estado__enclavamiento(resultOR)
  
    return estado
  }
  
  function Enclavamiento1(On_enclavamiento, Off_enclavamiento) {
  
    const and = (in1, in2) => {
      if (!in1 && in2) {
        return true
      } else {
        return false
      }
    }
  
    const or = (in1, in2) => {
      if (in1 || in2) {
        return true
      } else {
        return false
      }
    }
  
    const Estado__enclavamiento = (x) => {
      switch (x) {
        case false:
          return false
          break;
  
        case true:
          return true
          break;
      
        default:
          return false
          break;
      }
    }
  
    const resultAnd = and(Off_enclavamiento, Estado__enclavamiento())
    
    const resultOR = or(On_enclavamiento, resultAnd)
  
    const estado = Estado__enclavamiento(resultOR)
  
    return estado
  }
  

  /**
   * CÓDIGO
   */

  const resultCompare = Compare(temp, tempmenos1(sp, Select(etapa2)))

  const resultCompare1 = Compare1(Multiply(deltaT))

  const resultCompare2 = Compare2(temp, temmas(sp))

  const resultCompare3 = Compare3(temp, tempmenos2(sp, Select(etapa2)))

  const resultEnclavamiento = Enclavamiento(resultCompare1, resultCompare3)

  // TODO: No puedo verificar que valor recibe el On_enclavamiento.
  const resultEnclavamiento1 = Enclavamiento1(acelerar, resultCompare3)

  const resultOR = OR(resultEnclavamiento, resultCompare2)

  const resultPrioridadval = prioridadval(resultCompare, resultEnclavamiento1, resultOR)

  console.log(resultPrioridadval)
}

/**
 * RESULTADOS
 * - Si la temperatura es mayor o igual al setPoint + 1 grado y acelerar es igual a 1 el resultado de 
 * la etapa 1 es 1.
 * - Esto asumiendo que el valor de la variable acelerar se pasa como primer argumento a la función
 * enclavamiento1. Sino, no funciona el algoritmo.
 * 
 * */ 


condicionesEtp1(29, 27, 1, null, null)