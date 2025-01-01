export default function handler(req, res) {
  const products = [
    {
      id: 1,
      image: "https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg?w=740",
      name: "Air Max Runner",
      price: 29,
    },
    {
      id: 2,
      image: "https://img.freepik.com/premium-photo/colorful-sport-shoes-mustard-color-wall_151013-4913.jpg?w=740",
      name: "Classic Leather",
      price: 34,
    },
    {
      id: 3,
      image: "https://img.freepik.com/premium-photo/colorful-sport-shoes-mustard-color-backround_151013-4389.jpg?w=740",
      name: "Everyday Comfort",
      price: 24,
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/71y+P7WJK1L._AC_SY1000_.jpg",
      name: "Pro Speed",
      price: 49,
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/71SFPQqJUML._AC_SY1000_.jpg",
      name: "Winter Warrior",
      price: 44,
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/71QEP05krXL._AC_SY1000_.jpg",
      name: "Urban Classic",
      price: 39,
    },
  ];
  res.status(200).json(products);
}