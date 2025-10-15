import { Briefcase, GraduationCap, Database, Linkedin, Github, Mail, ArrowRight, Code, TrendingUp, Award } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - Boas-vindas com gradiente */}
      <section className="relative overflow-hidden">
        {/* Gradiente de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            {/* Badge de disponibilidade */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-green-400 font-medium">Disponível para novas oportunidades</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Olá, eu sou <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
                Gabriel Freitas
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
              Analista de Business Intelligence | Desenvolvedor
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Transformo dados em insights estratégicos e crio soluções digitais que geram valor real para o negócio.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a 
                href="/projetos" 
                className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 hover:scale-105 text-sm sm:text-base"
              >
                Ver Projetos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/contato" 
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-gray-700 text-gray-300 font-semibold hover:bg-gray-900 hover:border-gray-600 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                <Mail className="w-5 h-5" />
                Entre em Contato
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center">
              <a 
                href="https://www.linkedin.com/in/gabriel-dsf" 
                target="_blank" 
                rel="noopener" 
                className="w-12 h-12 rounded-full bg-white/5 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Freitassync" 
                target="_blank" 
                rel="noopener" 
                className="w-12 h-12 rounded-full bg-white/5 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Profile Card */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-gray-800 p-6 sm:p-8 md:p-10 mb-12 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full blur-xl opacity-50" />
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQHNJBLnA1YSsQ/profile-displayphoto-shrink_400_400/B4DZd4_PzkGsAg-/0/1750081536330?e=1762992000&v=beta&t=IB_LPJMke-UTFjYE6Yh8PgumiHvbohyS3EvB2Zt5BqA"
                alt="Gabriel Freitas"
                width={160}
                height={160}
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-2xl object-cover border-4 border-gray-800 hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Sobre mim</h2>
              <p className="text-gray-400 text-lg mb-4">20 anos | São Paulo, Brasil</p>
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                Profissional apaixonado por tecnologia e dados, com experiência em Business Intelligence e desenvolvimento web. 
                Busco sempre inovar e criar soluções que façam a diferença.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-bold text-white text-lg">Experiência</h3>
              </div>
              <p className="text-gray-400 text-sm">Analista de BI na JBS</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Code className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-bold text-white text-lg">Projetos</h3>
              </div>
              <p className="text-gray-400 text-sm">Full-stack & BI</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-bold text-white text-lg">Formação</h3>
              </div>
              <p className="text-gray-400 text-sm">Sistemas de Informação - FIAP</p>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-4">
            <div className="group bg-black/40 rounded-xl p-5 border border-gray-800 hover:border-blue-500/50 hover:bg-black/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-1">Analista de Business Intelligence</h3>
                  <p className="text-blue-400 mb-2 text-sm font-medium">JBS - Líder global em proteínas</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Desenvolvimento de soluções orientadas a resultados utilizando QlikSense, gerando insights estratégicos 
                    que impulsionam decisões e performance organizacional.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-black/40 rounded-xl p-5 border border-gray-800 hover:border-purple-500/50 hover:bg-black/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-1">Sistemas de Informação</h3>
                  <p className="text-purple-400 mb-2 text-sm font-medium">FIAP - Faculdade de Informática e Administração Paulista</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Aprimorando competências em tecnologia, gestão de dados e inovação, com foco em soluções que 
                    transformam dados em vantagem competitiva.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-black/40 rounded-xl p-5 border border-gray-800 hover:border-green-500/50 hover:bg-black/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-1">Especialização & Habilidades</h3>
                  <div className="flex flex-wrap gap-2 mb-3 mt-3">
                    <span className="text-xs px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg font-medium border border-blue-500/30">QlikSense</span>
                    <span className="text-xs px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg font-medium border border-blue-500/30">Business Intelligence</span>
                    <span className="text-xs px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg font-medium border border-blue-500/30">Análise de Dados</span>
                    <span className="text-xs px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg font-medium border border-blue-500/30">SQL</span>
                    <span className="text-xs px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg font-medium border border-blue-500/30">React</span>
                    <span className="text-xs px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg font-medium border border-blue-500/30">Next.js</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Expertise em análise de dados, desenvolvimento de dashboards estratégicos e criação de soluções web modernas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
