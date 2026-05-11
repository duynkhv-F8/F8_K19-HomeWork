const products = [
    {id: 1, name: 'iPhone', price: 2000},
    {id: 2, name: 'Samsung', price: 1500},
    {id: 3, name: 'Xiaomi', price: 1000},
    {id: 4, name: 'Oppo', price: 1200}
]

const orders = [
    {
        id: 1,
        items: [
            {productId: 1, quantity: 2},
            {productId: 2, quantity: 1}
        ]
    },
    {
        id: 2,
        items: [
            {productId: 1, quantity: 1},
            {productId: 3, quantity: 3}
        ]
    },
    {
        id: 3,
        items: [
            {productId: 2, quantity: 2},
            {productId: 4, quantity: 1}
        ]
    }
]

let productMap = {}

for (let pIdx = 0; pIdx < products.length; pIdx++) {
    const product = products[pIdx]

    productMap[product.id] = product
}

let revenueMap = {}

for (let oIdx = 0; oIdx < orders.length; oIdx++) {

    const order = orders[oIdx]

    for (let iIdx = 0; iIdx < order.items.length; iIdx++) {

        const item = order.items[iIdx]

        const product = productMap[item.productId]

        const revenue = item.quantity * product.price

        if (revenueMap[item.productId] === undefined) {
            revenueMap[item.productId] = 0
        }

        revenueMap[item.productId] += revenue
    }
}

let maxRevenue = 0
let topProduct = null

for (let pIdx = 0; pIdx < products.length; pIdx++) {

    const product = products[pIdx]

    const revenue = revenueMap[product.id]

    if (revenue > maxRevenue) {
        maxRevenue = revenue
        topProduct = product
    }
}

console.log(topProduct)
console.log('Doanh thu lớn nhất là: ' + maxRevenue)