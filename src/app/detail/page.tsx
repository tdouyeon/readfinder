"use client";

import { useSearchParams } from "next/navigation";

export default function DetailPage() {
  const searchParams = useSearchParams();
  const book = {
    category: searchParams.get("category"),
    title: searchParams.get("title"),
    rights: searchParams.get("rights"),
    description: searchParams.get("description"),
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen p-5"
      style={{ backgroundImage: "url('/book.jpg')" }}
    >
      <div className="bg-white p-12 rounded-lg w-full max-w-3xl ">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          {book.title}
        </h1>

        <div>
          <span className="text-gray-600">분류 | </span>
          {book.category}
        </div>

        <div className="mb-4">
          <span className="text-gray-600">작가 | </span>
          <span className=" text-gray-800">{book.rights}</span>
        </div>

        <div className="mb-6">
          <span className="text-gray-600">설명 | </span>
          <p className=" text-gray-700 mt-2">{book.description}</p>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => window.history.back()}
            className="bg-[#2d6b60] text-white px-8 py-3 mt-10 rounded-lg hover:bg-[#1f4a43] transition transform hover:scale-105 leading-relaxed"
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
