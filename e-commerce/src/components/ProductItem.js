const ProductItem = ({ product }) => {
  console.log("ProductItem");
  return (
    <div className="card h-100">
      <img src={product.images[0]} className="card-img-top card-image" alt={product.title} />
      <div className="card-body">
        <h6 className="card-title fw-bold">{product.title}</h6>
        <span className="fw-bold text-primary">${product.price}</span>
        <div className="my-2">
          {
            // product.tags => [string]
            product.tags.map((tag, index) => (
              <span key={index} className="badge rounded-pill text-bg-secondary me-2">
                {tag}
              </span>
            ))
          }
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-sm btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
