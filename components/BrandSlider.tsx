export function BrandSlider() {
  const brands = ['BMW', 'Mercedes', 'Audi', 'Porsche', 'Tesla', 'Volvo', 'Toyota'];

  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-800 py-4">
      <div className="animate-[marquee_16s_linear_infinite] whitespace-nowrap text-zinc-300 [@keyframes_marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}]">
        {[...brands, ...brands].map((brand, i) => (
          <span key={`${brand}${i}`} className="mx-8 text-lg font-semibold">{brand}</span>
        ))}
      </div>
    </section>
  );
}
