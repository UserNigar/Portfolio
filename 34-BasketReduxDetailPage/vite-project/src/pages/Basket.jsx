import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from '@mui/material';
import { toast } from 'react-toastify';
import "./css/wishlist.css"; // adını istəyə uyğun dəyişə bilərsən
import { removeBasket, clearBasket } from '../redux/features/basketSlice';

const Basket = () => {
  const basket = useSelector((state) => state.basket.basket || []);
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(removeBasket(id));
    toast.success('Product removed from basket');
  };

  const handleDeleteAll = () => {
    dispatch(clearBasket());
    toast.info('All products removed from basket');
  };

  const totalPrice = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="wishlist-container">
      <Table className="wishlist-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {basket.length === 0 ? (
            <tr>
              <td colSpan="6" className="empty-row">
                Your basket is empty.
              </td>
            </tr>
          ) : (
            basket.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: '50px', borderRadius: '4px' }}
                  />
                </td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>${(product.price * product.quantity).toFixed(2)}</td>
                <td>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {basket.length > 0 && (
        <>
          <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
            Total Price: ${totalPrice.toFixed(2)}
          </div>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteAll}
            style={{ marginTop: '10px' }}
          >
            Delete All
          </Button>
        </>
      )}
    </div>
  );
};

export default Basket;
