import Link from "next/link";
import { Product } from "@/lib/products";
import FavoriteButton from "./FavoriteButton";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-4 transition hover:shadow-lg">
      <div className="relative flex h-64 items-center justify-center rounded-xl bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        <div className="absolute right-3 top-3">
          <FavoriteButton productId={product.id} />
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs uppercase tracking-widest text-gray-400">
          {product.category}
        </p>

        <h2 className="line-clamp-2 min-h-12 font-semibold text-gray-900">
          {product.title}
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-sm text-gray-500">
            ★ {product.rating.rate}
          </p>
        </div>

        <Link
          href={`/products/${product.id}`}
          className="mt-5 flex w-full items-center justify-center rounded-full bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}