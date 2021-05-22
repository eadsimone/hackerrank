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

//mean/average method
const mean = (numbers) => numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

/*
 * Complete the 'stdDev' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function stdDev(arr) {
    // Print your answers to 1 decimal place within this function
    const avg = mean(arr);
    const deviationArray = arr.map((e) => {
        return Math.pow(Math.abs(e-avg), 2);
    });
    const deviation = (numbers) => numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
    console.log(Math.sqrt(deviation(deviationArray)).toFixed(1));
}

const  arr =[10, 40, 30, 50, 20];

const interA = stdDev(arr);
console.log(interA);
