import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Products from './components/Products';
import { DotLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ title: '', price: '' });

  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const deleteAllProducts = () => {
    setProducts([]);
    toast.warn('Bütün məhsullar silindi!');
  };
  
  const addProduct = () => {
    setIsModal(true);
  };

  const saveNewProduct = () => {
    const { title, price } = newProduct;
    if (title.trim() && price.trim()) {
      const productToAdd = { 
        id: uuidv4(), 
        title,
        price 
      };
      setProducts([productToAdd, ...products]);
      setNewProduct({
         title: '', 
         price: '' });
      setIsModal(false);
      toast.success('Yeni məhsul əlavə olundu!');
    } else {
      toast.error('Bütün sahələri doldurun.');
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(item => item.id !== id));
    toast.info('Məhsul silindi!');
  };

  const saveEdit = () => {
    setProducts(products.map(
      item => item.id === editProduct.id ? editProduct : item
    ));
    setEditProduct(null);
    toast.success('Məhsul redaktə edildi!');
  };

  return (
    <>
      <ToastContainer />
      {loading ? (
        <DotLoader color="#36d7b7" />
      ) : (
        <>
          
          {isModal && (
            <div className='editedBox'>
              <input 
                placeholder='Ad' 
                value={newProduct.title} 
                onChange={e => setNewProduct({ ...newProduct, title: e.target.value })} 
              />
              <input 
                placeholder='Qiymət' 
                value={newProduct.price} 
                onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} 
              />
              <div className="buttons">
                <button className='btn-1' onClick={saveNewProduct}>Əlavə et</button>
                <button className='btn-2' onClick={() => setIsModal(false)}>Ləğv et</button>
              </div>
            </div>
          )}

          {editProduct && (
            <div className='editedBox'>
              <input 
                value={editProduct.title} 
                onChange={e => setEditProduct({ ...editProduct, title: e.target.value })} 
              />
              <input 
                value={editProduct.price} 
                onChange={e => setEditProduct({ ...editProduct, price: e.target.value })} 
              />
              <div className="buttons">
                <button className='btn-1' onClick={saveEdit}>Yadda saxla</button>
                <button className='btn-2' onClick={() => setEditProduct(null)}>Ləğv et</button>
              </div>
            </div>
          )}

          <Products 
            data={products} 
            onDelete={deleteProduct} 
            onEdit={setEditProduct} 
          />
          <button className='add-btn' onClick={addProduct}>Məhsul əlavə et</button>
          <button  className='dlt-btn' onClick={deleteAllProducts}>Hamsını sil</button>

        </>
      )}
    </>
  );
};

export default App;
