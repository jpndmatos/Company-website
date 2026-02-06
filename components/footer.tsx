"use client";
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="pt-12 md:pt-16 pb-6 md:pb-6">
        <div className="max-w-6xl flex flex-col mx-auto px-4 sm:px-6">
          <Link href="/" className=" no-underline">
            <img src="./header/logo.svg" className="mb-4 selection:w-18 h-8" alt="Logo" />
          </Link>
          <div className="reltive justify-start text-left">
            <Link href="https://www.livroreclamacoes.pt/Pedido/Reclamacao" target="_blank" className="text-sm mb-2 text-gray-600 hover:text-pink transition duration-150 ease-in-out">Complaints Book</Link>
            <div className="text-gray-600 text-sm py-0">
              &copy; Doppel 2023. All rights reserved.
            </div>
            <div className="relative justify-end text-sm text-right text-gray-600">+351 916668897<br/>hello@doppel.pt<br/>Rua Pedro Nunes, IPN, Bloco C<br/>3030-119 Coimbra, Portugal</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
