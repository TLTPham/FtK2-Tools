'use client';
import { SimulatorProvider } from "@/app/(pages)/character/simulator/SimulatorProvider";

export default function Layout({children}) {
  return (
    <SimulatorProvider>
      {children}
    </SimulatorProvider>
  )
}