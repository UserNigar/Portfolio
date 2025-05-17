import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../redux/features/productSlice'
import './ProductDetailPage.css'
import { addBasket } from '../../redux/features/basketSlice'

const ProductDetailPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { products, loading, error } = useSelector((state) => state.products)
  const { basket } = useSelector((state) => state.basket)

   const findProduct = products.find((product) => product.id === Number(id))

  const productCount = basket.reduce((acc, item) => {
    if (item.id === Number(id)) {
      return acc + item.count
    }
    return acc
  }, 0)

  const [count, setCount] = useState(productCount || 1)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProduct())
    }
  }, [dispatch, products.length])

  useEffect(() => {
    setCount(productCount || 1)
  }, [productCount])

  const addToCart = () => {
    if (!findProduct) return
    for (let i = 0; i < count; i++) {
      dispatch(addBasket(findProduct))
    }
  }

  if (loading) {
    return <div className="text-center mt-5">⏳ Loading product...</div>
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">⚠️ Error loading products: {error}</div>
  }

  if (!findProduct) {
    return <div className="text-center mt-5">🔍 Product not found</div>
  }

  return (
    <div className="container">
      <div className="row">
        <div className="product-container">
          <div className="product-image">
            <img className="img" src={findProduct.image} alt={findProduct.title} />
          </div>

          <div className="product-details">
            <h4 className="product-title">{findProduct.title}</h4>
            <p className="product-category">{findProduct.category}</p>
            <p className="product-price">${findProduct.price}</p>
            <p className="product-description">{findProduct.description}</p>

            <div className="product-rating">
              <span>⭐ {findProduct.rating.rate}</span>
              <span>({findProduct.rating.count} reviews)</span>
            </div>

            <div className="quantity-selector">
              <button
                className="btn-minus"
                onClick={() => setCount(prev => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </button>
              <input type="number" value={count} readOnly />
              <button
                className="btn-plus"
                onClick={() => setCount(prev => prev + 1)}
              >
                +
              </button>
            </div>

            <button
              className="btn btn-danger add-to-cart-btn"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
