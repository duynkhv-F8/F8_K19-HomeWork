import {useEffect, useState} from "react";
import api from '../../plugins/axios'
import HeaderBar from "../../components/HeaderBar/index.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

function ProductDetail({productId, onBack, onClickAddToCart, cartCount, onSelectProduct, allProducts = []}) {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        const getProductDetail = async () => {
            const {data} = await api.get(`products/${productId}`)
            setProduct(data)
        }
        if (productId) getProductDetail()
    }, [productId])
    if (!product) return <div style={{padding: '20px'}}>Đang tải chi tiết sản phẩm...</div>;

    const randomProducts = allProducts.filter(product => product.id !== productId).slice(0, 4)
    return (
        <>
            <HeaderBar total={cartCount}/>
            <main className="container">
                <button onClick={onBack} style={{marginBottom: '20px', cursor: 'pointer'}}>
                    ← Quay lại danh sách
                </button>

                <div className="product-detail" style={{display: 'flex', gap: '30px', marginBottom: '40px'}}>
                    <img src={product.image} alt={product.title} style={{width: '250px', objectFit: 'contain'}}/>

                    <div>
                        <h2>{product.title}</h2>
                        <p style={{color: '#666'}}>Danh mục: {product.category}</p>
                        <p>{product.description}</p>
                        <p>⭐ {product.rating?.rate} ({product.rating?.count} đánh giá)</p>
                        <h3 style={{color: 'green'}}>${product.price}</h3>
                        <button onClick={() => onClickAddToCart(product.id)}>Add to cart</button>
                    </div>
                </div>

                <hr style={{margin: '30px 0'}}/>

                <h2>Sản phẩm nổi bật</h2>
                <div className="product-grid">
                    {
                        randomProducts.map(product => (
                            <ProductCard product={product} key={product.id} onClickAddToCart={onClickAddToCart}
                                         onSelectProduct={onSelectProduct}/>))
                    }
                </div>
            </main>
        </>
    )
}

export default ProductDetail;