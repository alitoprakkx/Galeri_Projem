'use client';

type Props = {
  brands: string[];
  brand: string;
  setBrand: (v: string) => void;
  fuelType: string;
  setFuelType: (v: string) => void;
  transmission: string;
  setTransmission: (v: string) => void;
  yearMin: number;
  setYearMin: (v: number) => void;
  priceMax: number;
  setPriceMax: (v: number) => void;
};

export function FilterSidebar(props: Props) {
  const selectClass = 'rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2';

  return (
    <aside className="glass sticky top-24 h-fit space-y-4 rounded-2xl p-4">
      <h2 className="font-semibold">Filtreler</h2>
      <select className={selectClass} value={props.brand} onChange={(e) => props.setBrand(e.target.value)}>{['Tümü', ...props.brands].map((b) => <option key={b}>{b}</option>)}</select>
      <select className={selectClass} value={props.fuelType} onChange={(e) => props.setFuelType(e.target.value)}>{['Tümü', 'Benzin', 'Dizel', 'Hybrid', 'Elektrik'].map((x) => <option key={x}>{x}</option>)}</select>
      <select className={selectClass} value={props.transmission} onChange={(e) => props.setTransmission(e.target.value)}>{['Tümü', 'Otomatik', 'Manuel'].map((x) => <option key={x}>{x}</option>)}</select>
      <label className="text-sm">Min Yıl: {props.yearMin}</label>
      <input type="range" min={2018} max={2024} value={props.yearMin} onChange={(e) => props.setYearMin(Number(e.target.value))} />
      <label className="text-sm">Maks Fiyat: {props.priceMax.toLocaleString('tr-TR')} ₺</label>
      <input type="range" min={1000000} max={6000000} step={50000} value={props.priceMax} onChange={(e) => props.setPriceMax(Number(e.target.value))} />
    </aside>
  );
}
