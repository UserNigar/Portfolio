import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Router/Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <>
      <RouterProvider router={routers} />
      <ToastContainer />
    </>
  );
}

export default App;
