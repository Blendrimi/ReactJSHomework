import React from 'react';

function Button({ children, onClick, className }) {
  return (
    <button  onClick={onClick} className={`px-2 py-1 text-sm rounded text-white bg-red-500 hover:bg-red-600 ${className}`}>
      {children}
    </button>
  );
}

export default Button;
