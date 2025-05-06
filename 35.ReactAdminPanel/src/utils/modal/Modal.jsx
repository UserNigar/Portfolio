import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, Form } from 'react-bootstrap';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ open, setOpen, handleSubmit, handleChange, formData }) {

    const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography style={{textAlign: "center"}} id="transition-modal-title" variant="h6" component="h2">
              {formData.id ? "Edit Product" : "Create Product"}
            </Typography>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="url" placeholder="Image" onChange={handleChange} name='image' value={formData.image}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" onChange={handleChange} name='title' value={formData.title}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Category" onChange={handleChange} name='category' value={formData.category}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Price" onChange={handleChange} name='price' value={formData.price}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleChange} name='description' value={formData.description}/>
            </Form.Group>
            <Button type='submit' onClick={handleClose}>{formData.id ? "Edit" : "Create"}</Button>
            </Form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
