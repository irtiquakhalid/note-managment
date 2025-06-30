// pages/index.js
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState([1, 2]);

  const cards = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold border-2 border-black px-3 py-1 rounded-lg">
          Test project
        </h1>
        <div className="flex items-center space-x-2">
          <button className="bg-black text-white px-4 py-2 rounded flex items-center">
            Filter <span className="ml-1">&#x25BE;</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            + Add New
          </button>
        </div>
      </header>

      <h2 className="text-xl font-semibold mb-4">Title</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card}
            className={`bg-white p-4 rounded-lg shadow-sm border ${
              card === 3 ? "bg-gray-200" : ""
            }`}
          >
            <h3 className="font-semibold mb-2">Lorem ipsum dolor sit amet</h3>

            {[1, 5, 6, 10].includes(card) && (
              <Image
                src={`/images/sample${card % 5}.jpg`} // replace with actual paths
                width={400}
                height={200}
                alt="image"
                className="rounded mb-2"
              />
            )}

            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, ...
            </p>

            {[4, 5].includes(card) && (
              <div className="mt-3 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(card)}
                    onChange={() =>
                      setSelected((prev) =>
                        prev.includes(card)
                          ? prev.filter((id) => id !== card)
                          : [...prev, card]
                      )
                    }
                  />
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </span>
                </label>
              </div>
            )}

            {card === 3 && (
              <div className="mt-2 flex gap-2">
                <button className="bg-white border px-2 py-1 rounded">
                  🔍
                </button>
                <button className="bg-white border px-2 py-1 rounded">
                  ✏️
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <footer className="flex justify-between items-center mt-8 text-sm text-gray-500">
        <span>1-10 of 100 Records</span>
        <div className="flex items-center space-x-2">
          <button>&lt;</button>
          <button className="font-bold text-black">1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>10</button>
          <button>&gt;</button>
        </div>
        <span>20/Page</span>
      </footer>
    </div>
  );
}
