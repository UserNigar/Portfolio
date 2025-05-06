import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearBasket, decrementCount, incrementCount, removeBasket } from '../redux/features/BasketSlice'
import { Button, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Basket = () => {
  let { basket } = useSelector((state) => state.basket)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  let totalPrice = basket.reduce(
    (sum, product) => sum + product.price * product.count,
    0
  )

  return (
    <div className="container">
      <div className='container'>
      <div className='d-flex justify-content-between align-items-center my-3'>
        <h3>My Basket</h3>
        {basket.length > 0 && (
          <Button variant="danger" onClick={() => dispatch(clearBasket())}>
            Remove All
          </Button>
        )}
      </div>

      <Table className='text-center' striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((product) => (
              <tr 
                key={product.id} 
                style={{ verticalAlign: "middle" }}
              >
                <td>
                  <img 
                    style={{ width: "130px", height: "100px" }} 
                    src={product.image} 
                    alt="" 
                    onClick={() => navigate(`/productdetail/${product.id}`)}
                  />
                </td>
                <td>{product.title}</td>
                <td>{(product.price * product.count.toFixed(2))}</td>
                <td>
                  <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "5px"}}>
                    <button 
                      onClick={() => dispatch(decrementCount(product))}
                      disabled={product.count == 1}
                      style={{border: "none", background: "transparent",}}
                    >
                      -
                    </button>
                    <span>{product.count}</span>
                    <button 
                      onClick={() => dispatch(incrementCount(product))} 
                      style={{border: "none",  background: "transparent",}}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <Button variant="danger" onClick={() => dispatch(removeBasket(product))}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div style={{display: "flex", justifyContent: "space-between"}}>
          <Link to={"/"}>Back</Link>
          <p>TotalPrice: {totalPrice.toFixed(2)}</p>
        </div>
    </div>
    </div>
  )
}

export default Basket