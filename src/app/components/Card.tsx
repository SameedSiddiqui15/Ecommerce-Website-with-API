const FloatingImageContentBlock = () => {
    return (
        <section className="container mx-auto flex flex-col lg:flex-row items-center py-10">
            <div className="lg:w-1/2 lg:pr-10 pl-5 lg:pl-2">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">Premium Men&rsquo;s Footwear</h2>
                <p className="text-white mb-4">Step into elegance and comfort with our exclusive men&rsquo;s footwear collection.</p>
                <button className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition duration-300">Order Now</button>
                <h3 className="text-2xl font-semibold mt-6 mb-2 text-white"><strong>Latest Shoes : </strong> Our New Shoes Launches</h3>
                <ol>
                    <li className="pt-0 lg:pt-1">
                        <strong>Finest materials :</strong> Genuine leather, suede, and eco-friendly fabrics.
                    </li>
                    <li className="pt-0 lg:pt-1">
                        <strong>Unmatched comfort :</strong> Supportive and breathable insoles.
                    </li>
                    <li className="pt-0 lg:pt-1">
                        <strong>Stylish designs :</strong> A perfect blend of modern and classic aesthetics.
                    </li>
                    <li className="pt-0 lg:pt-1">
                        <strong>Superior durability :</strong> Long-lasting outsoles with excellent grip.
                    </li>
                    <li className="pt-0 lg:pt-1">
                        <strong>Versatile options :</strong> Available in various sizes and colors.
                    </li>
                </ol>
            </div>
                <div className="lg:w-1/2 mt-6 lg:mt-0 px-5 lg:pr-2 md:mx-20 lg:mx-auto">
                    <img src="https://wallpapers.com/images/featured/shoes-background-l0o2fet0l2q1gc8w.jpg" alt="stylish shoes" className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"/>
                </div>
        </section>
    )
}
export default FloatingImageContentBlock;