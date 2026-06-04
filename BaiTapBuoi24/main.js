const API_URL = 'https://fakestoreapi.com/products';
let allProducts = [];
let cartCount = 0;

// Elements kết nối DOM
const productsGrid = document.getElementById('products-grid');
const loader = document.getElementById('loader');
const totalProductsEl = document.getElementById('total-products');
const categoryItems = document.querySelectorAll('.category-item');
const currentCategoryTitle = document.getElementById('current-category-title');
const cartBadge = document.getElementById('cart-badge');

// 1. Gọi API lấy dữ liệu sản phẩm
async function fetchProducts() {
    try {
        loader.style.display = 'block';
        const response = await fetch(API_URL);
        allProducts = await response.json();

        loader.style.display = 'none';
        renderProducts(allProducts);
    } catch (error) {
        console.error('Lỗi khi fetch dữ liệu:', error);
        loader.innerText = 'Không thể tải dữ liệu sản phẩm. Vui lòng thử lại!';
    }
}

// 2. Render HTML danh sách sản phẩm ra Grid
function renderProducts(products) {
    productsGrid.innerHTML = '';
    totalProductsEl.innerText = products.length;

    if (products.length === 0) {
        productsGrid.innerHTML = '<p class="loader">Không tìm thấy sản phẩm nào.</p>';
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <span class="product-tag">${product.category}</span>
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <h3 class="product-title" title="${product.title}">${product.title}</h3>
            <div class="product-rating">
                <i class="fa-solid fa-star star"></i>
                <span><strong>${product.rating?.rate || 0}</strong> (${product.rating?.count || 0})</span>
            </div>
            <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="btn-add-cart" data-id="${product.id}" title="Thêm vào giỏ hàng">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Sau khi render xong, gán sự kiện click cho nút Mua hàng
    initCartEvents();
}

// 3. Xử lý tính năng Filter phân loại theo Category khi nhấn Sidebar
categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Thay đổi UI class active
        categoryItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const selectedCategory = item.getAttribute('data-category');

        // Cập nhật tên tiêu đề danh mục hiển thị
        if (selectedCategory === 'all') {
            currentCategoryTitle.innerText = 'Tất cả sản phẩm';
            renderProducts(allProducts);
        } else {
            currentCategoryTitle.innerText = selectedCategory;
            const filtered = allProducts.filter(p => p.category === selectedCategory);
            renderProducts(filtered);
        }
    });
});

// 4. Xử lý tăng số lượng Giỏ hàng
function initCartEvents() {
    const addCartButtons = document.querySelectorAll('.btn-add-cart');
    addCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            cartCount++;
            cartBadge.innerText = cartCount;

            // Hiệu ứng đổi màu button nhanh khi click tạo cảm giác tương tác tốt
            const btn = e.currentTarget;
            btn.style.backgroundColor = '#22c55e'; // Màu xanh lá cây báo thành công
            setTimeout(() => {
                btn.style.backgroundColor = '';
            }, 300);
        });
    });
}

// Khởi chạy ứng dụng
fetchProducts();