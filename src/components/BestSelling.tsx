import Link from "next/link";
import ProductsCard from "./ProductsCard";
import BS1 from '../../public/images/1 (1).png';
import BS2 from '../../public/images/2 (1).png';
import BS3 from '../../public/images/3 (1).png';
import BS4 from '../../public/images/4.png';

function BestSelling() {
  const products = [
    {
      image: BS1,
      productAlt: "coat",
      title: "The North Coat",
      price: 260,
      cutPrice: 360,
      reviewStars: 5,
      reviewCount: 65
    },
    {
      image: BS2,
      productAlt: "bag",
      title: "Gucci duffle bag",
      price: 960,
      cutPrice: 1160,
      reviewStars: 4,
      reviewCount: 65
    },
    {
      image: BS3,
      productAlt: "cpu cooler",
      title: "RGB Liquid CPU Cooler",
      price: 160,
      cutPrice: 170,
      reviewStars: 5,
      reviewCount: 65
    },
    {
      image: BS4,
      productAlt: "book shelf",
      title: "Small BookShelf",
      price: 360,
      cutPrice: 360,
      reviewStars: 5,
      reviewCount: 65
    }
  ];

  return (
    <div className="flex flex-col gap-5 mx-5 sm:mx-16 lg:mx-24 my-16 sm:my-12">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 bg-[#db4444] rounded-sm"></div>
        <p className="font-semibold text-[#db4444]">This Month</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Best Selling Products
          </h1>
        </div>
        <Link 
          href="/products" 
          className="py-3 px-6 sm:py-3 sm:px-12 bg-[#db4444] text-white rounded-sm text-sm sm:text-base hover:bg-[#c13e3e] transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {products.map((product, index) => (
          <ProductsCard
            key={index}
            image={product.image}
            productAlt={product.productAlt}
            title={product.title}
            price={product.price}
            cutPrice={product.cutPrice}
            reviewStars={product.reviewStars}
            reviewCount={product.reviewCount}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSelling;