import { useContext } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { ProductContext } from './ProductContext';
import './Products.css';  

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <Grid container spacing={3} className="products-grid">
      {products.map(item => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card className="product-card">
            <CardMedia
              component="img"
              alt={item.title}
              height="200"
              image={item.image}  
            />
            <CardContent className="product-card-content">
              <Typography variant="h6" className="product-title">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary" className="product-price">
                Qiymət: {item.price} $
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
