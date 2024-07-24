import ProductList from "../components/ProductList";
import {useEffect} from 'react'

const ProductPage = () => {
  // get data from server

  useEffect(() => {
    
  },[]); // componentDidMount

  return (
    <>
      <h1>Products</h1>
      <div className="d-flex justify-content-center">
        <input
          className="form-control w-50"
          type="text"
          placeholder="search product by name"
          aria-label="default input example"
        />
      </div>

      <div className="mt-4">
        <ProductList />
      </div>
      {/* Filter, product list : 12, 4, 12/4=3 12/3=4 */}
    </>
  );
};

export default ProductPage;
