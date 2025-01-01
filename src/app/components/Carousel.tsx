import Link from "next/link";

export default function Carousel() {
  return (
      <div className="">
          <section className="bg-gradient-to-r from-black to-gray-700">
              <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                      <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
                          <Link href="/" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                              <img src="https://m.media-amazon.com/images/I/81-W1nQKrUL._AC_SY500_.jpg" alt="shoe 1" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                              <h3 className="z-10 text-2xl font-medium text-white absolute p-4 left-0 top-0 xs:text-xl md:text-xl">
                                  Gradient Running Shoes
                              </h3>
                          </Link>
                      </div>

                      <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700">
                          <Link href="/" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                              <img src="https://www.borjan.com.pk/cdn/shop/files/1_97d3f850-5ef0-422b-abc6-11a88071686a.png?v=1724999086" alt="shoe 2" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                              <h3 className="z-10 text-2xl font-medium text-white absolute p-4 left-0 top-0 xs:text-xl md:text-xl">
                                  High-Top Basketball Shoes
                              </h3>
                          </Link>
                          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2">
                              <Link href="/" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                  <img src="https://www.borjan.com.pk/cdn/shop/files/1_2fd10c06-b95a-41ac-8ffd-17932aaa7e02.png?v=1712313079" alt="shoe 3" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                  <h3 className="z-10 text-2xl font-medium text-white absolute p-4 left-0 top-0 xs:text-xl md:text-lg">
                                      Minimalist Sneaker Design
                                  </h3>
                              </Link>
                              <Link href="/" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                  <img src="https://www.borjan.com.pk/cdn/shop/files/1_37c5b5c3-886d-4268-8670-063fcce07cc6.png?v=1727507877" alt="shoe 4" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                  <h3 className="z-10 text-2xl font-medium text-white absolute p-4 left-0 top-0 xs:text-xl md:text-lg">
                                      Lightweight Comfort Shoes
                                  </h3>
                              </Link>
                          </div>
                      </div>

                      <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
                          <Link href="/" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                              <img src="https://www.borjan.com.pk/cdn/shop/files/1_4dc5d97e-3b6a-40fe-a2d7-cb945f75252a.png?v=1711794125" alt="shoe 5" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                              <h3 className="z-10 text-2xl font-medium text-white absolute p-4 left-0 top-0 xs:text-xl md:text-xl">
                                  All-Day Wear Shoes
                              </h3>
                          </Link>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
}
