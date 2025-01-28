import { fetchData } from "./lib/dataFetcher";

interface BookItem {
  title: string;
  description: string;
  author: string;
  category: string;
}

export default async function Home() {
  let books: BookItem[] = [];

  try {
    const data = await fetchData();
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <a>hello</a>
    </div>
  );
}
