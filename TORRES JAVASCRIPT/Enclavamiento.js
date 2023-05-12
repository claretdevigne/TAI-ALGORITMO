export function Enclavamiento(On_enclavamiento, Off_enclavamiento) {
    let Estado__enclavamiento = 1

    const and = (Off_enclavamiento, Estado__enclavamiento) => {
        if (!Off_enclavamiento && Estado__enclavamiento) {
            return 1
        }

        return 0
    }

    const OR = (On_enclavamiento, resultAnd) => {
        if (On_enclavamiento || resultAnd) {
            Estado__enclavamiento = 1
            return 1
        }

        return 0
    }

    let resultAnd = and(Off_enclavamiento, Estado__enclavamiento)
    let resultOr = OR(On_enclavamiento, resultAnd)
    return resultOr
}

console.log(Enclavamiento(0, 1));