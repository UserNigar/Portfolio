import React, { useEffect, useState } from 'react'
import "./AdminPanel.css"
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, editProduct, getProducts } from '../../redux/features/ProductSlice'
import { Link, useNavigate } from 'react-router-dom'
import TransitionsModal from '../../utils/modal/Modal'
import { toast } from 'react-toastify'

const AdminPanel = () => {

    let { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    const [formData, setFormData] = useState({
        image: "",
        title: "",
        category: "",
        price: "",
        description: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleCreateProduct = (e) => {
        e.preventDefault()
        dispatch(addProduct(formData))
        toast.success("Product created successfully...")
    }

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
        toast.error("Product deleted...")
    }

    const handleEditProduct = (e) => {
        e.preventDefault()
        dispatch(editProduct(formData))
        toast.info("Product updated successfully...")
    }
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    
  return (
    <div className="container">
      <div className='container'>
      <div className='d-flex justify-content-between align-items-center my-3'>
        <h3>Admin Panel</h3>
        <Button 
            type='button' 
            variant="success" 
            onClick={() => {
                setFormData({
                image: "",
                title: "",
                category: "",
                price: "",
                description: ""
                });
                handleOpen();
            }}>
            Create
            </Button>

      </div>

      <Table className='text-center' striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
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
                <td>{product.title ? product.title.slice(0, 25) + "..." : "No Title"}</td>

                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <div className='setting'>
                    <Button variant="warning" onClick={() => {handleOpen(); setFormData(product)}}>
                        Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>
                        Remove
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <TransitionsModal 
        open={open} 
        setOpen={setOpen} 
        handleChange={handleChange}
        handleSubmit={formData.id ? handleEditProduct : handleCreateProduct}
        formData={formData}
       />
        <Link to={"/"}>Back</Link>
    </div>
    </div>
  )
}

export default AdminPanel