export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  km: number;
  fuelType: string;
  transmission: string;
  bodyType: string;
  images: string[];
  features: string[];
  isFeatured: boolean;
  badge?: 'Yeni' | 'Fırsat' | 'Premium';
  priceDrop?: boolean;
};

export const cars: Car[] = [
  { id: '1', brand: 'BMW', model: '320i M Sport', year: 2022, price: 2695000, km: 32000, fuelType: 'Benzin', transmission: 'Otomatik', bodyType: 'Sedan', images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e'], features: ['Cam Tavan', 'M Paket', 'Apple CarPlay'], isFeatured: true, badge: 'Premium' },
  { id: '2', brand: 'Mercedes', model: 'C200 AMG', year: 2021, price: 2880000, km: 41000, fuelType: 'Benzin', transmission: 'Otomatik', bodyType: 'Sedan', images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8'], features: ['LED Far', 'AMG Paket'], isFeatured: true, badge: 'Premium' },
  { id: '3', brand: 'Audi', model: 'A4 40 TFSI', year: 2020, price: 2320000, km: 55000, fuelType: 'Benzin', transmission: 'Otomatik', bodyType: 'Sedan', images: ['https://images.unsplash.com/photo-1609521263047-f8f205293f24'], features: ['Virtual Cockpit', 'Deri Koltuk'], isFeatured: true, badge: 'Fırsat', priceDrop: true },
  { id: '4', brand: 'Volkswagen', model: 'Passat 1.5 TSI', year: 2019, price: 1590000, km: 78000, fuelType: 'Benzin', transmission: 'Otomatik', bodyType: 'Sedan', images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70'], features: ['Adaptif Hız Sabitleyici'], isFeatured: false, badge: 'Fırsat' },
  { id: '5', brand: 'Porsche', model: 'Macan', year: 2023, price: 5890000, km: 19000, fuelType: 'Benzin', transmission: 'Otomatik', bodyType: 'SUV', images: ['https://images.unsplash.com/photo-1542282088-fe8426682b8f'], features: ['Bose Ses', 'Panoramik Tavan'], isFeatured: true, badge: 'Yeni' },
  { id: '6', brand: 'Tesla', model: 'Model 3 Long Range', year: 2022, price: 2380000, km: 26000, fuelType: 'Elektrik', transmission: 'Otomatik', bodyType: 'Sedan', images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89'], features: ['Otopilot', 'Premium İç Mekan'], isFeatured: false, badge: 'Yeni' },
  { id: '7', brand: 'Volvo', model: 'XC60 B5', year: 2021, price: 3120000, km: 47000, fuelType: 'Hybrid', transmission: 'Otomatik', bodyType: 'SUV', images: ['https://images.unsplash.com/photo-1533473359331-0135ef1b58bf'], features: ['Pilot Assist', 'City Safety'], isFeatured: false, badge: 'Premium' },
  { id: '8', brand: 'Mini', model: 'Cooper S', year: 2020, price: 1510000, km: 39000, fuelType: 'Benzin', transmission: 'Otomatik', bodyType: 'Hatchback', images: ['https://images.unsplash.com/photo-1553440569-bcc63803a83d'], features: ['Harman Kardon'], isFeatured: false, badge: 'Fırsat' },
  { id: '9', brand: 'Land Rover', model: 'Range Rover Evoque', year: 2022, price: 4260000, km: 21000, fuelType: 'Dizel', transmission: 'Otomatik', bodyType: 'SUV', images: ['https://images.unsplash.com/photo-1492144534655-ae79c964c9d7'], features: ['Meridian Ses'], isFeatured: true, badge: 'Premium' },
  { id: '10', brand: 'Ford', model: 'Focus 1.5 EcoBlue', year: 2018, price: 1120000, km: 94000, fuelType: 'Dizel', transmission: 'Manuel', bodyType: 'Hatchback', images: ['https://images.unsplash.com/photo-1580273916550-e323be2ae537'], features: ['Geri Görüş Kamerası'], isFeatured: false },
  { id: '11', brand: 'Toyota', model: 'Corolla Hybrid', year: 2021, price: 1425000, km: 52000, fuelType: 'Hybrid', transmission: 'Otomatik', bodyType: 'Sedan', images: ['https://images.unsplash.com/photo-1549921296-3a6b6b45ec4c'], features: ['Şerit Takip'], isFeatured: false, badge: 'Fırsat', priceDrop: true },
  { id: '12', brand: 'Honda', model: 'Civic 1.5 VTEC', year: 2022, price: 1785000, km: 33000, fuelType: 'Benzin', transmission: 'Otomatik', bodyType: 'Sedan', images: ['https://images.unsplash.com/photo-1617531653520-4893f7db0c40'], features: ['Sunroof', 'Apple CarPlay'], isFeatured: false, badge: 'Yeni' }
];
