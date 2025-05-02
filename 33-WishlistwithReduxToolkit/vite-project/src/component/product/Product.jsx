import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Product.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { updateWishlist } from '../../redux/features/wishlistSlice';



const Product = ({ product }) => {
    let dispatch=useDispatch()
  return (
    <Card style={{ width: '18rem', margin: '10px', position:"relative"}}>
       <FavoriteIcon
          style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            cursor: 'pointer',
            // color: isFavorited ? 'red' : 'gray',
          }}
          onClick={()=>dispatch(updateWishlist(product))}
        />
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description.slice(0, 100)}...</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
