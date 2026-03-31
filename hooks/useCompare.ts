'use client';

import { useMemo, useState } from 'react';

export const useCompare = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleCompare = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id].slice(-2)));
  };

  const canCompare = useMemo(() => selectedIds.length === 2, [selectedIds]);

  return { selectedIds, toggleCompare, canCompare };
};
