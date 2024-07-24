const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <span className="fw-bold text-primary">$10.0</span>
        <div className="my-2">
            <span className="badge rounded-pill text-bg-secondary me-2">Secondary</span>
            <span className="badge rounded-pill text-bg-secondary">Secondary</span>
        </div>
        <a href="/" className="btn btn-sm btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
