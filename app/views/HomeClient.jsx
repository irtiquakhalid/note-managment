"use client";

import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import AddProductDialog from "../features/products/AddProductDialog";
import CardsGrid from "@/components/common/CardsGrid";

export default function HomeClient() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white p-4 sm:p-6 md:p-10 font-sans">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold border-2 border-black px-3 py-1 rounded-lg">Test project</h1>
          <div className="flex items-center gap-2">
            <Button className="bg-black text-white px-4 py-2 rounded flex items-center">
              Filter <span className="ml-1">&#x25BE;</span>
            </Button>
            <AddProductDialog />
          </div>
        </header>

        <h2 className="text-xl font-semibold mb-4">Title</h2>
        <CardsGrid page={page} setPage={setPage} pageSize={pageSize} setPageSize={setPageSize} />
      </div>
    </QueryClientProvider>
  );
}
