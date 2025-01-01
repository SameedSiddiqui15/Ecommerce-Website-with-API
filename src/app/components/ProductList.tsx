const products = [
    {
        id: 1,
        title: "Leather Shoes",
        category: "formal",
        price: "99.99$",
        imageURL: "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-bright-colors-png-image_9145044.png",
        bgColor: "bg-brown-500"
    },
    {
        id: 2,
        title: "Running Sneakers",
        category: "sports",
        price: "89.99$",
        imageURL: "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png",
        bgColor: "bg-blue-500"
    },
    {
        id: 3,
        title: "Winter Boots",
        category: "winter",
        price: "69.99$",
        imageURL: "https://clipart-library.com/images_k/shoe-transparent-background/shoe-transparent-background-12.png",
        bgColor: "bg-gray-500"
    }]
export default function ProductList() {
    return (
        <div className="p-1 flex flex-wrap items-center justify-center mb-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`flex flex-col shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
                >
                    <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" style={{ opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 items-center justify-center group-hover:scale-105 transition-transform ">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: "radial-gradient(black,teransparent 50%)", transform: "rotate3d(0,0,1,20deg) scale(1,0.6,1)", opacity: 0.2 }}></div>
                        <img src={product.imageURL} alt={product.title} className="relative w-52" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">{product.category}</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">
                                {product.title}
                            </span>
                            <span className="block bg-white rounded-full text-orange-500 text-xs font-bold p-1.5">
                                {product.price}
                            </span>
                        </div>
                    </div>
                    </div>
            ))}
        </div>
    );
}
