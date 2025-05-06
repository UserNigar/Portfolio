import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { updateWishlist, clearWishlist } from '../redux/features/WishlistSlice'
import { toast } from 'react-toastify'

const Wishlist = () => {
  let { wishlist } = useSelector((state) => state.wishlist)
  let dispatch = useDispatch()

  const handleRemove = (product) => {
    dispatch(updateWishlist(product))
    toast.info(`Product removed from wishlist...`)
  }

  const handleClear = () => {
    dispatch(clearWishlist())
    toast.info("Wishlist cleared...")
  }

  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center my-3'>
        <h3>My Wishlist</h3>
        {wishlist.length > 0 && (
          <Button variant="danger" onClick={handleClear}>
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
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {wishlist &&
            wishlist.map((product) => (
              <tr key={product.id} style={{ verticalAlign: "middle" }}>
                <td>
                  <img style={{ width: "130px", height: "100px" }} src={product.image} alt="" />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Button variant="danger" onClick={() => handleRemove(product)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Wishlist
