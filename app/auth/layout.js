// app/auth/layout.js
export default function AuthLayout({ children }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded">
        {children}
      </div>
    </main>
  );
}
