// 1. images 배열안에 있는 정보(height, width)를 곱해 넓이를 구하여 areas 배열에 저장하시오.
const images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 },
]
const areas = []
images.forEach(function (image) {
    areas.push(image.height*image.width)
})

console.log(images.map(a => a.height*a.width))
console.log(areas)
