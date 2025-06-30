"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchProducts = async ({ queryKey }) => {
    const [, page, pageSize] = queryKey;
    const res = await fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${(page - 1) * pageSize}`);
    return res.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page, pageSize],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  const totalPages = data ? Math.ceil(data.total / pageSize) : 0;

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (page <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (page >= totalPages - 3) {
      pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
    }
    return pages;
  };

  if (isLoading) return <p className="loading">Loading products...</p>;
  if (error) return <p className="error">Failed to load products.</p>;

  return (
    <main className="products-page">
      <h1 className="title">All Products</h1>

      <div className="products-grid">
        {data.products.map((product) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={200}
              className="product-image"
            />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <span className="page-info">
          Showing {(page - 1) * pageSize + 1} -{" "}
          {Math.min(page * pageSize, data.total)} of {data.total}
        </span>

        <div className="pagination-controls">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            &lt;
          </button>

          {getPageNumbers().map((p, i) =>
            p === "..." ? (
              <span key={i} className="ellipsis">...</span>
            ) : (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={p === page ? "active" : ""}
              >
                {p}
              </button>
            )
          )}

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            &gt;
          </button>

          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={5}>5 / page</option>
            <option value={10}>10 / page</option>
            <option value={20}>20 / page</option>
            <option value={50}>50 / page</option>
          </select>
        </div>
      </div>
    </main>
  );
}
