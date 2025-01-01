const Reservation = () => {
    return (
        <section className="bg-gradient-to-r from-black to-gray-800 py-10">
            <div className="container mx-auto text-center ">
                <h2 className="text-3xl font-bold mb-6 text-amber-500">Make A Reservation</h2>
                <form action="" className="max-w-md mx-auto">
                    <div className="mb-4 text-white">
                        <input type="text" placeholder="Your Name" className="p-3 w-full border border-gray-300 text-gray-900 rounded-3xl" required/>
                    </div>
                    <div className="mb-4 text-white">
                        <input type="email" placeholder="Your Email" className="p-3 w-full border border-gray-300 text-gray-900 rounded-3xl" required/>
                    </div>
                    <div className="mb-4 text-white">
                        <input type="date" className="p-3 w-full border border-gray-300 rounded-3xl text-gray-900" required/>
                    </div>
                    <div className="mb-4 text-white">
                        <input type="time" className="p-3 w-full border border-gray-300 rounded-3xl text-gray-900" required/>
                    </div>
                    <div className="mb-4 text-white">
                        <input type="submit" className="text-white bg-blue-500 py-2 px-4 rounded-full hover:bg-blue-700 cursor-pointer  border border-white hover:border-2" value={"Reserved shoe"}/>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Reservation;