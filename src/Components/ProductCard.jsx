import React from 'react'
import ProductImage from './ProductImage';
import ProductContent from './ProductContent';
import {  FaRegHeart } from 'react-icons/fa';

function ProductCard({product}){
    return (
        <div className='product-card'>
            <span className="heart-icon"><FaRegHeart /></span>
            <ProductImage 
                image = {product.image}
            />
            <ProductContent
                title = {product.title}
                price = {product.price}
                discount = {product.discount}
                oldPrice = {product.oldPrice}
            />
        </div>
    )
}
export default ProductCard;