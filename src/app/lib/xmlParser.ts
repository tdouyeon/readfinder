import { parseStringPromise } from "xml2js";

export async function parseXML(xmlData: string) {
  const result = await parseStringPromise(xmlData);
  return result;
}
