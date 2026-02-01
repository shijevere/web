"use client";

import React from "react";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src={"/ic_header_shije_vere.png"}
                alt="Shije Vere Logo"
                style={{ height: 50 }}
              />
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-cyan-500 transition-colors"
            >
              ← Kthehu në Kryefaqje
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
            Dokumenti Ligjor
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Politika e{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Privatësisë
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Privatësia juaj është e rëndësishme për ne. Ky dokument shpjegon si
            i mbledhim, përdorim dhe mbrojmë të dhënat tuaja.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Përditësuar më: 1 Shkurt 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-slate max-w-none">
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm font-bold">
                  1
                </span>
                Informacioni që Mbledhim
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Ne mbledhim informacion të ndryshëm për të ofruar shërbimet
                  tona:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Informacioni i biznesit:</strong> Emri i biznesit,
                    adresa, numri i telefonit, email-i, dhe numri i çadrave.
                  </li>
                  <li>
                    <strong>Informacioni i porosive:</strong> Detajet e porosive
                    të bëra përmes platformës sonë, përfshirë produktet e
                    porositura dhe numrin e çadrës.
                  </li>
                  <li>
                    <strong>Të dhënat teknike:</strong> Adresa IP, lloji i
                    shfletuesit, dhe informacione të tjera teknike për të
                    përmirësuar shërbimin.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm font-bold">
                  2
                </span>
                Si i Përdorim të Dhënat
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>Të dhënat tuaja përdoren për:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ofrimin dhe menaxhimin e shërbimeve tona</li>
                  <li>Procesimin e porosive dhe dërgimin e njoftimeve</li>
                  <li>Komunikimin me ju për çështje të shërbimit</li>
                  <li>Përmirësimin e platformës dhe përvojës së përdoruesit</li>
                  <li>
                    Dërgimin e informacioneve të rëndësishme për shërbimin
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm font-bold">
                  3
                </span>
                Ndarja e të Dhënave
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Ne nuk shesim, tregtojmë, apo transferojmë të dhënat tuaja
                  personale tek palë të treta, përveç:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Kur kemi pëlqimin tuaj të qartë</li>
                  <li>
                    Për ofruesit e shërbimeve që na ndihmojnë të operojmë
                    platformën (p.sh., WhatsApp për njoftimet)
                  </li>
                  <li>Kur kërkohet nga ligji ose autoritetet kompetente</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm font-bold">
                  4
                </span>
                Siguria e të Dhënave
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Ne marrim masa të përshtatshme teknike dhe organizative për të
                  mbrojtur të dhënat tuaja nga aksesi i paautorizuar, humbja,
                  ose shkatërrimi. Këto masa përfshijnë:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Enkriptimin e të dhënave në transit dhe në ruajtje</li>
                  <li>Akses të kufizuar në të dhënat personale</li>
                  <li>Monitorim të vazhdueshëm të sistemeve tona</li>
                  <li>Backup të rregullt të të dhënave</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm font-bold">
                  5
                </span>
                Të Drejtat Tuaja
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>Ju keni të drejtë të:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Kërkoni akses në të dhënat tuaja personale</li>
                  <li>Kërkoni korrigjimin e të dhënave të pasakta</li>
                  <li>Kërkoni fshirjen e të dhënave tuaja</li>
                  <li>Kundërshtoni procesimin e të dhënave tuaja</li>
                  <li>Kërkoni transferimin e të dhënave tuaja</li>
                </ul>
                <p>
                  Për të ushtruar këto të drejta, na kontaktoni në{" "}
                  <a
                    href="mailto:shijevere@gmail.com"
                    className="text-purple-600 hover:underline"
                  >
                    shijevere@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm font-bold">
                  6
                </span>
                Cookies
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Platforma jonë përdor cookies për të përmirësuar përvojën
                  tuaj. Cookies janë skedarë të vegjël që ruhen në pajisjen
                  tuaj. Ato na ndihmojnë të:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mbajmë mend preferencat tuaja</li>
                  <li>Kuptojmë si përdoret platforma</li>
                  <li>Përmirësojmë shërbimet tona</li>
                </ul>
                <p>
                  Ju mund të çaktivizoni cookies nga cilësimet e shfletuesit
                  tuaj, por kjo mund të ndikojë funksionalitetin e platformës.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm font-bold">
                  7
                </span>
                Ndryshimet në Politikë
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Ne mund të përditësojmë këtë politikë privatësie herë pas
                  here. Ndryshimet do të publikohen në këtë faqe me datën e
                  përditësimit. Ju inkurajojmë të rishikoni periodikisht këtë
                  politikë.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm font-bold">
                  8
                </span>
                Kontakti
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Për pyetje rreth kësaj politike privatësie, na kontaktoni:
                </p>
                <div className="bg-slate-50 rounded-xl p-6 space-y-2">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:shijevere@gmail.com"
                      className="text-purple-600 hover:underline"
                    >
                      shijevere@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/355684469161"
                      className="text-purple-600 hover:underline"
                    >
                      +355 68 44 69 161
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-400">
          <p>© 2026 Shije Vere. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </footer>
    </main>
  );
};

export default PrivacyPolicyPage;
