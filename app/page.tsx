"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await response.json();
        setProducts(data.slice(0, 5));
      } catch {
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

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
            5 products
          </p>
        </div>

        {loading && (
          <p className="py-20 text-center text-gray-500">
            Loading products...
          </p>
        )}

        {error && (
          <p className="py-20 text-center text-red-500">
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}