const classA = [15, 2, 8, 10];
const classB = [8, 11, 2, 5, 9];

// Step 1: Gộp mảng bằng spread
const merged = [...classA, ...classB];

console.log(merged);
// [15, 2, 8, 10, 8, 11, 2, 5, 9]

// Step 2: Xóa phần tử trùng
const map = {};
const uniqueArray = [];

for (const num of merged) {

    if (!map[num]) {
        map[num] = true;
        uniqueArray.push(num);
    }
}

console.log(uniqueArray);

// Step 3: Quick Sort
function quickSort(numbers) {

    // Điều kiện dừng
    if (numbers.length <= 1) {
        return numbers;
    }

    // Chọn pivot
    const mid = Math.floor(numbers.length / 2);
    const pivot = numbers[mid];

    const leftArr = [];
    const rightArr = [];

    // Chia mảng
    for (let i = 0; i < numbers.length; i++) {

        // bỏ qua pivot
        if (i === mid) {
            continue;
        }

        if (numbers[i] < pivot) {
            leftArr.push(numbers[i]);
        } else {
            rightArr.push(numbers[i]);
        }
    }

    return [
        ...quickSort(leftArr),
        pivot,
        ...quickSort(rightArr)
    ];
}

const result = quickSort(uniqueArray);

console.log(result);
