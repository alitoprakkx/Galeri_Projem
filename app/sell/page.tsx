import { StepperForm } from '@/components/StepperForm';

export default function SellPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-center text-3xl font-bold">Araç Sat / Takas</h1>
      <p className="text-center text-zinc-400">Formu doldur, ekiplerimiz 24 saat içinde dönüş yapsın.</p>
      <StepperForm />
    </div>
  );
}
