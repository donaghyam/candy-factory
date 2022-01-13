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
        candyObject.baked = false
    }
    return candyObject
}

const bakedChocolate = bakeCandy(mixedChocolate)

const breakBark = (candyObject) => {
    if (candyObject.baked === true) {
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece","Mint Chocolate Bark Piece","Mint Chocolate Bark Piece","Mint Chocolate Bark Piece","Mint Chocolate Bark Piece"]
    }
}

const candy = breakBark(bakedChocolate)

console.log(candy)