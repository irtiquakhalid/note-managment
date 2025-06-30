"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Clear tokens, session, etc.
    router.push("/auth/login");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="dashboard-layout">
        <aside className="sidebar">
          <div className="brand">
            <h2>My Dashboard</h2>
            <p>Welcome back!</p>
          </div>

          <nav className="nav">
            <Link href="/views/dashboard/home">🏠 Home</Link>
            <Link href="/views/dashboard/products">📦 Products</Link>
            <button className="logout-btn" onClick={handleLogout}>
              🚪 Logout
            </button>
          </nav>

          <footer className="footer">
            &copy; {new Date().getFullYear()} MyCompany
          </footer>
        </aside>

        <main className="main-content">{children}</main>
      </div>
    </QueryClientProvider>
  );
}
