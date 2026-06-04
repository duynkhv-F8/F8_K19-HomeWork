const employees = [
    {id: 1, name: "Alice", age: 23, status: 'working'},
    {id: 3, name: "Bob", age: 25, status: 'working'},
    {id: 6, name: "John", age: 27, status: 'working'},
    {id: 8, name: "David", age: 23, status: 'quit_job'},
    {id: 10, name: "Eve", age: 20, status: 'working'},
];


const products = [
    {id: 1, name: "Phone", price: 1200},
    {id: 2, name: "Laptop", price: 3000},
    {id: 3, name: "Tab", price: 2000},
    {id: 4, name: "PC", price: 800},
    {id: 5, name: "Monitor", price: 1500},
]


const orders = [
    {id: 1, employeeId: 1, productId: 4, quantity: 1},
    {id: 2, employeeId: 3, productId: 2, quantity: 4},
    {id: 3, employeeId: 1, productId: 5, quantity: 3},
    {id: 4, employeeId: 6, productId: 1, quantity: 2},
    {id: 5, employeeId: 3, productId: 5, quantity: 3},
    {id: 6, employeeId: 8, productId: 1, quantity: 1},
    {id: 7, employeeId: 10, productId: 3, quantity: 2},
];
// CREAT HASH MAP

const productsMap = {}
for (const product of products) {
    productsMap[product.id] = product;
}
const employeeMap = {}
for (const employee of employees) {
    employeeMap[employee.id] = employee;
}

// COMMON FUNCTION

function getRevenueOfOrder(order) {
    const product = productsMap[order.productId];
    return product.price * order.quantity
}

function getRevenueMap() {
    const revenueMap = {}
    for (let order of orders) {
        const revenue = getRevenueOfOrder(order)
        if (revenueMap[order.employeeId]) {
            revenueMap[order.employeeId] += revenue
        } else revenueMap[order.employeeId] = revenue
    }
    return revenueMap
}

function getMaxKey(map) {

    let maxValue = -Infinity
    let maxKey = null

    for (const key in map) {

        if (map[key] > maxValue) {
            maxValue = map[key]
            maxKey = key
        }
    }

    return maxKey
}

// QUICKSORT

function quickSort(arr) {
    if (arr.length <= 1) return arr
    const mid = Math.floor((arr.length) / 2)
    const pivot = arr[mid]
    const leftArr = []
    const rightArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i === mid) continue
        if (arr[i].revenue < pivot.revenue) {
            leftArr.push(arr[i])
        } else rightArr.push(arr[i])
    }
    return [...quickSort(rightArr), pivot, ...quickSort(leftArr)]
}

// ==================== Exercise 1 ====================

function getWorkingEmployees() {
    const result = [];
    for (const employee of employees) {
        if (employee.status === 'working') {
            result.push(employee);
        }
    }
    return result;
}

console.log('Exercise 1:')
console.log(getWorkingEmployees());

// ==================== Exercise 2 ====================

function getOldestEmployee() {
    let oldestEmployee = employees[0];
    for (const employee of employees) {
        if (employee.age > oldestEmployee.age) {
            oldestEmployee = employee;
        }
    }
    return oldestEmployee;
}

console.log('Exercise 2:')
console.log(getOldestEmployee());

// ==================== Exercise 3 ====================

function getCheapestProduct() {
    let cheapestProduct = products[0];
    for (const product of products) {
        if (product.price < cheapestProduct.price) {
            cheapestProduct = product;
        }
    }
    return cheapestProduct;
}

console.log('Exercise 3:')
console.log(getCheapestProduct());

// ==================== Exercise 4 ====================

function getBestProduct() {

    const productQuantityMap = {}

    for (const order of orders) {

        if (productQuantityMap[order.productId]) {
            productQuantityMap[order.productId] += order.quantity
        } else {
            productQuantityMap[order.productId] = order.quantity
        }
    }

    const bestProductId = getMaxKey(productQuantityMap)

    return productsMap[bestProductId]
}

console.log('Exercise 4:')
console.log(getBestProduct());

