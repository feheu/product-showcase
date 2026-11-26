"use client";

import { useEffect, useState } from "react";

interface FavoriteButtonProps {
  productId: number;
}

export default function FavoriteButton({
  productId,
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setIsFavorite(favorites.includes(productId));
  }, [productId]);

  function toggleFavorite() {
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    let updatedFavorites: number[];

    if (favorites.includes(productId)) {
      updatedFavorites = favorites.filter(
        (id) => id !== productId
      );
    } else {
      updatedFavorites = [...favorites, productId];
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    setIsFavorite(updatedFavorites.includes(productId));
  }

  return (
    <button
      onClick={toggleFavorite}
      aria-label={
        isFavorite ? "Remove from favorites" : "Add to favorites"
      }
      className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${
        isFavorite
          ? "border-red-200 bg-red-50 text-red-500"
          : "border-gray-200 bg-white text-gray-500 hover:bg-gray-100"
      }`}
    >
      <span className="text-xl">
        {isFavorite ? "♥" : "♡"}
      </span>
    </button>
  );
}