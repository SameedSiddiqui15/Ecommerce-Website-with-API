// import { FaShoppingCart } from "react-icons/fa";

// const MenuItems = () => {
//   const shoes = [
//     {
//       image: "https://m.media-amazon.com/images/I/71XwJHQn9KL._AC_SY1000_.jpg",
//       category: "Sneakers",
//       name: "Air Max Runner",
//       price: 29,
//       originalPrice: 49,
//     },
//     {
//       image: "https://m.media-amazon.com/images/I/81RpIWXSO8L._AC_SY1000_.jpg",
//       category: "Formal",
//       name: "Classic Leather",
//       price: 34,
//       originalPrice: 39,
//     },
//     {
//       image: "https://m.media-amazon.com/images/I/71DnHOscZWL._AC_SY1000_.jpg",
//       category: "Casual",
//       name: "Everyday Comfort",
//       price: 24,
//       originalPrice: 29,
//     },
//     {
//       image: "https://m.media-amazon.com/images/I/71y+P7WJK1L._AC_SY1000_.jpg",
//       category: "Sports",
//       name: "Pro Speed",
//       price: 49,
//       originalPrice: 59,
//     },
//     {
//       image: "https://m.media-amazon.com/images/I/71SFPQqJUML._AC_SY1000_.jpg",
//       category: "Boots",
//       name: "Winter Warrior",
//       price: 44,
//       originalPrice: 49,
//     },
//     {
//       image: "https://m.media-amazon.com/images/I/71QEP05krXL._AC_SY1000_.jpg",
//       category: "Loafers",
//       name: "Urban Classic",
//       price: 39,
//       originalPrice: 44,
//     },
//   ];

//   return (
//     <div className="relative text-center p-10">
//       <div
//         className="absolute inset-0"
//         style={{
//           background: `url("https://i.pinimg.com/736x/f1/52/8f/f1528f06b755658edab9a6d61a528293.jpg")`,
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//           opacity: 0.07,
//         }}
//       />
//       <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">Most Requested Shoes</h1>
//       <h1 className="text-3xl text-white z-10 relative">Explore Our Exclusive Collection</h1>
//       <section
//         id="Projects"
//         className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-6 gap-x-14 mt-10 mb-5"
//       >
//         {shoes.map((shoe, index) => (
//           <div
//             key={index}
//             className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
//           >
//             <a href="/" className="">
//               <img
//                 src={shoe.image}
//                 alt={`Product ${index + 1}`}
//                 className="w-72 h-80 object-contain rounded-t-xl"
//               />
//               <div className="px-4 py-3 w-72">
//                 <span className="text-slate-500 mr-3 uppercase text-xs">{shoe.category}</span>
//                 <p className="text-lg font-bold text-red-500 truncate block capitalize">{shoe.name}</p>
//                 <div className="flex items-center">
//                   <p className="text-lg font-semibold text-black my-3 cursor-auto">${shoe.price}</p>
//                   <del>
//                     <br />
//                     <p className="text-md font-semibold text-blue-800 cursor-auto ml-2">
//                       ${shoe.originalPrice}
//                     </p>
//                   </del>
//                   <div className="ml-auto">
//                     <FaShoppingCart className="w-5 h-5 text-blue-800" />
//                   </div>
//                 </div>
//               </div>
//             </a>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default MenuItems;


'use client';
import { useState, useEffect } from 'react';

import ProductCard from './ProductCart';
import {Product} from '@/pages/types';

const MenuItems = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  }

  const goToCheckout = () => {
    setIsCheckout(true);
  }
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  }

  return (
    <div className="relative min-h-screen py-6">
      <div className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          background: `url("https://i.pinimg.com/736x/f1/52/8f/f1528f06b755658edab9a6d61a528293.jpg")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: 0.07,
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Amazing Shoes in Our Collection
          </h1>
          <p className="text-xl text-white">
            Explore our section of stylish and comfortable shoes to order now!
          </p>
        </div>

        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={addToCart} />
          ))}
        </div>

        <div className="">
          <div className="flex justify-center">
            <button onClick={toggleCart} className='bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-out transfor'>
              {showCart ? 'Hide Cart' : 'View Cart'} ({cart.length} items)
            </button>
          </div>
          {showCart && (
            <div className='mt-6 bg-white p-6 rounded-lg shadow-lg container mx-auto'>
              <h2 className='text-4xl font-bold mb-4 text-blue-600 text-center'>Your Cart Items Include</h2>
              {cart.length > 0 ? (
                <div className=''>
                  <ul>
                    {cart.map((product, index) => (
                      <li key={index} className='flex items-center justify-between mb-6 transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg mx-3 sm:mx-5'>
                        <img src={product.image} alt={product.name} className='w-20 h-40 sm:w-28 sm:h-24 inline-block transition-transform duration-300 ease-in-out transform text-black object-contain' />
                        <span className="ml-4 text-lg font-medium text-slate-600">{product.name} - ${product.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold text-xl">Total : ${cart.reduce((total, product) => total + product.price, 0)}</span>
                    <div className="">
                      <button onClick={goToCheckout} className='bg-green-600 py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-105 '>
                        Proceed to Checkout
                      </button>
                      <button onClick={clearCart} className='ml-3 bg-red-600 py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-105 '>
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className='text-5xl font-semibold text-center text-slate-600'>Your Cart is Empty!</p>
              )
              }

            </div>
          )}
        </div>
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-auto">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">Checkout</h2>
              <p className="text-lg text-red-600">Please confirm your order before proceeding</p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">
                    ${cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                </div>

                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => setIsCheckout(false)}
                    className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-500 transition duration-300"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => alert("Order Confirmed & Will Deliever at your given Address in 1 week")}
                    className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-500 transition duration-300"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItems;
