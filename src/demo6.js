const getMaxNumber = (numbersArray) => {
   return numbersArray.reduce((a,b) => {
    (a > b)
    ?a
    :b
  })
}

const getMinNumber = (numbersArray) => {
  numbersArray.reduce((a,b) => {
    (a > b)
    ?b
    :a
  })
}

const getAverage = (numbersArray) => {
  numbersArray.reduce((a,b) => {
    return a+b
  })/numbersArray.length
}

module.exports = { getMaxNumber, getMinNumber, getAverage };