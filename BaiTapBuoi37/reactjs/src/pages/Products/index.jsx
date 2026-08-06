import {useEffect, useState} from 'react'
import api from '../../plugins/axios'
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import HeaderBar from "../../components/HeaderBar/index.jsx";
import ProductDetail from "../ProductDetail/index.jsx";

function Products() {
    const [products, setProducts] = useState([])
    const [productsInCart, setProductsInCart] = useState([])
    const [selectedProductId, setSelectedProductId] = useState(null)

    const getProducts = async () => {
        const {data} = await api.get('products')
        setProducts(data)
    }

    const addProductsInCart = (productId) => {
        if (productsInCart.includes(productId)) return
        setProductsInCart([...productsInCart, productId])
    }

    useEffect(() => {
        getProducts()
    }, [])

    if (selectedProductId) {
        return (<ProductDetail productId={selectedProductId} onClickAddToCart={addProductsInCart}
                              cartCount={productsInCart.length}
                              onBack={() => setSelectedProductId(null)} allProducts={products}
                              onSelectProduct={(id) => setSelectedProductId(id)}></ProductDetail>)
    }

    return (
        <>
            <HeaderBar total={productsInCart.length}/>

            <main className="container">
                <h1>Products</h1>

                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard product={product} onClickAddToCart={addProductsInCart}
                                     onSelectProduct={(id) => setSelectedProductId(id)}></ProductCard>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Products

