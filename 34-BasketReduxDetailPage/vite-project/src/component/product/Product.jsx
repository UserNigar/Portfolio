import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { updateWishlist } from '../../redux/features/wishlistSlice';
import { addBasket } from '../../redux/features/basketSlice'; // <-- buranı düzəltdik
import "./Product.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist || []);
  const isFavorited = wishlist.some((item) => item.id === product.id);

  const handleToggleWishlist = () => {
    dispatch(updateWishlist(product));
  };

  return (
    <Card style={{ width: '18rem', margin: '10px', position: "relative" }}>
      <FavoriteIcon
        onClick={handleToggleWishlist}
        style={{
          position: 'absolute',
          right: '10px',
          top: '10px',
          cursor: 'pointer',
          color: isFavorited ? 'red' : 'gray',
        }}
      />
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description.slice(0, 100)}...
        </Card.Text>
        <Button variant="primary"
          onClick={() => dispatch(addBasket(product))} // <-- buranı da düzəltdik
        >
          Add to Basket
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
