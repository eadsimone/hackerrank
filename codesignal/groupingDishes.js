// dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
//     ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
//     ["Quesadilla", "Chicken", "Cheese", "Sauce"],
//     ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]
// output->
// groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
//     ["Salad", "Salad", "Sandwich"],
//     ["Sauce", "Pizza", "Quesadilla", "Salad"],
//     ["Tomato", "Pizza", "Salad", "Sandwich"]]
// function groupingDishes(dishes) {
// // dish ingreadientes
//
//     // function strcmp(a, b) {
//     //     if(a === b) {
//     //         return 0;
//     //     }
//     //
//     //     if (a > b) {
//     //         return 1;
//     //     }
//     //
//     //     return -1;
//     // }
//
//     const getArrayOfDishes = (dishes, ingredient) => {
//         const solution = [];
//         dishes.forEach(dish => {
//             if (dish.includes(ingredient)) {
//                 if (solution.length === 0) {
//                     solution.push(dish[0]);
//                 } else {
//                     // let lastElement = solution[solution.length - 1];
//                     // A negative number if referenceStr occurs before compareString;
//                     // positive if the referenceStr occurs after compareString;
//                     // 0 if they are equivalent.
//                     // if (lastElement.localeCompare(dish[0]) <= 0) {
//                     // if (strcmp(lastElement,dish[0]) <= 0) {
//                     //     solution.push(dish[0]);
//                     // } else {
//                     //     solution.unshift(dish[0]);
//                     // }
//                     solution.push(dish[0]);
//                 }
//             }
//         });
//         return solution.sort();
//         // return solution;
//     }
// // find dishes with ingreadientes
//     const condimentos = [];
//     const ingredientsVisited = [];
//
//     dishes.forEach(dish => {
//         console.log(dish);
//         dish.forEach((ingredient, index) => {
//                 if (!(ingredientsVisited.includes(ingredient)) && (index !== 0)) {
//                     ingredientsVisited.push(ingredient);
//                     let sol = getArrayOfDishes(dishes, ingredient);
//                     if (sol.length > 1) {
//                         sol.unshift(ingredient);
//                         condimentos.push(sol);
//                     }
//                 }
//             }
//         )
//     })
//     // console.log(condimentos);
//     // let algo = condimentos.sort((a, b) => a[0].localeCompare(b[0]));
//     // console.log(algo);
//     // return condimentos.sort((a, b) => a[0].localeCompare(b[0]))
//     return condimentos.sort((a,b) => {
//         if (a[0] < b[0]) {
//             return -1;
//         }
//         if (a[0] > b[0]) {
//             return 1;
//         }
//
//         // names must be equal
//         return 0;
//     });
//     // return condimentos;
// }
///The code above has high complexity
//reducing the complexity

//https://www.youtube.com/watch?v=rA2O5ZaMHnA
function groupingDishes(dishes) {
    let returnObject = {};
    for (let i = 0; i < dishes.length; i++) {
        for (let j = 1; j < dishes[i].length; j++) {
        let key = dishes[i][j];
        let dish = dishes[i][0];
        if(!returnObject[key]){
            returnObject[key] = {};
            returnObject[key].dishes = [];
        }
        returnObject[key].dishes.push(dish);
        }
    }

    let final = [];
    for(let key in returnObject){
        let obj = returnObject[key];
        let dishes = returnObject[key].dishes;
        if(dishes.length > 1){
            dishes.sort();
            dishes.unshift(key);
            final.push(dishes);
        }
    }

        return final.sort((a,b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }

        // names must be equal
        return 0;
    });
}

dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
    ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
    ["Quesadilla", "Chicken", "Cheese", "Sauce"],
    ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]];

console.log(groupingDishes(dishes));

