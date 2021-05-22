// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     for (let i=1; i < 100000; i++){
//         if (!(A.includes(i))){
//             return i;
//         };
//     }
// }

//improving o(N)
function solution(A) {
    A.sort((a, b) => a - b);
    const longitud = (A.length)-1;
    const max = A[longitud]+1;
    if (max > 0){
        for (let i=1; i <= max; i++){
            if (!(A.includes(i))){
                return i;
            };
        }
    } else return 1;

}

// const A = [1, 3, 6, 4, 1, 2];
// const A = [1, 2, 3];
const A = [-1, -3];

console.log(solution(A));
