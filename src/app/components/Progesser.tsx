export default function Progresser() {
    return (
        <div>
            <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10 pb-10 px-5">
                <div className="w-full">
                    <div className="flex items-center w-full">
                        <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex justify-center items-center rounded-full">
                            <span className="text-black text-base font-bold">1</span>
                        </div>
                        <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
                    </div>
                    <div className="mt-2 mr-4 text-center md:text-start">
                        <h6 className="text-base font-bold text-amber-500">
                            Step 1: Choose Your Shoes
                        </h6>
                        <p className="text-xs text-white">
                            Explore our wide variety of shoes and pick the one that suits your style and needs.
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex items-center w-full">
                        <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex justify-center items-center rounded-full">
                            <span className="text-black text-base font-bold">2</span>
                        </div>
                        <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
                    </div>
                    <div className="mt-2 mr-4 text-center md:text-start">
                        <h6 className="text-base font-bold text-amber-500">
                            Step 2: Select the Size
                        </h6>
                        <p className="text-xs text-white">
                            Choose your perfect size from our sizing chart and ensure a great fit for comfort.
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex items-center w-full">
                        <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex justify-center items-center rounded-full">
                            <span className="text-black text-base font-bold">3</span>
                        </div>
                        <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
                    </div>
                    <div className="mt-2 mr-4 text-center md:text-start">
                        <h6 className="text-base font-bold text-amber-500">
                            Step 3: Add to Cart
                        </h6>
                        <p className="text-xs text-white">
                            Once you&rsquo;ve selected your shoes, add them to the cart for checkout and payment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
