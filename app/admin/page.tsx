export default function AdminMockPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-4">
      <h1 className="text-3xl font-bold">Admin Mock Panel</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {['Toplam İlan', 'Bugünkü Ziyaret', 'Favoriler'].map((item, i) => (
          <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
            <p className="text-zinc-400">{item}</p>
            <p className="text-2xl font-bold">{[124, 1840, 327][i]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
