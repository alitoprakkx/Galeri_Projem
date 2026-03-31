# Monkey Motors

Next.js 14 (App Router) + TypeScript + Tailwind CSS ile geliştirilmiş çok markalı otomobil galeri uygulaması.

## Vercel Import / Deploy Notları

Vercel import sırasında hata yaşamamak için:

1. **Root Directory** olarak bu repo kökünü seçin.
2. **Framework Preset**: `Next.js`.
3. Node sürümü için Vercel Project Settings > General > Node.js Version değerini `20.x` yapın.
4. Build komutu: `npm run build`, install komutu: `npm install`.
5. Eğer görseller image optimization sırasında sorun çıkarırsa geçici olarak Environment Variable ekleyin:
   - `NEXT_IMAGE_UNOPTIMIZED=1`

## Local geliştirme

```bash
npm install
npm run dev
```

Uygulama: http://localhost:3000
