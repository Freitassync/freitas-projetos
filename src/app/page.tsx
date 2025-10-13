import { Briefcase, GraduationCap, Database, Linkedin, Github, Mail, ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black p-6">
      {/* Hero Section - Boas-vindas */}
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-6xl font-bold text-white mb-4">
          Olá, eu sou <span className="text-gray-200">Gabriel Freitas</span>
        </h1>
        <p className="text-2xl text-gray-400 mb-6">
          Analista de Business Intelligence | Desenvolvedor
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Transformo dados em insights estratégicos e crio soluções digitais que geram valor real para o negócio.
        </p>
        <ArrowDown className="w-8 h-8 text-gray-400 mx-auto animate-bounce" />
      </section>

      {/* Apresentação detalhada */}
      <div className="bg-black rounded-lg shadow-2xl p-10 max-w-4xl w-full border border-gray-800 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHNJBLnA1YSsQ/profile-displayphoto-shrink_400_400/B4DZd4_PzkGsAg-/0/1750081536330?e=1762992000&v=beta&t=IB_LPJMke-UTFjYE6Yh8PgumiHvbohyS3EvB2Zt5BqA"
            alt="Gabriel Freitas"
            className="w-32 h-32 rounded-full shadow-lg object-cover border-4 border-gray-700 hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Sobre mim</h2>
            <p className="text-gray-400 text-lg">20 anos | São Paulo, Brasil</p>
          </div>
        </div>

        <div className="space-y-6 mb-10">
          <div className="flex items-start gap-4 p-5 bg-black rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300">
            <Briefcase className="w-7 h-7 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white text-lg mb-2">Analista de Business Intelligence</h3>
              <p className="text-gray-400 mb-2">JBS - Líder global em proteínas</p>
              <p className="text-gray-500 text-sm">
                Atuo no desenvolvimento de soluções orientadas a resultados utilizando QlikSense, gerando insights estratégicos 
                que impulsionam a tomada de decisões e o desempenho organizacional.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-black rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300">
            <GraduationCap className="w-7 h-7 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white text-lg mb-2">Sistemas de Informação</h3>
              <p className="text-gray-400 mb-2">FIAP - Faculdade de Informática e Administração Paulista</p>
              <p className="text-gray-500 text-sm">
                Aprimorando competências em tecnologia, gestão de dados e inovação, com foco em soluções que 
                transformam dados em vantagem competitiva.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-black rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300">
            <Database className="w-7 h-7 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white text-lg mb-2">Especialização & Habilidades</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full font-medium">QlikSense</span>
                <span className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full font-medium">Business Intelligence</span>
                <span className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full font-medium">Análise de Dados</span>
                <span className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full font-medium">SQL</span>
                <span className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full font-medium">React</span>
                <span className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full font-medium">Next.js</span>
              </div>
              <p className="text-gray-500 text-sm">
                Expertise em análise de dados, desenvolvimento de dashboards estratégicos e criação de soluções web modernas.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="/projetos" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Ver Projetos
          </a>
          <a href="/blog" className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105">
            Ler Blog
          </a>
          <a href="/contato" className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-700 text-gray-300 font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
            <Mail className="w-5 h-5" />
            Contato
          </a>
        </div>

        <div className="flex gap-6 justify-center pt-6 border-t border-gray-800">
          <a href="https://www.linkedin.com/in/gabriel-dsf" target="_blank" rel="noopener" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-all duration-300 hover:scale-110">
            <Linkedin className="w-6 h-6" />
            LinkedIn
          </a>
          <a href="https://github.com/Freitassync" target="_blank" rel="noopener" className="flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-all duration-300 hover:scale-110">
            <Github className="w-6 h-6" />
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
