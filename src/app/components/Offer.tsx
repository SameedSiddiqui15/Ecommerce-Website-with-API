"use client"
type Offer = {
    title: string;
    description: string;
}
const SpecialOffer: React.FC = () => {
    const offers: Offer[] = [
        {
            title: "Step Up in Style",
            description: "Trendy & Comfortable shoes for every Occasion."
        },
        {
            title: "Happy Hour",
            description: "Get 20% off on all Shoes from 8 PM to 12 AM."
        },
        {
            title: "Family Deal",
            description: "Order 2 pairs of shoes and get a Coupon code."
        },
    ];
    const handleOfferClick = (description:string) => {
        alert(description);
    }
    return(
        <section className="pb-10">
            <div className="container mx-auto text-center px-2">
                <h2 className="text-4xl font-bold mb-6 text-white">Special Offer&rsquo;s</h2>
                <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6 mx-2 md:mx-0">
                    {offers.map((offer ,index) => (
                        <button key={index} onClick={() => handleOfferClick(offer.description)} className="bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105 py-5">
                            <h3 className="text-2xl font-semibold text-blue-700">{offer.title}</h3>
                            <p className="text-slate-900 mt-3">{offer.description}</p>
                        </button>
                    ))}
                </div>
            </div>

        </section>
    )
}
export default SpecialOffer;