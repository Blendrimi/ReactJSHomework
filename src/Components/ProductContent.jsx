import React from 'react'
function ProductContent({ title, price, oldPrice, discount }){
    return (
    <div className="product-content">
        <h4 className="product-title">{title}</h4>
        <p className="product-price">
          <span className="new-price">{price} €</span>
          <p className="product-discount">-{discount}%</p>
        </p>
        <span className="old-price">{oldPrice} €</span>

    </div>

    );
}
export default ProductContent;