import type { SagotNgDogsApi, TalaanNgLahi } from "../mgaUri";
const kuninAngUgatNgApi = (): string => {
  const ugat = import.meta.env.VITE_API_URL;
  if (!ugat) 
  {throw new Error("Loading pa tbi ang API URL");} 
  return ugat.replace(/\/+$/, "");
};

const kuninAngSagot = async <T>(daan: string): Promise<SagotNgDogsApi<T>> => {
  const tugon = await fetch(`${kuninAngUgatNgApi()}${daan}`, 
  {headers: { Accept: "application/json" }});
  if (!tugon.ok) {throw new Error(`aray koh. (${tugon.status}).`);}
  return (await tugon.json()) as SagotNgDogsApi<T>;
};

export const kuninAngMgaLahi = async (): Promise<SagotNgDogsApi<TalaanNgLahi>> =>
kuninAngSagot<TalaanNgLahi>("/api/lahi/mga-lahi");
export const kuninAngLarawanNgLahi = 
  async ( lahi: string): Promise<SagotNgDogsApi<string>> =>
  kuninAngSagot<string>(`/api/lahi/larawan?lahi=${encodeURIComponent(lahi)}`);
