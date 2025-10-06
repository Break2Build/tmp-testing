import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                vvr rice
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                Products
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="text-6xl font-bold text-gray-900">vvr rice</h1>
      </main>
    </div>
  );
}
