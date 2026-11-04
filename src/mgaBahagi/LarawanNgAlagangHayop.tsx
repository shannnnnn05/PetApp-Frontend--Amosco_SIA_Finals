type KatangianNgLarawan = {
  larawan: string;
  pangalanNgLahi: string;
  nagloLoad: boolean;
};

export default function LarawanNgAlagangHayop({
  larawan,
  pangalanNgLahi,
  nagloLoad
}: KatangianNgLarawan) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950/70">
      <div className="absolute left-3 top-3 z-10 rounded-md border border-cyan-400/30 bg-slate-950/80 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-300/90">
      {pangalanNgLahi ? pangalanNgLahi : "Dog Breed"}
      </div>

      <div className="relative flex aspect-[4/3] w-full items-center justify-center">
        {larawan ? (
          <img
            src={larawan}
            alt={`Larawan ng ${pangalanNgLahi}`}
            className={`h-full w-full object-cover transition-opacity duration-300 ${
              nagloLoad ? "opacity-40" : "opacity-100"
            }`}/>
        ) : (
          <p className="px-6 text-center text-xs text-slate-500">
            Choose a Breed
          </p>
        )}

        {nagloLoad && 
        (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/60 backdrop-blur-[1px]">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-cyan-300">
              Wait lang tabi
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
