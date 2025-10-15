import { Github, Calendar, Eye, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjetosPage() {
  const techIcons: Record<string, string> = {
    "Spring Boot": "🍃",
    "Angular": "🅰️",
    "React Native": "⚛️",
    "MongoDB": "🍃",
    "IA": "🧠",
    "Expo": "📱",
    "Node.js": "🟢",
    "Express": "⚡",
    "JWT": "🔐"
  };

  const projetos = [
    {
      titulo: "MindFit",
      descricao:
        "Plataforma full-stack para academias e profissionais de saúde, com recursos de inteligência artificial para gestão de treinos, alunos e resultados. Desenvolvida com Spring Boot, Angular, Expo/React Native Web e MongoDB.",
      tags: ["Spring Boot", "Angular", "React Native", "MongoDB", "IA"],
      ano: "2025",
      github: "https://github.com/Freitassync/mindfit",
      admin: "https://mindfitadmin.outis.com.br/login",
      app: "https://mindfit.outis.com.br/login",
      logo: "/logos/logo_mindfit.png",
      detalhes: "/projetos/mindfit",
      color: "from-blue-600 to-blue-800"
    },
    {
      titulo: "AgroGest",
      descricao:
        "AgroGest é uma solução completa para gestão agropecuária, composta por aplicativo mobile e API backend. Permite controle de fazendas, animais, usuários, processos e dados do agronegócio em um só lugar. App em React Native/Expo, backend Node.js/Express/MongoDB, autenticação JWT.",
      tags: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "JWT"],
      ano: "2025",
      github: "https://github.com/Freitassync/agrogest",
      app: "https://agrogest.website",
      logo: "/logos/logo_agrogest.png",
      color: "from-green-600 to-green-800"
    }
  ];

  return (
    <main className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="mb-10 sm:mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Meus Projetos</h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Uma seleção dos meus principais trabalhos e contribuições em desenvolvimento de software.
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projetos.map((projeto, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-700 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Header com Logo e Gradiente */}
              <div className={`bg-gradient-to-r ${projeto.color} p-6 sm:p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex items-center justify-between">
                  {projeto.logo && (
                    <Image 
                      src={projeto.logo} 
                      alt={`${projeto.titulo} logo`} 
                      width={60} 
                      height={60} 
                      className="object-contain bg-white/10 rounded-xl p-2 backdrop-blur-sm"
                    />
                  )}
                  {projeto.github && (
                    <a 
                      href={projeto.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {projeto.titulo}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{projeto.ano}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                  {projeto.descricao}
                </p>

                {/* Tags com ícones */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projeto.tags.map((tag, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-gray-800 text-gray-300 rounded-lg font-medium text-xs sm:text-sm hover:bg-white/10 hover:border-gray-700 transition-all"
                    >
                      <span>{techIcons[tag] || "💻"}</span>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>

                {/* Botões de ação */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {projeto.detalhes && (
                    <Link href={projeto.detalhes} className="flex-1">
                      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                        <Eye className="w-4 h-4" />
                        Ver Detalhes
                      </button>
                    </Link>
                  )}
                  
                  <div className="flex gap-2">
                    {projeto.admin && (
                      <a 
                        href={projeto.admin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-gray-800 text-gray-300 rounded-lg hover:bg-white/10 hover:border-gray-700 transition-all font-medium text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Admin
                      </a>
                    )}
                    {projeto.app && (
                      <a 
                        href={projeto.app} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-gray-800 text-gray-300 rounded-lg hover:bg-white/10 hover:border-gray-700 transition-all font-medium text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {projeto.titulo === "MindFit" ? "App" : "Site"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
