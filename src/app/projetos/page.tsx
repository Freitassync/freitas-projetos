import { Github, Calendar } from 'lucide-react';

export default function ProjetosPage() {
  const projetos = [
    {
      titulo: "MindFit",
      descricao:
        "Plataforma full-stack para academias e profissionais de saúde, com recursos de inteligência artificial para gestão de treinos, alunos e resultados. Desenvolvida com Spring Boot, Angular, Expo/React Native Web e MongoDB.",
      tags: ["Spring Boot", "Angular", "React Native", "MongoDB", "IA"],
      ano: "2025",
      github: "https://github.com/Freitassync/mindfit",
      admin: "https://mindfitadmin.outis.com.br/login",
      app: "https://mindfit.outis.com.br/login"
    },
    {
      titulo: "AgroGest",
      descricao:
        "AgroGest é uma solução completa para gestão agropecuária, composta por aplicativo mobile e API backend. Permite controle de fazendas, animais, usuários, processos e dados do agronegócio em um só lugar. App em React Native/Expo, backend Node.js/Express/MongoDB, autenticação JWT.",
      tags: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "JWT"],
      ano: "2025",
      github: "https://github.com/Freitassync/agrogest",
      app: "https://agrogest.website"
    }
  ];

  return (
    <main className="min-h-screen bg-black p-8">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Projetos</h1>
          <p className="text-lg text-gray-400">Uma seleção dos meus principais trabalhos e contribuições.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-900">{projeto.titulo}</h2>
                {projeto.github && (
                  <a href={projeto.github} target="_blank" rel="noopener" className="text-gray-600 hover:text-blue-900 transition">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-gray-600 mb-4 text-sm">{projeto.descricao}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {projeto.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-900 text-white rounded-full font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                <Calendar className="w-4 h-4" />
                <span>{projeto.ano}</span>
              </div>
              {projeto.admin && (
                <a href={projeto.admin} target="_blank" rel="noopener" className="text-xs text-blue-700 hover:underline mr-2">Painel Admin</a>
              )}
              {projeto.app && (
                <a href={projeto.app} target="_blank" rel="noopener" className="text-xs text-blue-700 hover:underline">App MindFit</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
