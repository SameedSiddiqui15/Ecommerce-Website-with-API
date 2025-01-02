import { Product } from '@/types/types'
import React from 'react';

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
      <img src={image} alt={name} className='w-full h-auto sm:h-60 object-cover rounded-md transform transition-all duration-300 ease-in-out hover:scale-[1.01]'/>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <h3 className="text-lg text-gray-600 mb-4">${price}</h3>
      <button onClick={() => onAddToCart({id,name,price,image})} className='bg-blue-600 text-white px-4 py-2 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out'>Add To Cart</button>
    </div>
  );
}
export default ProductCard;

