import Link from "next/link";
import { fetchData } from "./lib/dataFetcher";

interface BookItem {
  title: string;
  description: string;
  rights: string;
  category: string;
}

export default async function Home() {
  let books: BookItem[] = [];

  try {
    const data = await fetchData();
    books = data;
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="h-screen">
      <div
        style={{ backgroundImage: "url('/book.jpg')" }}
        className="bg-cover bg-center w-full h-[70%] flex justify-center text-white text-2xl font-bold"
      >
        <div>
          <div className="font-SCDream4 text-white mt-10 text-3xl">
            READ FINDER
          </div>
          <div className="font-SCDream4 text-white text-sm text-gray-100">
            문화체육관광부 추천도서
          </div>
        </div>
      </div>
      <div className="bg-[#FBFBFB] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pl-12 pr-12 pt-5">
        {books.map((book: BookItem, index) => {
          return (
            <div key={index}>
              <Link
                href={{
                  pathname: "/detail",
                  query: {
                    category: book.category,
                    title: book.title,
                    rights: book.rights,
                    description: book.description,
                  },
                }}
                className="rounded-lg p-6 hover:scale-105"
              >
                <div className="bg-[#2d6b60] rounded-lg text-sm p-2 text-white mb-3">
                  {book.category}
                </div>
                <h2 className="font-semibold text-gray-800">{book.title}</h2>
                <p className="text-sm mt-2 text-gray-700">
                  <span className="font-semibold">글쓴이 | </span>
                  <span className="font-semibold"> {book.rights}</span>
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
