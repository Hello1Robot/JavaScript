let tot = 0
for (i=1; i<11; i++){
    tot = tot + i
}
console.log(tot)

// num1 = alert('숫자1을 입력해주세요.')
// num2 = alert('숫자2를 입력해주세요.')
num1 = 5
num2 = 3
function addNumber (num1, num2) {
    return num1 + num2
}

console.log(addNumber(num1,num2))

addNumber2 = (num1,num2) => {return num1+num2};

console.log(addNumber2(num1,num2))

console.log(((num1, num2) => num1+num2)(2, 5))

