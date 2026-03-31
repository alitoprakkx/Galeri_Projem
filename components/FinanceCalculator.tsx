'use client';

import { useMemo, useState } from 'react';

export function FinanceCalculator({ price }: { price: number }) {
  const [downPayment, setDownPayment] = useState(Math.floor(price * 0.3));
  const [interest, setInterest] = useState(2.49);
  const [months, setMonths] = useState(36);

  const monthlyPayment = useMemo(() => {
    const principal = Math.max(price - downPayment, 0);
    const monthlyRate = interest / 100;
    return (principal * (1 + monthlyRate * months)) / months;
  }, [price, downPayment, interest, months]);

  return (
    <section className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <h3 className="font-semibold">Finans Hesaplayıcı</h3>
      <input type="number" className="w-full rounded-xl bg-zinc-800 p-2" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />
      <input type="number" step="0.01" className="w-full rounded-xl bg-zinc-800 p-2" value={interest} onChange={(e) => setInterest(Number(e.target.value))} />
      <input type="number" className="w-full rounded-xl bg-zinc-800 p-2" value={months} onChange={(e) => setMonths(Number(e.target.value))} />
      <p className="text-orange">Aylık ödeme: {monthlyPayment.toLocaleString('tr-TR', { maximumFractionDigits: 0 })} ₺</p>
    </section>
  );
}
