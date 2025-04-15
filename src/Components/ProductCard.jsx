import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';
import ProductContent from './ProductContent';
import Button from './Button';
import { FaRegHeart } from 'react-icons/fa'; 


function ProductCard({ product, onDelete }) {
  return (
    <div className="relative bg-white p-4 rounded-xl shadow-md w-[280px] transition hover:shadow-lg flex flex-col">

      <Link to={`/product/${product.id}`} className="flex-1">
          <span className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10 text-black hover:text-red-500 transition">
          <FaRegHeart />
          </span>

            <ProductImage image={product.image} />
            <ProductContent
              title={product.title}
              price={product.price}
              discount={product.discount}
              oldPrice={product.oldPrice}
            />
      </Link>

       {/* Delete Button  */}
          <Button
              onClick={() => onDelete(product.id)}
              className="absolute bottom-3 right-3"
           >
            Delete
          </Button>
    </div>
  );
}

export default ProductCard;
