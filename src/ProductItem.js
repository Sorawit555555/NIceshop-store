// ProductList.js
import React from 'react';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold mt-2">฿{product.price}</p>
          <button 
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => onAddToCart(product)}
          >
            เพิ่มไปยังตะกร้า
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
