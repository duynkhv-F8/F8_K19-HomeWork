const numbers = [9, 8, 3, 5, 6, 2, 7, 9];
// Expected result: 8
function solution(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;
    for (const number of arr) {
        if (number > max) {
            secondMax = max;
            max = number;
        }
        else if (number < max && number > secondMax) {
            secondMax = number;
        }
    }
    return secondMax;
}
console.log(solution(numbers));