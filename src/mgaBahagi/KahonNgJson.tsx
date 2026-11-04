type KatangianNgKahonNgJson = {
  datos: unknown;
};

export default function KahonNgJson({ datos }: KatangianNgKahonNgJson) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950/80">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
        <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
          API's Answer
        </span>      
        </div>
        <pre className="max-h-56 overflow-auto px-4 py-3 text-[12px] leading-relaxed text-emerald-300/90">
        {datos ? JSON.stringify(datos, null, 2) : "Wala pang sagot."}
        </pre>
    </div>
  );
}
