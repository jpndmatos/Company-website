"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import Link from 'next/link';

export default function ContactForm() {
  const { ref } = useSectionInView("Contact");
  return (
    <section ref={ref} id="Contact" className="pt-[6.5rem]">
      <div className="rounded-3xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue from-35% to-pink to-100% animate-gradient bg-300% max-w-6xl mx-auto px-8 sm:px-16 div-3d-hover">
        <div className="relative rounded-3xl py-10 px-2 md:py-16 md:px-12" data-aos="fade-up">
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mr-16 lg:mb-0 text-left lg:w-1/2">
              <h1 className="h1 text-white mb-6">Work with us.</h1>
              <h3 className="h3 text-white">
                Contact us directly at{" "}
                <a className="underline" href="mailto:hello@doppel.pt">
                  hello@doppel.pt
                </a>
                </h3>
            </div>
          </div>
          <div className="relative flex-col justify-between items-center pb-8 text-right">
            <h3 className="h3 text-white mb-1">Clients</h3>
              <ul className="text-lg">
                <li className="mb-1">
                  <Link href="https://www.spotlitedata.com/" target="_blank" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">Spotlite</Link>
                </li>
                <li className="mb-1">
                  <Link href="https://crossing.pt/" target="_blank" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">Crossing</Link>
                </li>
                <li className="mb-1">
                  <Link href="https://www.troiaresort.pt/" target="_blank" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">Troia Resort</Link>
                </li>
                <li className="mb-1">
                  <Link href="https://ineditradicao.org/" target="_blank" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">Ineditradição</Link>
                </li>
                <li className="mb-1">
                  <Link href="https://www.uevora.pt/" target="_blank" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">Universidade de Évora</Link>
                </li>
                <li className="mb-1">
                  <Link href="https://www.uc.pt/" target="_blank" className="text-gray-300 hover:text-white transition duration-150 ease-in-out">Universidade de Coimbra</Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
