'use client';

import { useState } from 'react';

const steps = ['Araç bilgisi', 'KM ve durum', 'Hasar', 'İletişim'];

export function StepperForm() {
  const [step, setStep] = useState(0);

  return (
    <section className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="grid grid-cols-4 gap-2 text-xs">
        {steps.map((s, i) => (
          <div key={s} className={`rounded-xl p-2 text-center ${i <= step ? 'bg-electric/30' : 'bg-zinc-800'}`}>{s}</div>
        ))}
      </div>
      <div className="rounded-xl bg-zinc-800 p-4">{steps[step]} adımı form alanları</div>
      <div className="flex justify-between">
        <button disabled={step === 0} onClick={() => setStep((p) => p - 1)} className="rounded-xl bg-zinc-700 px-4 py-2 disabled:opacity-40">Geri</button>
        <button disabled={step === steps.length - 1} onClick={() => setStep((p) => p + 1)} className="rounded-xl bg-orange px-4 py-2 font-semibold text-black disabled:opacity-40">İleri</button>
      </div>
    </section>
  );
}
