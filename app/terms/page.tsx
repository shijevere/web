"use client";

import React from "react";
import Link from "next/link";

const TermsOfServicePage = () => {
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
            Dokumenti Ligjor
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Kushtet e{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Shërbimit
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ju lutem lexoni me kujdes këto kushte përpara se të përdorni
            shërbimet tona.
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
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm font-bold">
                  1
                </span>
                Pranimi i Kushteve
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Duke përdorur shërbimet e Shije Vere, ju pranoni të jeni të
                  lidhur nga këto Kushte Shërbimi. Nëse nuk pajtoheni me ndonjë
                  pjesë të këtyre kushteve, ju lutem mos përdorni shërbimet
                  tona.
                </p>
                <p>
                  Këto kushte zbatohen për të gjithë përdoruesit e platformës,
                  përfshirë pronarët e bizneseve, stafin, dhe klientët finalë.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm font-bold">
                  2
                </span>
                Përshkrimi i Shërbimit
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>Shije Vere ofron:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Platformë dixhitale për menaxhimin e menuve të plazhit
                  </li>
                  <li>Sistem porosish përmes kodeve QR</li>
                  <li>Integrim me WhatsApp për njoftimet e porosive</li>
                  <li>Panel administrimi për menaxhimin e biznesit</li>
                  <li>Mbështetje dhe suport teknik</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm font-bold">
                  3
                </span>
                Llogaritë e Përdoruesve
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Për të përdorur shërbimet tona si biznes, duhet të krijoni një
                  llogari. Ju jeni përgjegjës për:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ruajtjen e konfidencialitetit të kredencialeve tuaja</li>
                  <li>Të gjitha aktivitetet që ndodhin nën llogarinë tuaj</li>
                  <li>
                    Njoftimin e menjëhershëm për çdo përdorim të paautorizuar
                  </li>
                  <li>
                    Sigurimin që informacioni i dhënë është i saktë dhe i plotë
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm font-bold">
                  4
                </span>
                Detyrimet e Biznesit
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>Si përdorues biznes, ju pranoni të:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ofroni informacion të saktë për produktet dhe çmimet</li>
                  <li>
                    Përmbushni të gjitha porositë e marra përmes platformës
                  </li>
                  <li>Respektoni të gjitha ligjet dhe rregulloret lokale</li>
                  <li>Mos përdorni platformën për aktivitete të paligjshme</li>
                  <li>Mbani standardet e higjienës dhe sigurisë ushqimore</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm font-bold">
                  5
                </span>
                Pagesat dhe Çmimet
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Çmimet për shërbimet tona përcaktohen në marrëveshjen
                  individuale me çdo biznes. Pagesat duhet të bëhen sipas
                  afateve të dakordësuara.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Çmimet mund të ndryshojnë me njoftim paraprak 30-ditor
                  </li>
                  <li>Pagesa vonuara mund të sjellin pezullimin e shërbimit</li>
                  <li>Rimbursimet bëhen sipas politikës sonë të rimbursimit</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm font-bold">
                  6
                </span>
                Pronësia Intelektuale
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Të gjitha të drejtat e pronësisë intelektuale të platformës
                  Shije Vere, përfshirë por jo të kufizuara në:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Logon dhe markën tregtare</li>
                  <li>Dizajnin dhe ndërfaqen e përdoruesit</li>
                  <li>Kodin burimor dhe algoritmet</li>
                  <li>Përmbajtjen dhe dokumentacionin</li>
                </ul>
                <p>
                  janë dhe mbeten pronë ekskluzive e Shije Vere. Përdorimi i
                  paautorizuar është rreptësisht i ndaluar.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm font-bold">
                  7
                </span>
                Kufizimi i Përgjegjësisë
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>Shije Vere nuk mban përgjegjësi për:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Dëme të shkaktuara nga ndërprerjet e shërbimit për arsye
                    teknike ose të tjera
                  </li>
                  <li>
                    Humbje të të ardhurave për shkak të problemeve të palëve të
                    treta (p.sh., WhatsApp)
                  </li>
                  <li>
                    Cilësinë e produkteve ose shërbimeve të ofruara nga bizneset
                  </li>
                  <li>Mosmarrëveshjet midis bizneseve dhe klientëve të tyre</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm font-bold">
                  8
                </span>
                Përfundimi i Shërbimit
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Ne rezervojmë të drejtën të pezullojmë ose përfundojmë aksesin
                  tuaj në shërbim në çdo kohë, veçanërisht nëse:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Shkelni këto Kushte Shërbimi</li>
                  <li>Nuk paguani në kohë</li>
                  <li>Përdorni platformën për aktivitete të paligjshme</li>
                  <li>Dëmtoni reputacionin e Shije Vere</li>
                </ul>
                <p>
                  Ju gjithashtu mund të përfundoni shërbimin duke na njoftuar me
                  shkrim 30 ditë përpara.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm font-bold">
                  9
                </span>
                Ndryshimet në Kushte
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Ne mund të ndryshojmë këto kushte në çdo kohë. Ndryshimet do
                  të hyjnë në fuqi 30 ditë pas publikimit. Vazhdimi i përdorimit
                  të shërbimit pas kësaj periudhe përbën pranimin e kushteve të
                  reja.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm font-bold">
                  10
                </span>
                Ligji i Zbatueshëm
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Këto Kushte Shërbimi rregullohen dhe interpretohen në
                  përputhje me ligjet e Republikës së Shqipërisë. Çdo
                  mosmarrëveshje do të zgjidhet në gjykatat kompetente të
                  Shqipërisë.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm font-bold">
                  11
                </span>
                Kontakti
              </h2>
              <div className="pl-11 text-slate-600 space-y-4">
                <p>
                  Për pyetje rreth këtyre Kushteve të Shërbimit, na kontaktoni:
                </p>
                <div className="bg-slate-50 rounded-xl p-6 space-y-2">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:shijevere@gmail.com"
                      className="text-amber-600 hover:underline"
                    >
                      shijevere@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/355684469161"
                      className="text-amber-600 hover:underline"
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

export default TermsOfServicePage;
