const numbers = [9, 8, 3, 5, 6, 2, 7, 9];
// Expected result: 8
function solution(arr) {
    let max = arr[0];
    let answer = 0;

    // Tìm giá trị ban đầu cho answer
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max) {
            answer = arr[i];
            break;
        }
    }

    // Tìm số lớn thứ 2
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            answer = max;
            max = arr[i];
        }

        else if (arr[i] > answer && arr[i] < max) {
            answer = arr[i];
        }
    }

    return answer;
}
console.log(solution(numbers));