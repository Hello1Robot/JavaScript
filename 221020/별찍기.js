let n = 5
// \n으로 띄어쓰기
for(i=1; i<2*n; i=i+2){
    console.log(`${' '.repeat((((2*n-1)-i)/2))}${'*'.repeat(i)}${' '.repeat((((2*n-1)-i)/2))}`)
}

// function func(N){
//     if (N===1){
//         return ' * '
//     }
//     let me='*'
//     for (i=0;i<N-1;i+=1){
//         me+='**'
//     }
   
//     return func(N-1).replace(/ \*/g,'  *').replace(/\* /g,'* ')+'\n '+me+' '

// }


// console.log(func(5))