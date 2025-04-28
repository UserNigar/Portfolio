import React from 'react';
import { Table } from 'react-bootstrap';
import Product from './Product';

const Products = ({ data, onDelete , onEdit}) => { 
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product Title</th>
          <th>Product Price</th>
          <th>Setting</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((singleProduct) => (
          <Product
            key={singleProduct.id} 
            product={singleProduct} 
            deleteProd={onDelete}
            editProd={onEdit}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default Products;
