"use client";

import React from "react";
import Link from "next/link";

const AboutPage = () => {
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full mb-4">
            Rreth Nesh
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Kush Jemi{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Ne?
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Shije Vere është platforma dixhitale që po transformon mënyrën si
            bizneset e plazhit në Shqipëri i shërbejnë klientëve të tyre.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Mission */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Misioni Ynë</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Misioni ynë është të bëjmë pushimet në plazh më të këndshme për
              klientët dhe më fitimprurëse për bizneset. Ne besojmë se
              teknologjia duhet të jetë e thjeshtë, intuitive dhe e aksesueshme
              për të gjithë.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Me Shije Vere, klientët mund të porosisin pije dhe ushqime direkt
              nga çadra e tyre pa pritur në radhë, ndërsa bizneset rrisin
              shitjet dhe efikasitetin e shërbimit.
            </p>
          </div>

          {/* Story */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📖</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Historia Jonë
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Shije Vere lindi nga një ide e thjeshtë: si mund ta bëjmë më të
              lehtë porosinë në plazh? Gjatë verës së vitit 2022, ne vumë re se
              shumë klientë në plazhe hezitojnë të ngrihen nga shezlongu për të
              porositur, dhe shumë biznese humbasin shitje për këtë arsye.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Kështu lindi ideja për një sistem të thjeshtë me kod QR që
              mundëson porosinë direkt nga telefoni. Pas muajsh pune intensive,
              Shije Vere u lançua zyrtarisht në pranverën e vitit 2023.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Sot, ne shërbejmë mbi 50 biznese në të gjithë bregdetin shqiptar
              dhe vazhdojmë të rritemi çdo ditë.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Vlerat Tona</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Thjeshtësia
                </h3>
                <p className="text-slate-600 text-sm">
                  Teknologjia duhet të jetë e lehtë për t&apos;u përdorur. Nuk
                  keni nevojë për trajnim special - skanoni dhe porosisni.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Besueshmëria
                </h3>
                <p className="text-slate-600 text-sm">
                  Sistemi ynë funksionon 24/7 pa ndërprerje. Porositë arrijnë
                  menjëherë në WhatsApp të stafit.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Mbështetja
                </h3>
                <p className="text-slate-600 text-sm">
                  Ekipi ynë është gjithmonë i gatshëm t&apos;ju ndihmojë.
                  Përgjigjemi brenda 30 minutash.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Inovacioni
                </h3>
                <p className="text-slate-600 text-sm">
                  Vazhdojmë të shtojmë veçori të reja bazuar në nevojat e
                  klientëve tanë.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Dëshironi të bashkoheni me ne?
            </h2>
            <p className="text-white/90 mb-6">
              Na kontaktoni sot dhe zbuloni si Shije Vere mund të transformojë
              biznesin tuaj të plazhit.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-white text-cyan-600 font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Na Kontaktoni
            </Link>
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

export default AboutPage;
