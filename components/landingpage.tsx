"use client";
import React, { useRef, Suspense } from "react";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Canvas, useFrame} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelCapitel from "@/public/capitelmodel/CapitelLow";


export default function Landing() {
  const { ref } = useSectionInView("Doppel");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section 
    ref={ref}
    id="#Doppel" 
    className="flex flex-col justify-center items-center min-h-screen">
      <div className="h-auto max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-24 pb-10 md:pt-32 md:pb-12 relative">
          <div className="relative max-w-3xl mx-auto text-center items-center">
            <h1 className="h1 mb-2" data-aos="fade-up">We are Doppel</h1>
            <p className="text-2xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">The bridge between the physical and the virtual world.</p>
            <div className="h-50v" data-aos="fade-up" data-aos-delay="600">
              <Canvas>
                <Suspense fallback={null}>
                  <OrbitControls
                    enableDamping={true}
                    dampingFactor={0.1}
                    enableRotate={true}
                    enableZoom={false}
                    enablePan={false}
                    maxDistance={5}
                  />
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[10, 10, 5]} intensity={2.5} />
                  <ModelCapitel />
                </Suspense>
              </Canvas>
            </div>
            <div className="flex rounded-full flex-col items-center justify-center pt-8 md:pt-12" data-aos="fade-up">
              <Link
                href="#About"
                className="rounded-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue from-0% to-pink to-100% animate-gradient bg-300% text-white px-7 py-3 flex items-center gap-2 hover:bg-pink" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor-placement="top-bottom"
                onClick={() => {
                  setActiveSection("About");
                  setTimeOfLastClick(Date.now());
                }}
                >
                Get to know us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
