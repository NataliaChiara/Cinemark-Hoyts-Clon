'use client';

import { Suspense, useEffect } from 'react';
import { TicketeraComponent } from '@/components';
import { useAuth } from '@/context/loginContext';
import { useRouter } from 'next/navigation';

export default function Ticketera() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TicketeraComponent />
    </Suspense>
  );
}