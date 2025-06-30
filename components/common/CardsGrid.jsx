"use client";

import Image from "next/image";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function CardsGrid({ page, setPage, pageSize, setPageSize }) {
  const [selected, setSelected] = useState([]);
  const limit = pageSize;
  const skip = (page - 1) * limit;

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page, pageSize],
    queryFn: async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      return await res.json();
    },
    keepPreviousData: true,
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading data</p>;

  const totalPages = Math.ceil(data.total / limit);
  const visiblePages = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) visiblePages.push(i);
  } else {
    if (page <= 4) {
      visiblePages.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (page >= totalPages - 3) {
      visiblePages.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      visiblePages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.products.map((product) => (
          <Card key={product.id} className="w-full h-full">
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <h3 className="font-semibold mb-2 truncate text-lg">
                {product.title}
              </h3>
              {product.thumbnail && (
                <Image
                  src={product.thumbnail}
                  width={400}
                  height={200}
                  alt={product.title}
                  className="rounded mb-2 object-cover w-full h-48"
                />
              )}
              <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                {product.description}
              </p>
              <div className="space-y-2 mt-auto">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(product.id)}
                    onChange={() =>
                      setSelected((prev) =>
                        prev.includes(product.id)
                          ? prev.filter((id) => id !== product.id)
                          : [...prev, product.id]
                      )
                    }
                  />
                  <span className="text-sm">Select this product</span>
                </label>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-8 px-4 text-sm text-gray-600">
        <span>
          {skip + 1}-{Math.min(skip + limit, data.total)} of {data.total}{" "}
          Records
        </span>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
            variant="ghost"
            className="text-blue-600 hover:bg-blue-50"
          >
            &lt;
          </Button>
          {visiblePages.map((num, idx) =>
            num === "..." ? (
              <span key={`dot-${idx}`} className="px-2">
                ...
              </span>
            ) : (
              <Button
                key={num}
                onClick={() => setPage(num)}
                variant="ghost"
                className={`w-8 h-8 p-0 ${
                  page === num ? "text-blue-600 font-semibold" : "text-gray-500"
                }`}
              >
                {num}
              </Button>
            )
          )}
          <Button
            onClick={() => setPage((old) => old + 1)}
            disabled={skip + limit >= data.total}
            variant="ghost"
            className="text-blue-600 hover:bg-blue-50"
          >
            &gt;
          </Button>
          <Select onValueChange={(value) => setPageSize(parseInt(value))}>
            <SelectTrigger className="w-[90px] ml-2">
              <SelectValue placeholder={`${pageSize}/Page`} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10/Page</SelectItem>
              <SelectItem value="20">20/Page</SelectItem>
              <SelectItem value="50">50/Page</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