// ==================== Exercise 5 ====================
function getProductWithHighestRevenue() {
    const productRevenueMap = {}

    for (const order of orders) {

        const revenue = getRevenueOfOrder(order)

        if (productRevenueMap[order.productId]) {
            productRevenueMap[order.productId] += revenue
        } else {
            productRevenueMap[order.productId] = revenue
        }
    }
    let maxRevenue = -Infinity;
    let bestProductIdByRevenue = null
    for (const productId in productRevenueMap) {
        if (productRevenueMap[productId] > maxRevenue) {
            maxRevenue = productRevenueMap[productId];
            bestProductIdByRevenue = Number(productId);
        }
    }
    return productsMap[bestProductIdByRevenue];
}

console.log('Exercise 5:')
console.log(getProductWithHighestRevenue());

// ==================== Exercise 6 ====================
function bestEmployeeSaleByQuantity() {
    const productQuantityByEmployeeMap = {}
    for (let order of orders) {
        if (productQuantityByEmployeeMap[order.employeeId]) {
            productQuantityByEmployeeMap[order.employeeId] += order.quantity
        } else productQuantityByEmployeeMap[order.employeeId] = order.quantity
    }
    let maxQuantity = -Infinity;
    let bestEmployeeId = null
    for (const employeeId in productQuantityByEmployeeMap) {
        if (productQuantityByEmployeeMap[employeeId] > maxQuantity) {
            maxQuantity = productQuantityByEmployeeMap[employeeId];
            bestEmployeeId = Number(employeeId);
        }
    }
    return employeeMap[bestEmployeeId];
}

console.log('Exercise 6:')
console.log(bestEmployeeSaleByQuantity());

// ==================== Exercise 7 ====================
function bestEmployeeSaleByRevenue() {

    const revenueByEmployeeMap = getRevenueMap()

    const bestEmployeeId = getMaxKey(revenueByEmployeeMap)

    return employeeMap[bestEmployeeId]
}

console.log('Exercise 7:')
console.log(bestEmployeeSaleByRevenue());

// ==================== Exercise 8 ====================
function getBestProductOfEachEmployee() {
    const employeeProductRevenueMap = {}
    for (const order of orders) {
        const revenue = getRevenueOfOrder(order)
        const key = `${order.employeeId}-${order.productId}`;
        if (employeeProductRevenueMap[key]) {
            employeeProductRevenueMap[key] += revenue;
        } else employeeProductRevenueMap[key] = revenue;
    }
    const bestProductOfEmployeeMap = {}
    for (const key in employeeProductRevenueMap) {
        const splitKey = key.split('-')
        const employeeId = splitKey[0]
        const productId = splitKey[1]
        const revenue = employeeProductRevenueMap[key];
        if (!bestProductOfEmployeeMap[employeeId] || revenue > bestProductOfEmployeeMap[employeeId].revenue) {
            bestProductOfEmployeeMap[employeeId] = {
                product: productsMap[productId],
                revenue: revenue
            }
        }
    }
    const result = []
    for (const key in bestProductOfEmployeeMap) {
        const bestData = bestProductOfEmployeeMap[key];
        result.push({
            employeeName: employeeMap[key].name,
            bestProduct: bestData.product,
            revenue: bestData.revenue
        })
    }
    return result
}

console.log('Exercise 8:')
console.log(getBestProductOfEachEmployee());

// ==================== Exercise 9 ====================
function getCommissionOfEachEmployee() {
    const revenueOfEmployeeMap = getRevenueMap()
    const result = []
    for (const key in revenueOfEmployeeMap) {
        result.push({
            employeeName: employeeMap[key].name,
            commission: revenueOfEmployeeMap[key] * 0.03
        })
    }
    return result
}

console.log('Exercise 9:')
console.log(getCommissionOfEachEmployee());

// ==================== Exercise 10 ====================
function sortedEmployeeByRevenue() {
    const revenueOfEmployeeMap = getRevenueMap()
    const result = []
    for (const key in revenueOfEmployeeMap) {
        result.push({
            ...employeeMap[key],
            revenue: revenueOfEmployeeMap[key]
        })
    }
    return quickSort(result)
}

console.log('Exercise 10:')
console.log(sortedEmployeeByRevenue());