import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 5);

  return (
    <main>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Everyday essentials
          </p>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            Find things worth keeping.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
            Discover thoughtfully selected products that
            bring simplicity and style into your everyday life.
          </p>

          <a
            href="#products"
            className="mt-8 inline-block rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Explore Products
          </a>
        </div>
      </section>

      <section
        id="products"
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Our selection
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Featured Products
            </h2>
          </div>

          <p className="text-sm text-gray-500">
            {featuredProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}