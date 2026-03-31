'use client';

import { useMemo, useState } from 'react';
import { Car } from '@/lib/cars';

export const useFilters = (cars: Car[]) => {
  const [brand, setBrand] = useState('Tümü');
  const [fuelType, setFuelType] = useState('Tümü');
  const [transmission, setTransmission] = useState('Tümü');
  const [yearMin, setYearMin] = useState(2018);
  const [priceMax, setPriceMax] = useState(6000000);

  const filteredCars = useMemo(
    () =>
      cars.filter(
        (car) =>
          (brand === 'Tümü' || car.brand === brand) &&
          (fuelType === 'Tümü' || car.fuelType === fuelType) &&
          (transmission === 'Tümü' || car.transmission === transmission) &&
          car.year >= yearMin &&
          car.price <= priceMax
      ),
    [brand, cars, fuelType, transmission, yearMin, priceMax]
  );

  return {
    brand,
    setBrand,
    fuelType,
    setFuelType,
    transmission,
    setTransmission,
    yearMin,
    setYearMin,
    priceMax,
    setPriceMax,
    filteredCars
  };
};
