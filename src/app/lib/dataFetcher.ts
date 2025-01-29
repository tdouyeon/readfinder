import { parseXML } from "./xmlParser";
const cheerio = require("cheerio");

interface BookItem {
  title: string;
  description: string;
  rights: string;
  category: string;
}

function extractTextFromHTML(htmlString: string) {
  const $ = cheerio.load(htmlString); // cheerio로 HTML을 파싱
  return $("span")
    .map((i: number, el: string) => $(el).text())
    .get() // jQuery 객체를 일반적인 배열 형태로 변환합니다.
    .join("");
}

export const fetchData = async (retries = 3) => {
  const queryParams = new URLSearchParams({
    serviceKey: process.env.SERVICEKEY || "",
    numOfRows: "10",
    pageNo: "1",
  });

  const url = `http://api.kcisa.kr/openapi/API_CCA_143/request?${queryParams.toString()}`;

  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Attempt ${i + 1}: Fetching data...`);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error, status: ${response.status}`);
      }

      const responseText = await response.text();

      if (responseText) {
        const parseData = await parseXML(responseText);
        const body = parseData.response.body[0];
        const data = body.items[0].item.map((item: BookItem) => ({
          title: item.title[0],
          description: extractTextFromHTML(item.description[0]),
          rights: item.rights ? item.rights[0] : "미상",
          category: item.category[0],
        }));
        return data;
      }
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error);

      if (i < retries - 1) {
        console.log(`Retrying`);
      } else {
        console.log("Max retries reached.");
      }
    }
  }

  return [];
};
