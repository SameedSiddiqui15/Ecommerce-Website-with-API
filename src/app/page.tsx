import Banner from "./components/Banner";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";
import ModefiedProduct from "./components/ModefiedProduct";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import ProductList from "./components/ProductList";
import Progresser from "./components/Progesser";
import Reservation from "./components/Reservation";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-700 min-h-screen text-white">
      <Navbar />
      <Banner />
      <Carousel />
      <Progresser />
      <ProductList />
      <MenuItems />
      <ModefiedProduct />
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}
