'use client';

import { Suspense } from 'react';
import { TicketeraContent } from '@/components';

export default function Ticketera() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TicketeraContent />
    </Suspense>
  );
}
