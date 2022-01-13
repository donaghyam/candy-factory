const buyChocolate = () => {
    const candyObject = {
        value: "Milk chocolate"
    }
    return candyObject
}

const chocolate = buyChocolate()

const addFlavoring = (candyObject) => {
    candyObject.flavor = "Mint"
    return candyObject
}

const chocolateWithMint = addFlavoring(chocolate)

const makeBarkMixture = (candyObject) => {
    if (candyObject.flavor === "Mint") {
        candyObject.mixed = true
    } else {
        candyObject.mixed = false
    }
    return candyObject
}

const mixedChocolate = makeBarkMixture(chocolateWithMint)

const bakeCandy = (candyObject) => {
    if (candyObject.mixed === true) {
        candyObject.baked = true
    } else {
        candyObject.bakeCandy = false
    }
    return candyObject
}