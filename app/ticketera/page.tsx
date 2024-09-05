"use client";

import { Suspense } from "react";
import { TicketeraComponent } from "@/components";

export default function Ticketera() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TicketeraComponent />
    </Suspense>
  );
}
