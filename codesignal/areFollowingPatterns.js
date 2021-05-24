/*
* Given an array strings, determine whether it follows the sequence given in the patterns array. In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

Example

For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = true;
For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = false
* */

function areFollowingPatterns(strings, patterns) {
    for (let i = 0; i < strings.length; i++) {
        //     let j= i+1;
        //     if ( j <  strings.length ){
        //         if (((strings[i] === strings[j]) &&  (patterns[i] !== patterns[j]) || ( (strings[i] !== strings[j] ) && ( patterns[i] === patterns[j])))){
        //             return false;
        //         }
        //     }

        if (patterns.indexOf(patterns[i]) !== strings.indexOf(strings[i])) return false;
    }
    return true;
}

// strings = ["cat", "dog", "doge"];
// patterns = ["a", "b", "b"];

strings = ["r", "b", "r"];
patterns = ["a", "b", "a"];

console.log(areFollowingPatterns(strings, patterns));
