export default function Banner() {
    return (
      <div className="overflow-hidden relative bg-gradient-to-r from-black to gray-700 font-sans px-6 py-12 mb-7">
        <div className="absolute inset-0 opacity-20 h-screen">
            <img src="https://images.pexels.com/photos/345415/pexels-photo-345415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
                <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4 mt-12">Discover our shoes</h2>
                <p className="text-white text-lg text-center mb-6 max-w-xl">Shop now for exclusive Shoes Discount</p>
                <button type="button" className="bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300">Exciting Deals Lauch At 12PM!</button>


        </div>
        
      </div>
    );
  }
  