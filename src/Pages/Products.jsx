import React, { useState } from 'react';
import productList from '../data/productsData';
import ProductCard from '../Components/ProductCard';

const Products = ({ searchTerm }) => {
  const [products, setProducts] = useState(productList);

  const handleDelete = (id) => {
    if (window.confirm('A je i sigurt që dëshiron ta fshish këtë produkt?')) 
      {
      setProducts(products.filter(product => product.id !== id));
      }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm?.toLowerCase() || '')
  );

  return (
    <div className="px-6 pt-28 pb-10">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}  
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
