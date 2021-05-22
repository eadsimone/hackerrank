/*
* Objective
In this challenge, we practice calculating the mean, median, and mode. Check out the Tutorial tab for learning materials and an instructional video!

Task
Given an array,
, of

integers, calculate and print the respective mean, median, and mode on separate lines. If your array contains more than one modal value, choose the numerically smallest one.

Note: Other than the modal value (which will always be an integer), your answers should be in decimal form, rounded to a scale of
decimal place (i.e., , format).
* */

// const input = `10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060`;
const input = `10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060`;

console.log(input);

//mean/average method
const mean = (numbers) => numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

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

/**
* The "mode" is the number that is repeated most often.
*
* For example, the "mode" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 3, 4].
*
* @param {Array} numbers An array of numbers.
* @return {Array} The mode of the specified numbers.
*/
function mode(numbers) {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
    let modes = [], count = [], i, number, maxIndex = 0;

    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
}
/*
 * Complete the 'weightedMean' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY X
 *  2. INTEGER_ARRAY W
 */

function weightedMean(X, W) {
    // Write your code here
    let totalX= X.reduce((acc, val, i) => acc + (val* W[i]), 0);
    let totalW= W.reduce((acc, val) => acc + val, 0);
    let result = totalX/totalW;
    console.log(Number.parseFloat(result).toFixed(1));
    // return Number.parseFloat(result).toFixed(1);;
}


weightedMean([10, 40, 30, 50, 20], [1, 2, 3, 4, 5]);
