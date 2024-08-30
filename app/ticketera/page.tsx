'use client';

import { Suspense } from 'react';
import { TicketeraContent } from '@/components';
import s from './page.module.css';

export default function Ticketera() {
  return (
    <div className={s.ticketera}>
      <Suspense fallback={<div>Loading...</div>}>
        <TicketeraContent />
      </Suspense>
    </div>
  );
}
