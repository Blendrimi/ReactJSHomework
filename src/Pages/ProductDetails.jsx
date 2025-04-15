import React from 'react';
import { useParams } from 'react-router-dom';
import productList from '../data/productsData'; 
import Title from '../Components/Title';
import Description from '../Components/Description';
import Image from '../Components/Image';

function ProductDetails() {
  const { id } = useParams();
  const product = productList.find(p => p.id === parseInt(id));

  return (
    <div className="max-w-4xl mx-auto px-4 pt-36 pb-10 flex flex-col items-center">
 
      <Image className="w-full max-w-md rounded-lg shadow-md mb-8"
        src={product.image}
        alt={product.title}
      />
     
      <Title className="text-2xl font-bold text-gray-800 mb-4">
        {product.title}
      </Title>

      <Description className="text-gray-600 text-base leading-relaxed">
        {product.description}
      </Description>
    </div>
  );
}

export default ProductDetails;
