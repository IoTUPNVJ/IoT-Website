export default function IotInsightCard({ image, vol, title }) {
  return (
    <div className="rounded-4xl bg-[var(--color-biru-muda)] overflow-hidden group flex flex-col w-[345px] h-[432px] my-2 hover:cursor-pointer hover:shadow-[0_0_0_8px_var(--color-biru-tua)] transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-center min-h-full group-hover:min-h-[365px] group-hover:h-[365px] transition-all duration-300 ease-in-out">
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-contain text-[var(--color-biru-tua)] w-full group-hover:w-[271px] h-full group-hover:h-[339px] rounded-4xl bg-abu-sedang transition-all duration-300 ease-in-out"
          />
        ) : (
          <h2 className="text-5xl font-extrabold text-[var(--color-biru-tua)]">
            GAMBAR
          </h2>
        )}
      </div>
      <div
        className="bg-white flex flex-col flex-grow w-[345px] h-0 group-hover:h-[67px] px-5 py-2 text-[var(--color-biru-tua)] pointer-events-none
           group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
           transition-all duration-300 ease-in-out"
      >
        <h3 className="font-bold text-xl text-[var(--color-biru-tua)]">
          IoT Insight Vol. {vol} :
        </h3>
        <p className="text-xs text-[var(--color-biru-tua)]">
          {title.length > 45
            ? title.slice(0, 45).replace(/[\s.,:;!?]+$/, "") + "..."
            : title}
        </p>
      </div>
    </div>
  );
}
