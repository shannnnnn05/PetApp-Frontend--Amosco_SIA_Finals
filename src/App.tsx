import { useCallback, useEffect, useRef, useState } from "react";
import PiliNgLahi from "./mgaBahagi/PiliNgLahi";
import LarawanNgAlagangHayop from "./mgaBahagi/LarawanNgAlagangHayop";
import KahonNgJson from "./mgaBahagi/KahonNgJson";
import { kuninAngMgaLahi, kuninAngLarawanNgLahi} from "./mgaSerbisyo/kuninMulaSaDogsApi";
import type { SagotNgDogsApi, TalaanNgLahi } from "./mgaUri";

const gawingMgaPagpipilian = (talaan: TalaanNgLahi): string[] => {
const mgaPangalan: string[] = [];
  
  Object.entries(talaan).forEach(([lahi, mgaSubLahi]) => {
    mgaPangalan.push(lahi);
    mgaSubLahi.forEach((subLahi) => mgaPangalan.push(`${lahi}/${subLahi}`));
  }); return mgaPangalan.sort((una, pangalawa) => una.localeCompare(pangalawa));
};

const kuninAngMensaheNgKamalian = (kamalian: unknown): string =>
kamalian instanceof Error ? kamalian.message : "May naganap na hindi inaasahan";

export default function App() {
  const [mgaLahi, setMgaLahi] = useState<string[]>([]);
  const [napilingLahi, setNapilingLahi] = useState("");
  const [larawan, setLarawan] = useState("");
  const [sagot, setSagot] = useState<SagotNgDogsApi<unknown> | null>(null);
  const [nagloLoadNgLahi, setNagloLoadNgLahi] = useState(true);
  const [nagloLoadNgLarawan, setNagloLoadNgLarawan] = useState(false);
  const [kamalian, setKamalian] = useState("");
  const bilangNgKahilingan = useRef(0);

  const kuninAngTalaanNgLahi = useCallback(async () => {
  setNagloLoadNgLahi(true);
  setKamalian("");

    try {
      const tugon = await kuninAngMgaLahi();
      setMgaLahi(gawingMgaPagpipilian(tugon.message));
      setSagot(tugon as SagotNgDogsApi<unknown>);
    } catch (error) 
      {setKamalian(kuninAngMensaheNgKamalian(error));} 
      finally {setNagloLoadNgLahi(false);}
  }, []);

  useEffect(() => 
    {void kuninAngTalaanNgLahi();}, 
    [kuninAngTalaanNgLahi]);

  const kuninAngBagongLarawan = useCallback(async (lahi: string) => {
    if (!lahi) {return;}
    const bilang = bilangNgKahilingan.current + 1;
    bilangNgKahilingan.current = bilang;
    setNagloLoadNgLarawan(true);
    setKamalian("");

    try {
      const tugon = await kuninAngLarawanNgLahi(lahi);

      if (bilang !== bilangNgKahilingan.current) {return;}
      setSagot(tugon as SagotNgDogsApi<unknown>);
      setLarawan(tugon.message);
    } catch (error) {
      if (bilang !== bilangNgKahilingan.current) {return;}
      setKamalian(kuninAngMensaheNgKamalian(error));
      setLarawan("");
    } finally {
      if (bilang === bilangNgKahilingan.current) 
        {setNagloLoadNgLarawan(false);}
    }
  }, []);

  useEffect(() => {
    if (!napilingLahi) {
      bilangNgKahilingan.current += 1;
      setLarawan("");
      setNagloLoadNgLarawan(false);
      return;
    }
     void kuninAngBagongLarawan(napilingLahi);
  }, [napilingLahi, kuninAngBagongLarawan]);
  const hindiPaHanda = nagloLoadNgLahi || mgaLahi.length === 0;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center gap-6 px-4 py-10">
      <header className="text-center">
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          My Pet App
        </h1><br>
        </br>
        <p className="text-[11px] uppercase tracking-[0.4em] text-cyan-400/80">
          dog api
        </p>
        <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-[11px] tracking-wide text-slate-400">
          Amosco_SIA_Finals
        </p>
      </header>

      <section className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-5 shadow-[0_0_70px_-25px_rgba(34,211,238,0.45)] backdrop-blur sm:p-6">
        <div className="flex flex-col gap-5">
          <PiliNgLahi
            mgaLahi={mgaLahi}
            napilingLahi={napilingLahi}
            hindiPaHanda={hindiPaHanda}
            saPagpalit={setNapilingLahi}/>

          <LarawanNgAlagangHayop
            larawan={larawan}
            pangalanNgLahi={napilingLahi}
            nagloLoad={nagloLoadNgLarawan}/>

          <button
            type="button"
            onClick={() => void kuninAngBagongLarawan(napilingLahi)}
            disabled={!napilingLahi || nagloLoadNgLarawan}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition duration-500 group-hover:rotate-180"
              aria-hidden="true">
              <path d="M21 12a9 9 0 1 1-3-6.7" />
              <path d="M21 3v6h-6" />
            </svg>Fetch
          </button>

          {kamalian && (
            <div className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-xs text-rose-200">
              <span className="font-semibold">Kamalian: </span>
              {kamalian}
              <button
                type="button"
                onClick={() => void kuninAngTalaanNgLahi()}
                className="ml-2 underline decoration-rose-300/50 underline-offset-2 hover:text-rose-100">
                Subukang muli
              </button>
            </div>
          )}
        </div>
      </section>

      <KahonNgJson datos={sagot} />
      <footer className="text-center text-[10px] uppercase tracking-[0.2em] text-slate-600 color-slate-400/80">
        Kristian Carl D. Amosco 
      </footer>
    </main>
  );
}