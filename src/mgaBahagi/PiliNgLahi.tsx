type KatangianNgPiliNgLahi = {
  mgaLahi: string[];
  napilingLahi: string;
  hindiPaHanda: boolean;
  saPagpalit: (lahi: string) => void;
};

export default function PiliNgLahi({
  mgaLahi,
  napilingLahi,
  hindiPaHanda,
  saPagpalit
}: KatangianNgPiliNgLahi) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="lahi"
        className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">
        Breed
      </label>
      <div className="relative">
        <select
          id="lahi"
          value={napilingLahi}
          disabled={hindiPaHanda}
          onChange={(kaganapan) => saPagpalit(kaganapan.target.value)}
          className="select-buhay w-full cursor-pointer rounded-lg border border-slate-700/80 bg-slate-950/80 px-4 py-3 pr-10 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-50">
          <option value="">
          {hindiPaHanda ? "Nagl-loading pa po" : "Pumili ng lahi"}
          </option>
          {mgaLahi.map((lahi) => (
            <option key={lahi} value={lahi}> {lahi}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
