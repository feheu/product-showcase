"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/lib/products";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";

export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${slug}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data: Product = await response.json();
        setProduct(data);
      } catch {
        setError("Unable to load product.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="text-gray-500">Loading product...</p>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="text-red-500">{error || "Product not found."}</p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Link
        href="/"
        className="text-sm text-gray-500 transition hover:text-black"
      >
        ← Back to products
      </Link>

      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-gray-50 p-10">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[500px] w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            {product.category}
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <span className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>

            <span className="text-sm text-gray-500">
              ★ {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>

          <p className="mt-8 leading-8 text-gray-600">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <FavoriteButton productId={product.id} />

            <span className="text-sm font-medium">
              Add to Favorite
            </span>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500">
              Product ID: {product.id}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}