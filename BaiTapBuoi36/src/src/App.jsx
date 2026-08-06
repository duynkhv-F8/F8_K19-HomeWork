import styles from './App.module.css'

function App() {
    const categories = [
        {
            name: "Điện thoại chơi game",
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png'
        },
        {
            name: 'Điện thoại pin trâu',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-pin.png'
        },
        {
            name: 'Điện thoại 5G',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-5g_1.png'
        },
        {
            name: 'Điện thoại gập',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gap_1.png'
        },
        {
            name: 'Điện thoại AI',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-ai-icon-cate.png'
        },
        {
            name: 'Điện thoại phổ thông',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-pho-thong-icon-cate.png'
        },
        {
            name: 'Điện thoại gập',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gap_1.png'
        },
        {
            name: 'Điện thoại 5G',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-5g_1.png'
        },

    ]

    const brands = ['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'TECNO', 'HONOR', 'Nubia', 'Sony', 'Nokia', 'Infinix']

    const products = [
        {
            name: 'iPhone 17 Pro Max 256GB | Chính hãng',
            price: '35.990.000đ',
            oldPrice: '37.990.000đ',
            discount: 'Giảm 5%',
            installment: 'Trả góp 0%',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-max_3.jpg',
            memberPromo: 'Smember giảm đến 360.000đ',
            studentPromo: 'Trả góp 0% - 0đ phụ phí - 0đ trả trước - kỳ hạn 6 tháng',
            rating: 5
        },
        {
            name: 'Samsung Galaxy S26 Ultra 5G 12GB 256GB',
            price: '30.890.000đ',
            oldPrice: '36.990.000đ',
            discount: 'Giảm 16%',
            installment: 'Trả góp 0%',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-10.jpg',
            memberPromo: 'Smember giảm đến 309.000đ',
            studentPromo: 'S-Student giảm thêm 500.000đ',
            rating: 5
        },
        {
            name: 'OPPO Find X9 Ultra 12GB 512GB',
            price: '48.990.000đ',
            oldPrice: '49.990.000đ',
            discount: 'Giảm 2%',
            installment: 'Trả góp 0%',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg',
            memberPromo: 'Smember giảm đến 490.000đ',
            studentPromo: 'S-Student giảm thêm 300.000đ',
            rating: 5
        },
        {
            name: 'Samsung Galaxy Z Fold7 12GB 256GB',
            price: '41.990.000đ',
            oldPrice: '46.990.000đ',
            discount: 'Giảm 11%',
            installment: 'Trả góp 0%',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-fold-8-lavender-01.jpg',
            memberPromo: 'Smember giảm đến 420.000đ',
            studentPromo: 'S-Student giảm thêm 500.000đ',
            rating: 5
        },
        {
            name: 'Samsung Galaxy S26 5G 12GB 256GB',
            price: '21.490.000đ',
            oldPrice: '25.990.000đ',
            discount: 'Giảm 17%',
            installment: 'Trả góp 0%',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg',
            memberPromo: 'Smember giảm đến 215.000đ',
            studentPromo: 'S-Student giảm thêm 500.000đ',
            rating: 5
        },
        {
            name: 'Xiaomi Redmi Note 14 Pro Plus 5G 8GB 256GB',
            price: '8.490.000đ',
            oldPrice: '10.800.000đ',
            discount: 'Giảm 21%',
            installment: 'Trả góp 0%',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/redmi-note-15-series-8_1_2.jpg',
            memberPromo: 'Smember giảm đến 85.000đ',
            studentPromo: 'S-Student giảm thêm 300.000đ',
            rating: 5
        },
        {
            name: 'Samsung Galaxy S25 Ultra 12GB 256GB',
            price: '27.790.000đ',
            oldPrice: '33.380.000đ',
            discount: 'Giảm 17%',
            installment: 'Trả góp 0%',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:100/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg',
            memberPromo: 'Smember giảm đến 278.000đ',
            studentPromo: 'S-Student giảm thêm 500.000đ',
            rating: 4.7
        },
        {
            name: 'Samsung Galaxy A07 5G 4GB 128GB',
            price: '4.790.000đ',
            oldPrice: '5.000.000đ',
            discount: 'Giảm 6%',
            installment: 'Trả góp 0%',
            img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-a17-5g-back.jpg',
            memberPromo: 'Smember giảm đến 48.000đ',
            studentPromo: 'S-Student giảm thêm 239.500đ',
            rating: 5
        }
    ]


    return (

        <main>
            <div className={styles.container}>

                <input hidden type="radio" id="phone-tab" name="tab-toggle" defaultChecked/>
                <input hidden type="radio" id="tab-tab" name="tab-toggle"/>

                <div className={styles["tab-bar"]}>
                    <label className={styles.tab} htmlFor="phone-tab">
                        ĐIỆN THOẠI
                    </label>

                    <label className={styles.tab} htmlFor="tab-tab">
                        MÁY TÍNH BẢNG
                    </label>
                </div>

                <div className={styles["product-list"]}>

                    {/* Categories */}

                    <div className={styles.categories}>
                        {categories.map((category, index) => (
                            <div className={styles.category} key={index}>
                                <img className={styles['category-img']} src={category.img} alt={category.name}/>
                                <div className={styles['category-name']}>{category.name}</div>
                            </div>
                        ))}
                    </div>

                    {/* Brands */}

                    <div className={styles.brands}>

                        {brands.map((brand, index) => (
                            <div className={styles.brand} key={index}>{brand}</div>
                        ))}

                    </div>

                    {/* Products */}

                    <div className={styles.products}>

                        {products.map((product, index) => (
                            <div className={styles.product} key={index}>
                                <div className={styles["product-discount"]}>
                                    {product.discount}
                                </div>
                                <div className={styles["product-installment"]}>
                                    {product.installment}
                                </div>
                                <div className={styles["product-img"]}>
                                    <img src={product.img} alt={product.name}/>
                                </div>
                                <h3 className={styles["product-name"]}>
                                    {product.name}
                                </h3>
                                <div className={styles["product-price-container"]}>
                        <span className={styles["price-new"]}>
                            {product.price}
                        </span>

                                    <span className={styles["price-old"]}>
                            {product.oldPrice}
                        </span>
                                </div>
                                <div className={styles["product-promotion"]}>

                                    <div className={styles["product-promotion-for-member"]}>
                                        {product.memberPromo}
                                    </div>

                                    <div className={styles["product-promotion-for-student"]}>
                                        {product.studentPromo}
                                    </div>

                                </div>
                                <div className={styles["product-meta"]}>

                                    <div className={styles["product-meta-rating"]}>
                                      <span className="mdi mdi-star"> {product.rating}</span>
                                    </div>

                                    <div className={styles["product-meta-favorite"]}>
                                      <span className="mdi mdi-heart-outline"></span>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </main>

    )

}

export default App