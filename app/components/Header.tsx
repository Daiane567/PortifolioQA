"use client";

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-purple-700 to-purple-800 text-white px-8 py-10 min-h-[300px] rounded-b-2xl flex items-center justify-start gap-10 overflow-hidden pr-[360px]">
      
      {/* Avatar + Texto */}
      <div className="flex items-center gap-8 z-10 ml-6">
        {/* Avatar redondo com fundo roxo claro */}
        <div className="w-32 h-32 rounded-full bg-purple-200 border-4 border-white shadow-xl flex items-center justify-center">
          <img
            src="/avatar.svg"
            alt="Avatar Daiane"
            className="w-28 h-28 rounded-full"
          />
        </div>

        {/* Texto de apresentação */}
        <div className="max-w-lg">
          <h1 className="text-5xl font-extrabold leading-tight">
            Olá Sou<br />a Daiane
          </h1>
          <p className="mt-3 text-lg font-medium leading-snug">
            QA Tester formada em <br />
            Análise e Desenvolvimento de Sistemas.
          </p>
          <p className="mt-2 text-base text-white/90 leading-snug">
            Tenho paixão por encontrar bugs antes dos usuários!
          </p>
        </div>
      </div>

      {/* Ilustração decorativa */}
      <img
        src="/programer.svg"
        alt="Ilustração decorativa"
        className="absolute right-0 bottom-0 w-[400px] md:w-[500px] lg:w-[580px] h-auto opacity-100 pointer-events-none select-none z-0"
      />
    </header>
  );
}
