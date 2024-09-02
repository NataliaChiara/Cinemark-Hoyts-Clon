'use client';

import { Suspense, useEffect } from 'react';
import { TicketeraComponent } from '@/components';
import { useAuth } from '@/context/loginContext';
import { useRouter } from 'next/navigation';

export default function Ticketera() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  console.log(isAuthenticated)
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push('/login');
  //   }
  // }, [isAuthenticated, router]);

  // if (!isAuthenticated) {
  //   return null; // O podrías devolver un componente de carga si lo prefieres
  // }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TicketeraComponent />
    </Suspense>
  );
}