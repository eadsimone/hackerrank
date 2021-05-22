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

/**
 * The "median" is the "middle" value in the list of numbers.
 *
 * @param {Array} numbers An array of numbers.
 * @return {Number} The calculated median value from the specified numbers.
 */
const median = (numbers) => {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    let median = 0, numsLen = numbers.length;
    numbers.sort((a, b) => a - b);

    // is even
    if ( numsLen % 2 === 0 ) {
        // average of two middle numbers
        return (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        return numbers[(numsLen - 1) / 2];
    }
}

function quartiles(arr) {
    let numsLen = arr.length;
    arr.sort((a, b) => a - b);

    let q1= null, q3= null;
    const q2= median(arr);
    const mid = Math.ceil(arr.length/2);
    let obj = {};

    if ( numsLen % 2 === 0 ) {
        obj.left = arr.slice(0, mid);
        obj.right = arr.slice(mid);
        } else { // is odd
        obj.left = arr.slice(0, mid-1);
        obj.right = arr.slice(mid);
    }
    q1= median(obj.left);
    q3= median(obj.right);
    // console.log(q1);
    // console.log(q2);
    // console.log(q3);
    const solution = [q1,q2,q3];
    return solution;
}

const arr = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49];
/*
    Lower half: 6, 7, 15, 36, 39

    Upper half: 41, 42, 43, 47, 49
*/

// const arr = [7, 15, 36, 39, 40, 41];
/*
    Lower half: 7, 15, 36

    Upper half: 39, 40, 41

*/
quartiles(arr);
