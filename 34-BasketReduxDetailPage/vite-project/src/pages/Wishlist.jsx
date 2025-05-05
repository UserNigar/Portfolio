// Wishlist.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from '@mui/material';
import { toast } from 'react-toastify';
import "./css/wishlist.css";
import { deleteAll, deleteProduct } from '../redux/features/wishlistSlice';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist || []);
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct({ id }));
    toast.success('Product removed from wishlist');
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll());
    toast.info('All products removed from wishlist');
  };

  return (
    <div className="wishlist-container">
      <Table className="wishlist-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.length === 0 ? (
            <tr>
              <td colSpan="4" className="empty-row">
                Your wishlist is empty.
              </td>
            </tr>
          ) : (
            wishlist.map((product) => (
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

      {wishlist.length > 0 && (
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteAll}
          style={{ marginTop: '20px' }}
        >
          Delete All
        </Button>
      )}
    </div>
  );
};

export default Wishlist;
