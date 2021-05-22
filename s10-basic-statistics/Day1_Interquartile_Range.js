/*
* Objective
In this challenge, we practice calculating quartiles. Check out the Tutorial tab for learning materials and an instructional video!

Task
Given an array,
, of integers, calculate the respective first quartile (), second quartile (), and third quartile (). It is guaranteed that , , and

are integers.

Example
The sorted array is which has an odd number of elements. The lower half consists of , and its median is . The middle element is and represents the second quartile. The upper half is and its median is . Return .
* */

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

/**
 * The "median" is the "middle" value in the list of numbers.
 *
 * @param {Array} numbers An array of numbers.
 * @return {Number} The calculated median value from the specified numbers.
 */
const medianFloat = (numbers) => {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    let median = 0, numsLen = numbers.length;
    numbers.sort((a, b) => a - b);

    // is even
    if ( numsLen % 2 === 0 ) {
        // average of two middle numbers
        let n =  (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
        let floatN = round(n,1);
        return floatN;
    } else { // is odd
        // middle number only
        // return numbers[(numsLen - 1) / 2];
        let n =  numbers[(numsLen - 1) / 2];
        let floatN = round(n,1);

        return floatN;
    }
}

function quartiles(arr) {
    let numsLen = arr.length;
    arr.sort((a, b) => a - b);

    let q1= null, q3= null;
    const q2= medianFloat(arr);
    const mid = Math.ceil(arr.length/2);
    let obj = {};

    if ( numsLen % 2 === 0 ) {
        obj.left = arr.slice(0, mid);
        obj.right = arr.slice(mid);
        } else { // is odd
        obj.left = arr.slice(0, mid-1);
        obj.right = arr.slice(mid);
    }
    q1= medianFloat(obj.left);
    q3= medianFloat(obj.right);
    // console.log(q1);
    // console.log(q2);
    // console.log(q3);
    const solution = [q1,q2,q3];
    return solution;
}

function interQuartile(values, freqs) {
    // Print your answer to 1 decimal place within this function
    const finalArray = [];
    for (let i=0; i < freqs.length; i++ ){
        for (let f=0; f < freqs[i]; f++ ){
            finalArray.push(values[i]);
        }
    }
    // return finalArray;
    const qa = quartiles(finalArray);
    // return qa[2]-qa[0];
    console.log((qa[2]-qa[0]).toFixed(1));
}


const arr = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49];

const values = [6, 12, 8, 10, 20, 16];
const  freqs = [5, 4, 3, 2, 1, 5];
const interA = interQuartile(values,freqs);
console.log(interA);
