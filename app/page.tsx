/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import React, { useState, useEffect } from "react";
import AsyncImage from "./components/AsyncImage";

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Kryefaqja", href: "#home" },
    { label: "Si Funksionon", href: "#how-it-works" },
    { label: "Veçoritë", href: "#features" },
    { label: "Na Kontaktoni", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-cyan-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
            </div> */}
            {/* <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-slate-800" : "text-slate-800"}`}>
              Shije <span className="text-cyan-500">Vere</span>
            </span> */}
            <img
              src={"/icons/ic_header_shije_vere.png"}
              alt="Your Logo"
              style={{ height: 65, margin: "2px" }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`text-sm font-medium transition-all hover:text-cyan-500 ${
                  isScrolled ? "text-slate-600" : "text-slate-700"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Fillo Tani
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-100 pt-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left py-3 text-slate-600 hover:text-cyan-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-4 w-full px-5 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl"
            >
              Fillo Tani
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-amber-50/30"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Wave SVG at bottom */}
        <svg
          className="absolute bottom-0 left-0 right-0 text-white"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium text-cyan-700">
                Menu Dixhitale në Çadër 🏖
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-slate-800">Ktheje Çdo</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Çadër Plazhi
              </span>
              <br />
              <span className="text-slate-800">Në </span>
              <span className="relative ml-3">
                <span className="text-amber-500">Komoditet</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 4 150 4 198 10"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Mundësoni klientët tuaj të porosisin pije dhe ushqime direkt nga
              çadra e plazhit me një skanim të thjeshtë QR.
              <span className="font-semibold text-slate-700">
                {" "}
                Rritni shitjet deri në 30 herë
              </span>{" "}
              me sistemin tonë të menusë dixhitale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Fillo Provën Falas
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Si Funksionon?
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br ${
                      i === 1
                        ? "from-cyan-400 to-cyan-600"
                        : i === 2
                          ? "from-teal-400 to-teal-600"
                          : i === 3
                            ? "from-emerald-400 to-emerald-600"
                            : "from-amber-400 to-amber-600"
                    }`}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  Besuar nga 50+ biznese te bregdetit.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-400 rounded-3xl rotate-12 opacity-80" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-300 to-teal-400 rounded-full opacity-80" />

              {/* Phone Frame */}
              <div className="relative overflow-hidden w-72 rounded-[3rem]  `` hover:scale-105 transition-transform duration-500">
                <AsyncImage
                  src={
                    "https://dlap5dc4zeihu.cloudfront.net/landing/weusewhatsapp_1.png"
                  }
                  // width={isSmDown ? "70%" : "90%"}
                  width="100%"
                  height="auto"
                />{" "}
                {/* Phone Notch */}
                {/* App Content */}
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -left-16 top-1/4 bg-white rounded-2xl shadow-xl p-4 animate-bounce hidden lg:block"
                style={{ animationDuration: "3s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Porosia u dergua!</p>
                    <p className="font-semibold text-slate-800 text-sm">
                      2x Mojito
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-12 bottom-1/3 bg-white rounded-2xl shadow-xl p-4 animate-bounce hidden lg:block"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-8 h-8 text-green-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <p className="text-xs text-slate-500">Dërguar në</p>
                    <p className="font-semibold text-green-600 text-sm">
                      WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { value: "890%", label: "Rritje në Porosi", icon: "📈" },
    { value: "50+", label: "Biznese Plazhi", icon: "🏖️" },
    { value: "< 2min", label: "Koha e Instalimit", icon: "⚡" },
    { value: "4", label: "Gjuhë të Huaja", icon: "🌍" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Skano Kodin QR",
      description:
        "Çdo çadër plazhi ka një kod QR unik. Klientët thjesht e skanojnë me kamerën e smartfonit për të hapur menunë dixhitale.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
          />
        </svg>
      ),
      color: "from-cyan-400 to-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      number: "02",
      title: "Shfleto & Porosit",
      description:
        "Eksploro menunë e bukur dixhitale, zgjidh pijet ose ushqimet e preferuara dhe bëj porosinë. Gjithçka nga komoditeti i shezlongut.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      number: "03",
      title: "Njoftim WhatsApp",
      description:
        "Stafi merr menjëherë porosinë në WhatsApp me numrin e çadrës dhe detajet e porosisë. Nuk nevojitet pajisje speciale!",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      number: "04",
      title: "Shijo & Përsërit",
      description:
        "Kamarieri sjell porosinë direkt në çadër. Klientët e kënaqur porosisin më shumë, duke rritur të ardhurat tuaja pa mundim.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full mb-4">
            Proces i Thjeshtë
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Si{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Funksionon
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Filloni sezonin veror me sistemin tonë të menusë dixhitale brenda
            minutash. Nuk nevojitet ekspertizë teknike.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent z-0" />
              )}

              <div
                className={`relative ${step.bgColor} rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500`}
              >
                {/* Step Number */}
                <span
                  className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      title: "Disa Monedha",
      description:
        "Konvertim automatik i totalit te porosisë në EUR dhe USD. Perfekte për turistët ndërkombëtarë.",
      icon: "💶",
      gradient: "from-emerald-400 to-emerald-600",
    },
    {
      title: "2 Gjuhë",
      description:
        "Menuja në dispozicion në Shqip dhe Anglisht. Më shumë së shpejti!",
      icon: "🌍",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "Menu Dinamike",
      description:
        "Shfaq artikuj të ndryshëm bazuar në orën e ditës. Kafe në mëngjes, koktejl pasdite.",
      icon: "⏰",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      title: "Integrim i WhatsApp",
      description:
        "Porositë shkojnë direkt në WhatsApp-in e stafit tuaj. Nuk nevojitet pajisje ose trajnim special.",
      icon: "📱",
      gradient: "from-green-400 to-green-600",
    },
    {
      title: "Panel Administrimi",
      description:
        "Ndiqni të gjitha porositë, menaxhoni menunë dhe shikoni statistikat nga paneli i admin.",
      icon: "📊",
      gradient: "from-cyan-400 to-cyan-600",
    },
    {
      title: "Kode QR Unike",
      description:
        "Çdo çadër ka një kod QR unik në mënyrë që të dini gjithmonë ku të dorëzoni porosinë.",
      icon: "🎯",
      gradient: "from-rose-400 to-rose-600",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full mb-4">
            Disa Funksionalitete
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gjithçka që ju Duhet për të
            <span className="block bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Rritur Shitjet në Plazh
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Platforma jonë është e dizajnuar posaçërisht për bizneset e plazhit.
            E thjeshtë për t&apos;u përdorur, rezultate të fuqishme.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Languages Section
const LanguagesSection = () => {
  const languages = [
    { flag: "🇬🇧", name: "Anglisht", code: "EN" },
    { flag: "🇮🇹", name: "Italisht (se shpejti)", code: "IT" },
    { flag: "🇦🇱", name: "Shqip", code: "AL" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 text-sm font-semibold rounded-full mb-4">
              Disa Gjuhë
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Flisni Gjuhën e
              <span className="block bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                Klientit Tuaj
              </span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Turistët ndërkombëtarë mund të shfletojnë menunë tuaj në gjuhën
              angleze. Pa konfuzion, pa barriera - vetëm klientë të kënaqur që
              porosisin më shumë pije dhe ushqime.
            </p>

            {/* Language Cards */}
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <span className="text-4xl">{lang.flag}</span>
                  <div>
                    <p className="font-semibold text-slate-800">{lang.name}</p>
                    <p className="text-sm text-slate-400">{lang.code}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-100 to-orange-100 rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative Circles */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-rose-200/50 rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-200/50 rounded-full" />

              {/* Content */}
              <div className="relative bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-slate-800">
                    Zgjidh Gjuhën
                  </h3>
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </div>

                {languages.map((lang, i) => (
                  <div
                    key={lang.code}
                    className={`flex items-center gap-4 p-3 rounded-xl mb-2 ${
                      i === 3
                        ? "bg-cyan-50 border-2 border-cyan-500"
                        : "bg-slate-50 hover:bg-slate-100"
                    } transition-colors cursor-pointer`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span
                      className={`font-medium ${i === 3 ? "text-cyan-700" : "text-slate-600"}`}
                    >
                      {lang.name}
                    </span>
                    {i === 3 && (
                      <svg
                        className="w-5 h-5 text-cyan-500 ml-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Gati për të Transformuar Biznesin Tuaj të Plazhit?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Bashkohuni me 50+ biznese plazhi që tashmë përdorin &apos;Shije
          Vere&apos; për të rritur shitjet dhe kënaqur klientët e tyre.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Fillo Falas
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <button className="px-8 py-4 bg-transparent text-white font-bold rounded-2xl border-2 border-white/50 hover:bg-white/10 transition-all duration-300">
            Demo
          </button>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 flex items-center justify-center gap-2 text-white/80">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span>Pa kartë krediti • Instalim falas • Anulo kurdo</span>
        </div>
      </div>
    </section>
  );
};

// Contact Form Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    umbrellas: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: unknown } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Faleminderit për kërkesën tuaj! Do t'ju përgjigjemi brenda 30 minutash.",
    );
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
              Na Kontaktoni
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Le të Rrisim Biznesin
              <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Tuaj të Plazhit
              </span>
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              Plotësoni formularin dhe ekipi ynë do t&apos;ju përgjigjet brenda
              30 minutash. Jemi të emocionuar për t&apos;ju ndihmuar të rrisni
              shitjet këtë verë!
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-cyan-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    Përgjigje e Shpejtë
                  </p>
                  <p className="text-sm text-slate-500">
                    Përgjigjemi brenda 30 minutash
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    Suport në WhatsApp
                  </p>
                  <p className="text-sm text-slate-500">+355 68 33 03 005</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Na Shkruani</p>
                  <p className="text-sm text-slate-500">shijevere@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Emri i Plotë
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Emri Mbiemri"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="email@shembull.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Emri i Biznesit
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Paradise Beach Bar"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Numri i Telefonit
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="+355 68 123 4567"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Sa çadra keni?
                </label>
                <select
                  name="umbrellas"
                  value={formData.umbrellas}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors bg-white"
                  required
                >
                  <option value="">Zgjidhni...</option>
                  <option value="1-50">1 - 50 çadra</option>
                  <option value="51-100">51 - 100 çadra</option>
                  <option value="101-200">101 - 200 çadra</option>
                  <option value="200+">200+ çadra</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mesazh (Opsionale)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Na tregoni për biznesin tuaj të plazhit..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Dërgo Kërkesën
              </button>

              <p className="text-center text-sm text-slate-500">
                Duke dërguar, pranoni Kushtet & Politikën e Privatësisë
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div> */}
              <img
                src={"/web/ic_header_shije_vere.png"}
                alt="Your Logo"
                style={{ height: 65, margin: "2px" }}
              />
              {/* <span className="text-xl font-bold">
                Beach<span className="text-cyan-400">Menus</span>
              </span> */}
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Transformojmë bizneset e plazhit me zgjidhje dixhitale të
              porosive. Rrisni shitjet dhe kënaqni klientët tuaj.
            </p>
            <div className="flex gap-4">
              {["instagram"].map((social) => (
                <a
                  key={social}
                  href="https://www.instagram.com/shijevere.al/"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>

                  {/* {social === "facebook" ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )} */}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Produkti</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="#features"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Veçoritë
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Çmimet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Pyetje të Shpeshta
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kompania</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Rreth Nesh
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Politika e Privatësisë
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Kushtet e Shërbimit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          <p>
            © 2026 Shije Vere. Të gjitha të drejtat e rezervuara. Bërë me ☀️ për
            bizneset e plazhit.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
export default function LandingPageSQ() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <LanguagesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
