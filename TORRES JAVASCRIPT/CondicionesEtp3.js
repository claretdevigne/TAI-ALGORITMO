export default function CondicionesEtp3 (temp, sp, etapa2) {

  const Add = (sp) => {
    let x2 = 1.2
    const y = sp + x2
    return y
  }

  const Compare2 = (temp, add) => {
    if (temp > add) {
      return 1
    } else {
      return 0
    }
  }

  const Out = (Compare2, etapa2) => {
    if (Compare2 && etapa2) {
      return 1
    } else {
      return 0
    }
  }

  const resultCompare2 = Compare2(temp, Add(sp))

  const estado = Out(resultCompare2, etapa2)

  return estado

}

/**
 * RESULT:
 * Si etapa2 es igual a 1 y la temperatura es 1.21 grados mayor al setPoint el resultado será 1
 */

const estado = CondicionesEtp3(1.21, 0, true)

console.log(estado)