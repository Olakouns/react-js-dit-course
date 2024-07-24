import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="row">
      <div className="col-3">
        <ProductItem />
      </div>
      <div className="col-3">
        <ProductItem />
      </div>
      <div className="col-3">
        <ProductItem />
      </div>
      <div className="col-3">
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductList;
