const API_URL = 'https://fakestoreapi.com/products';
let allProducts = []
let cartCount = 0;

//Elements kết nối DOM
const categoryItem = document.querySelectorAll('.category-item');
const currentCategoryTitle = document.getElementById('current-category-title');
const totalProductsEl = document.getElementById('total-products');
const loader = document.getElementById('loader');
const productGrid = document.getElementById('products-grid');
const cartBadge = document.getElementById('cart-badge');

//Gọi API lấy dữ liệu sp
async function fetchProducts() {
    try {
        loader.style.display = 'block';
        const response = await fetch(API_URL);
        allProducts = await response.json();
        loader.style.display = 'none';
        console.log(allProducts);
        renderProduct(allProducts);
    } catch (e) {
        console.error("Lỗi khi fetch dữ liệu: ", e);
        loader.innerText = "Không thể tải dữ liệu. Vui lòng thử lại!"
    }
}

//Render danh sách sản phẩm
function renderProduct(products) {
    totalProductsEl.innerText = products.length;
    if (products.length === 0) {
        productGrid.innerHTML = '<p class="loader">Không tìm thấy sản phẩm nào.</p>';
        return
    }
    productGrid.innerHTML = products.map((product) => `<div class="product-card">
        <span class="product-tag">${product.category}</span>
        <div class="product-img-wrapper">
            <img src="${product.image}" alt="${product.title}"/>
        </div>
        <h3 class="product-title" title="${product.title}">${product.title}</h3>
        <div class="product-rating">
            <i class="fa-solid fa-star star"></i>
            <span><strong>${product.rating?.rate || 0}</strong> (${product.rating?.count || 0})</span>
        </div>
        <div class="product-footer">
            <span class="product-price">$${product.price.toFixed(2)}</span>
            <button class="btn-add-cart" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>`).join('')
    initCartEvent()
}

// phân loại theo Category khi click vào từng mục ở Sidebar
categoryItem.forEach((category) => {
    category.addEventListener('click', () => {
        categoryItem.forEach(i =>
            i.classList.remove('active'))
        category.classList.add('active')
        const selectedCategory = category.getAttribute('data-category')
        if (selectedCategory === 'all') {
            currentCategoryTitle.innerText = 'Tất cả sản phẩm';
            renderProduct(allProducts)
        } else {
            currentCategoryTitle.innerText = selectedCategory
            const filtered = allProducts.filter(p => p.category === selectedCategory)
            renderProduct(filtered)
        }
    })
})

// Tăng số lượng giỏ hàng
function initCartEvent() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            cartCount++;
            cartBadge.textContent = cartCount;

            //Hiệu ứng đổi màu khi bấm vào button
            const btn = e.currentTarget
            btn.style.background = 'green' // Báo đã bấm vào nút
            //Bấm xong trở về trạng thái ban đầu 3 mili giây
            setTimeout(() =>
                    btn.style.background = ''
                , 300)
        })
    })
}

// chạy
fetchProducts();