import Link from "next/link";
import Image from "next/image";
import { getImagePath, getPagePath } from "@/lib/config";

const products = [
  {
    id: 1,
    name: "Brown Rice",
    price: "₹1,350",
    image: getImagePath("brown-rice.webp"),
    description: "Premium quality brown rice, rich in fiber and nutrients",
    features: ["High in Fiber", "Nutrient Rich", "Organic"]
  },
  {
    id: 2,
    name: "Sona Massori BPT (Raw Rice)",
    price: "₹1,350",
    image: getImagePath("sona-massori.jpeg"),
    description: "Traditional Sona Massori basmati rice, perfect for daily cooking",
    features: ["Aromatic", "Long Grain", "Premium Quality"]
  },
  {
    id: 3,
    name: "Fortified Rice",
    price: "₹999",
    image: getImagePath("fortified-rice.webp"),
    description: "Nutrient-enriched rice with added vitamins and minerals",
    features: ["Vitamin Enriched", "Iron Fortified", "Healthy Choice"]
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href={getPagePath("/")} className="text-2xl font-bold text-slate-800">
                vvr rice
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link 
                href={getPagePath("/")} 
                className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                href={getPagePath("/products")} 
                className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                Products
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Our Premium Rice Collection</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our carefully selected range of premium rice varieties, sourced from the finest farms and processed with care.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-slate-100 to-stone-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Premium
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{product.name}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-medium border border-amber-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-800">{product.price}</span>
                    <span className="text-sm text-slate-500 ml-2">per kg</span>
                  </div>
                  <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Quality You Can Trust</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Every grain of rice in our collection is carefully selected and processed to ensure the highest quality and freshness for your family.
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Us for Bulk Orders
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
