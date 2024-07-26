import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/UseFetchData";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, loading, error] = useFetchData(`products/${productId}`);

//   const [productsPage, loading, error] = useFetchData(`products`);
// productsPage.products
  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>error</div>
      ) : (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
