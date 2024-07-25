import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import { GetProducts } from "../services/ProductService";
import { GetProductLoader } from "../utils/GetProductLoader";

const ProductPage = () => {
  // get data from server useMemo
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let dataResponse = await GetProducts();
        setProducts(dataResponse.data.products);
        setProductsFilter(dataResponse.data.products);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []); // componentDidMount

  const filterProduct = (event) =>{
    let search = event.target.value;
    if(search.length === 0){
      setProductsFilter(products);
      return;
    }
    let newProducts = products.filter(product => product.title.includes(search));
    setProductsFilter(newProducts);
  }

  console.log("ProductPage");

  return (
    <>
      <h1>Products</h1>
      <div className="d-flex justify-content-center">
        <input
          className="form-control w-50"
          type="text"
          placeholder="search product by name"
          aria-label="default input example"
          onChange={filterProduct}
        />
      </div>

      {loading ? (
        <div className="row mt-4">{GetProductLoader()}</div>
      ) : (
        <div className="mt-4">
          <ProductList products={productsFilter} />
        </div>
      )}
    </>
  );
};

export default ProductPage;
