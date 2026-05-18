const employees = [
    { id: 1, name: "Alice", age: 23, status: 'working' },
    { id: 3, name: "Bob", age: 25, status: 'working' },
    { id: 6, name: "John", age: 27, status: 'working' },
    { id: 8, name: "David", age: 23, status: 'quit_job' },
    { id: 10, name: "Eve", age: 20, status: 'working' },
];


const products = [
    { id: 1, name: "Phone", price: 1200 },
    { id: 2, name: "Laptop", price: 3000  },
    { id: 3, name: "Tab", price: 2000  },
    { id: 4, name: "PC", price: 800  },
    { id: 5, name: "Monitor", price: 1500  },
]


const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 3, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 3 },
    { id: 4, employeeId: 6, productId: 1, quantity: 2 },
    { id: 5, employeeId: 3, productId: 5, quantity: 3 },
    { id: 6, employeeId: 8, productId: 1, quantity: 1 },
    { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

// CREATE HASH MAP

const employeeMap = {}
const productMap = {}

for (const employee of employees) {
    employeeMap[employee.id] = employee
}

for (const product of products) {
    productMap[product.id] = product
}

// COMMON FUNCTIONS

function getRevenueOfOrder(order) {
    const product = productMap[order.productId]

    return product.price * order.quantity
}

// QUICK SORT
// =========================

function quickSort(arr) {

    if (arr.length <= 1) {
        return arr
    }

    const pivot = arr[0]

    const left = []
    const right = []

    for (let i = 1; i < arr.length; i++) {

        if (arr[i].revenue > pivot.revenue) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ]
}

// ==================== Exercise 1 ====================

function getWorkingEmployees(){
    const result = [];
    for (const employee of employees) {
        if(employee.status === 'working'){
            result.push(employee);
        }
    }
    return result;
}
console.log('Exercise 1:')
console.log(getWorkingEmployees());

// ==================== Exercise 2 ====================

function getOldestEmployee(){
    let oldestEmployees = employees[0];
    for (const employee of employees) {
        if(employee.age > oldestEmployees.age){
            oldestEmployees = employee;
        }
    }
    return oldestEmployees;
}
console.log('Exercise 2:')
console.log(getOldestEmployee());

// ==================== Exercise 3 ====================

function getCheapestProduct(){
    let cheapestProduct = products[0];
    for (const product of products) {
        if(product.price < cheapestProduct.price){
            cheapestProduct = product;
        }
    }
    return cheapestProduct;
}
console.log('Exercise 3:')
console.log(getCheapestProduct());

// ==================== Exercise 4 ====================

function getBestSellingProduct() {

    const productQuantityMap = {}

    for (const order of orders) {

        if (productQuantityMap[order.productId]) {
            productQuantityMap[order.productId] += order.quantity
        } else {
            productQuantityMap[order.productId] = order.quantity
        }
    }

    let maxQuantity = -Infinity
    let bestProductId = null

    for (const productId in productQuantityMap) {

        if (productQuantityMap[productId] > maxQuantity) {
            maxQuantity = productQuantityMap[productId]
            bestProductId = Number(productId)
        }
    }

    return productMap[bestProductId]
}

console.log('Exercise 4')
console.log(getBestSellingProduct())

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

    let maxRevenue = -Infinity
    let bestProductId = null

    for (const productId in productRevenueMap) {

        if (productRevenueMap[productId] > maxRevenue) {
            maxRevenue = productRevenueMap[productId]
            bestProductId = Number(productId)
        }
    }

    return productMap[bestProductId]
}

console.log('Exercise 5')
console.log(getProductWithHighestRevenue())

// ==================== Exercise 6 ====================

function getBestEmployeeByQuantity() {

    const employeeQuantityMap = {}

    for (const order of orders) {

        if (employeeQuantityMap[order.employeeId]) {
            employeeQuantityMap[order.employeeId] += order.quantity
        } else {
            employeeQuantityMap[order.employeeId] = order.quantity
        }
    }

    let maxQuantity = -Infinity
    let bestEmployeeId = null

    for (const employeeId in employeeQuantityMap) {

        if (employeeQuantityMap[employeeId] > maxQuantity) {
            maxQuantity = employeeQuantityMap[employeeId]
            bestEmployeeId = Number(employeeId)
        }
    }

    return employeeMap[bestEmployeeId]
}

console.log('Exercise 6:')
console.log(getBestEmployeeByQuantity())

// ==================== Exercise 7 ====================

function getBestEmployeeByRevenue() {

    const employeeRevenueMap = {}

    for (const order of orders) {

        const revenue = getRevenueOfOrder(order)

        if (employeeRevenueMap[order.employeeId]) {
            employeeRevenueMap[order.employeeId] += revenue
        } else {
            employeeRevenueMap[order.employeeId] = revenue
        }
    }

    let maxRevenue = -Infinity
    let bestEmployeeId = null

    for (const employeeId in employeeRevenueMap) {

        if (employeeRevenueMap[employeeId] > maxRevenue) {
            maxRevenue = employeeRevenueMap[employeeId]
            bestEmployeeId = Number(employeeId)
        }
    }

    return employeeMap[bestEmployeeId]
}

console.log('Exercise 7:')
console.log(getBestEmployeeByRevenue())

// ==================== Exercise 8 ====================

function getBestProductOfEachEmployee() {

    const result = []

    for (const employee of employees) {

        let maxRevenue = 0
        let bestProduct = null

        for (const product of products) {

            let totalRevenue = 0

            for (const order of orders) {

                if (
                    order.employeeId === employee.id &&
                    order.productId === product.id
                ) {
                    totalRevenue += product.price * order.quantity
                }
            }

            if (totalRevenue > maxRevenue) {
                maxRevenue = totalRevenue
                bestProduct = product
            }
        }

        result.push({
            employeeName: employee.name,
            bestProduct: bestProduct,
            revenue: maxRevenue
        })
    }

    return result
}

console.log('Exercise 8:')
console.log(getBestProductOfEachEmployee())

// ==================== Exercise 9 ====================

function getCommissionOfEmployees() {

    const employeeRevenueMap = {}

    for (const order of orders) {

        const revenue = getRevenueOfOrder(order)

        if (employeeRevenueMap[order.employeeId]) {
            employeeRevenueMap[order.employeeId] += revenue
        } else {
            employeeRevenueMap[order.employeeId] = revenue
        }
    }

    const result = []

    for (const employeeId in employeeRevenueMap) {

        const revenue = employeeRevenueMap[employeeId]

        result.push({
            employeeName: employeeMap[employeeId].name,
            revenue: revenue,
            commission: revenue * 0.03
        })
    }

    return result
}

console.log('Exercise 9:')
console.log(getCommissionOfEmployees())

// ==================== Exercise 10 ====================

function sortEmployeesByRevenueDesc() {

    const employeeRevenueMap = {}

    for (const order of orders) {

        const revenue = getRevenueOfOrder(order)

        if (employeeRevenueMap[order.employeeId]) {
            employeeRevenueMap[order.employeeId] += revenue
        } else {
            employeeRevenueMap[order.employeeId] = revenue
        }
    }

    const result = []

    for (const employeeId in employeeRevenueMap) {

        result.push({
            ...employeeMap[employeeId],
            revenue: employeeRevenueMap[employeeId]
        })
    }

    return quickSort(result)
}

console.log('Exercise 10:')
console.log(sortEmployeesByRevenueDesc())