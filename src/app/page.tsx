import { Briefcase, GraduationCap, Database, Linkedin, Github, Mail, ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black p-4 sm:p-6">
      {/* Hero Section - Boas-vindas */}
      <section className="text-center mb-12 sm:mb-16 animate-fade-in px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Olá, eu sou <span className="text-gray-200">Gabriel Freitas</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-6">
          Analista de Business Intelligence | Desenvolvedor
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8">
          Transformo dados em insights estratégicos e crio soluções digitais que geram valor real para o negócio.
        </p>
        <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mx-auto animate-bounce" />
      </section>

      {/* Apresentação detalhada */}
      <div className="bg-black rounded-lg shadow-2xl p-6 sm:p-8 md:p-10 max-w-4xl w-full border border-gray-800 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-8 sm:mb-10">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHNJBLnA1YSsQ/profile-displayphoto-shrink_400_400/B4DZd4_PzkGsAg-/0/1750081536330?e=1762992000&v=beta&t=IB_LPJMke-UTFjYE6Yh8PgumiHvbohyS3EvB2Zt5BqA"
            alt="Gabriel Freitas"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg object-cover border-4 border-gray-700 hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Sobre mim</h2>
            <p className="text-gray-400 text-base sm:text-lg">20 anos | São Paulo, Brasil</p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
          <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-black rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300">
            <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white text-base sm:text-lg mb-2">Analista de Business Intelligence</h3>
              <p className="text-gray-400 mb-2 text-sm sm:text-base">JBS - Líder global em proteínas</p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Atuo no desenvolvimento de soluções orientadas a resultados utilizando QlikSense, gerando insights estratégicos 
                que impulsionam a tomada de decisões e o desempenho organizacional.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-black rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300">
            <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white text-base sm:text-lg mb-2">Sistemas de Informação</h3>
              <p className="text-gray-400 mb-2 text-sm sm:text-base">FIAP - Faculdade de Informática e Administração Paulista</p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Aprimorando competências em tecnologia, gestão de dados e inovação, com foco em soluções que 
                transformam dados em vantagem competitiva.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-black rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300">
            <Database className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white text-base sm:text-lg mb-2">Especialização & Habilidades</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 sm:px-3 py-1 bg-blue-500 text-white rounded-full font-medium">QlikSense</span>
                <span className="text-xs px-2 sm:px-3 py-1 bg-blue-500 text-white rounded-full font-medium">Business Intelligence</span>
                <span className="text-xs px-2 sm:px-3 py-1 bg-blue-500 text-white rounded-full font-medium">Análise de Dados</span>
                <span className="text-xs px-2 sm:px-3 py-1 bg-blue-500 text-white rounded-full font-medium">SQL</span>
                <span className="text-xs px-2 sm:px-3 py-1 bg-blue-500 text-white rounded-full font-medium">React</span>
                <span className="text-xs px-2 sm:px-3 py-1 bg-blue-500 text-white rounded-full font-medium">Next.js</span>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm">
                Expertise em análise de dados, desenvolvimento de dashboards estratégicos e criação de soluções web modernas.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
          <a href="/projetos" className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
            Ver Projetos
          </a>
          <a href="/blog" className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105">
            Ler Blog
          </a>
          <a href="/contato" className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2 border-gray-700 text-gray-300 font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Contato
          </a>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center pt-4 sm:pt-6 border-t border-gray-800">
          <a href="https://www.linkedin.com/in/gabriel-dsf" target="_blank" rel="noopener" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-all duration-300 hover:scale-110 text-sm sm:text-base">
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            LinkedIn
          </a>
          <a href="https://github.com/Freitassync" target="_blank" rel="noopener" className="flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-all duration-300 hover:scale-110 text-sm sm:text-base">
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
