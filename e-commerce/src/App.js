import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
// import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container-fluid container-md mt-3'>
        <Outlet />
      </div>
      {/* <NavBar />
      <div className='container-fluid container-md mt-3'>
        <ProductPage />
      </div> */}
    </div>
  );
}

export default App;
