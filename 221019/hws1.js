// 1번
const nums = [1,2,3,4,5,6,7,8]

// i를 const로 지정하면, const의 경우 읽기전용이기 때문에 
// 값 변경이 불가능하여 에러가 발생한다.
// 재할당 가능한 let으로 선언하면 해결할 수 있다.
for (let i = 0; i < nums.length; i++) {
  console.log(i)
}

// for (const i = 0; i < nums.length; i++) {
//                                     ^

// TypeError: Assignment to constant variable.

// 2번
for (num of nums) {
    // for in 의 경우 객체순환이기 때문에, key값이 반환된다.
    // key값을 토대로 해당 리스트 값에 접근하면 해결할 수 있다.
    // 아니면, literable 순회인 for of 를 사용할 수도 있다.
    // value = nums[num]
  console.log(num, typeof num)
//   console.log(value, typeof value)
}

// 0 string
// 1 string
// 2 string
// 3 string
// 4 string
// 5 string
// 6 string
// 7 string
