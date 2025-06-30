// features/products/useProducts.js
import { useQuery } from "@tanstack/react-query";

export const useProducts = (page, pageSize) => {
  const limit = pageSize;
  const skip = (page - 1) * limit;

  return useQuery({
    queryKey: ["products", page, pageSize],
    queryFn: async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      return await res.json();
    },
    keepPreviousData: true,
  });
};
