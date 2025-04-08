import React from 'react'
function ProductImage({image}){
    return (
         <div className='product-image'>
            <img src = {image} alt="Product"></img>
         </div>
    );
}
export default ProductImage;