import { memo } from "react";
import ProductItem from "./ProductItem";
// memo => [composant, function => previous state, current state]
const ProductList = memo(({ products }) => {
  // console.log("ProductList");
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-md-3 mb-3">
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
});

export default ProductList;
