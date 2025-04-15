import React from 'react';

function ProductContent({ title, price, oldPrice, discount }) {
  return (
    <div className="pt-2 font-sans">
      <h4 className="text-[14px] text-[#333] font-medium mb-[6px]">{title}</h4>
      <div className="flex items-center gap-[8px] mb-[4px]">
        <span className="text-[16px] font-bold text-black">{price} €</span>
        <span className="bg-[#ffe9e9] text-[#ff4d4f] text-[12px] px-[6px] py-[2px] rounded">
          -{discount}%
        </span>
      </div>
      <span className="line-through text-[#888] text-[13px]">{oldPrice} €</span>
    </div>
  );
}

export default ProductContent;
