import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../redux/features/ProductSlice'
import { addBasket } from '../../redux/features/BasketSlice'
import './ProductDetailPage.css'

const ProductDetailPage = () => {

    let { id } = useParams()
    let dispatch = useDispatch()
    let { products } = useSelector((state) => state.products)
    let { basket } = useSelector((state) => state.basket)

    let findProduct = products.find((product) => product.id == id)
    
    const productCount = basket.reduce((acc, item) => {
        if (item.id == id) {
          return acc + item.count
        }
        return acc
      }, 0)
    
      const [count, setCount] = useState(productCount || 1)
    
      useEffect(() => {
        dispatch(getProducts())
      }, [dispatch])
    
      useEffect(() => {
        setCount(productCount || 1)
      }, [productCount])

      const addToCart = () => {
        for (let i = 0; i < count; i++) {
          dispatch(addBasket(findProduct))
        }
      }

  return (
    <div className="container">
        <div className="row">
            <div className="product-container">
             <div className="product-image">
              <img className="img" src={findProduct?.image} alt="Product Image"/>
            </div>

            <div className="product-details">
              <h4 className="product-title">{findProduct?.title}</h4>
              <p className="product-category">{findProduct?.category}</p>
              <p className="product-price">${findProduct?.price}</p>
              <p className="product-description">{findProduct?.description}</p>

              <div className="product-rating">
                <span>⭐ {findProduct?.rating.rate}</span>
                <span>({findProduct?.rating.count} reviews)</span>
              </div>


              <div className="quantity-selector">
              <button
                className="btn-minus"
                onClick={() => setCount(prev => prev > 1 ? prev - 1 : 1)}
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