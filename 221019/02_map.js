const numbers = [1,2,3,4,5]

const doubleEle = function (number) {
    return number * 2
}

const newArry1 = numbers.map(doubleEle)

console.log(newArry1)

// 2.
const newArry2 = numbers.map(function (number) {
    return number * 2
})
const newArry3 = numbers.map((number) => {
    return number * 2
})