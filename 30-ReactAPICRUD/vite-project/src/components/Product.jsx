import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Product = ({ product, deleteProd , editProd}) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.price} $</td>
      <td>
        <MdDeleteForever size={25} onClick={() => deleteProd(product.id)} style={{cursor: 'pointer', color: 'red'}}/>
        <CiEdit size={25} onClick={() => editProd(product)} style={{cursor: 'pointer', color: 'green'}}/>
      </td>
    </tr>
  );
};

export default Product;
