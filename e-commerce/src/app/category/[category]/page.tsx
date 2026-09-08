"use client";

export const dynamic = "force-dynamic";

export default function Category({ params }: { params: { category: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Category: {params.category}</h1>
        <p className="text-gray-600">Category page for {params.category}</p>
      </div>
    </div>
  );
}