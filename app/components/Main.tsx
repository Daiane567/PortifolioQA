// app/components/Main.tsx
import {
  FlaskConical,
  BugPlay,
  BadgeCheck,
  TestTubes,
  Mail,
  Github,
  Linkedin,
  FileDown,
} from 'lucide-react';
import Image from 'next/image';

const skills = [
  {
    name: 'Testes Funcionais',
    icon: <TestTubes className="h-8 w-8 text-purple-600" />,
    url: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/Descarte.git', // exemplo
  },
  {
    name: 'Testes Automatizados',
    icon: <BugPlay className="h-8 w-8 text-purple-600" />,
    url: 'https://github.com/Daiane567/e2e-tests-shopping-cart.git',
  },
  {
    name: 'Cypress',
    icon: <BadgeCheck className="h-8 w-8 text-purple-600" />,
    url: 'https://youtu.be/h5ZAgCPS5rM',
  },
  {
    name: 'Jest',
    icon: <FlaskConical className="h-8 w-8 text-purple-600" />,
    url: 'https://github.com/seuusuario/testes-jest',
  },
];

export default function Main() {
  return (
    <main className="bg-violet-50 text-center">
      {/* HABILIDADES */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-violet-800 mb-10">Habilidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center transition hover:scale-105 hover:shadow-lg hover:bg-purple-100"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold text-gray-800">{skill.name}</p>
            </a>
          ))}
        </div>
      </section>

      {/* SOBRE MIM */}
      <section className="w-full bg-violet-200 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem à esquerda */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/computer.svg"
              alt="Sobre Mim"
              width={400}
              height={400}
              className="rounded-lg max-w-full h-auto"
            />
          </div>

          {/* Texto à direita */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
            <p className="text-lg mb-8">
              Olá! Sou um profissional apaixonado por qualidade de software e automação de testes. 
              Tenho experiência com testes funcionais e automatizados usando ferramentas como Cypress e Jest.
              Sempre buscando aprender e aplicar as melhores práticas para garantir a excelência nos projetos.
            </p>

            {/* BOTÃO BAIXAR CURRÍCULO */}
            <div className="mt-6">
              <a
                href="/curriculo.pdf"
                download
                className="inline-flex items-center gap-2 bg-violet-800 px-5 py-3 rounded-xl shadow hover:bg-violet-900 transition text-white font-semibold"
              >
                <FileDown className="h-5 w-5" /> Baixar Currículo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="w-full bg-violet-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-violet-800 mb-10">Contato</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Fique à vontade para entrar em contato ou conferir meus perfis profissionais:
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:cardoso.daiane.lu@gmail.com"
            className="flex items-center gap-2 bg-violet-800 text-white px-4 py-2 rounded-xl shadow hover:bg-violet-900 transition"
          >
            <Mail className="h-5 w-5" /> Email
          </a>
          <a
            href="https://github.com/Daiane567"
            target="_blank"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-xl shadow hover:bg-gray-900 transition"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/daianecardoso23"
            target="_blank"
            className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-800 transition"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
