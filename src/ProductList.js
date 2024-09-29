import React from 'react';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4 d-flex">
          <div className="card flex-fill h-100">
            {/* แสดงรูปภาพของสินค้า */}
            <img src={product.image} alt={product.name} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }}/>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text flex-grow-1">{product.description}</p>
              <p className="card-text">Price: ฿{product.price}</p>
              <button className="btn btn-primary mt-auto" onClick={() => onAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
