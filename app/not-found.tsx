import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 text-center">
      <p className="text-6xl">🐒</p>
      <h1 className="text-3xl font-bold">Sayfa bulunamadı</h1>
      <p className="text-zinc-400">Aradığınız sayfa galeri dışına çıkmış olabilir.</p>
      <Link href="/" className="rounded-2xl bg-orange px-5 py-3 font-semibold text-black">
        Ana sayfaya dön
      </Link>
    </div>
  );
}
