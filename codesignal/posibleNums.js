/*
* You have a collection of coins, and you know the values of the coins and the quantity of each type of coin in it. You want to know how many distinct sums you can make from non-empty groupings of these coins.

Example

For coins = [10, 50, 100] and quantity = [1, 2, 1], the output should be
possibleSums(coins, quantity) = 9.

Here are all the possible sums:

50 = 50;
10 + 50 = 60;
50 + 100 = 150;
10 + 50 + 100 = 160;
50 + 50 = 100;
10 + 50 + 50 = 110;
50 + 50 + 100 = 200;
10 + 50 + 50 + 100 = 210;
10 = 10;
100 = 100;
10 + 100 = 110.
As you can see, there are 9 distinct sums that can be created from non-empty groupings of your coins.
* */
function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
        //recursive case
    }else{
        return n * factorial(n-1);
    }
}

function possibleSums(coins, quantity) {

    const permutations = [];
    for (let i=0; i < coins.length ; i++){
        for (let j=1; j <= quantity[i] ; j++){

        }
    }
}

const coins = [10, 50, 100];
const quantity = [1, 2, 1];

/*
* n!/r!(n-r)!
n	=	total number of objects in the set
r	=	number of choosing objects from the se
* */
// console.log(possibleSums(coins, quantity));
const total = factorial(3) / (factorial(4)* factorial(mat3-));
console.log(total);
