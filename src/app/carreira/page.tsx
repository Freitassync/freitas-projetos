import { Briefcase, Calendar, MapPin, TrendingUp, Award, Target, Zap, BarChart3, Lightbulb } from 'lucide-react';

export default function CarreiraPage() {
  const experiencias = [
    {
      cargo: "Business Intelligence Analyst Jr.",
      empresa: "JBS",
      localizacao: "São Paulo, Brasil",
      periodo: "Jun 2024 - Presente",
      duracao: "1 ano 5 meses",
      atual: true,
      descricao: "Desenvolvimento de dashboards analíticos estratégicos, análise de dados para suporte à tomada de decisões e otimização de processos do negócio.",
      realizacoes: [
        "Desenvolvimento de dashboards em QlikSense para análise de indicadores estratégicos",
        "Análise de dados complexos para suporte às decisões executivas",
        "Automação de relatórios e processos analíticos",
        "Colaboração com áreas de negócio para traduzir necessidades em soluções de BI"
      ],
      skills: ["QlikSense", "SQL", "Análise de Dados", "Business Intelligence", "Data Visualization"]
    },
    {
      cargo: "Business Intelligence Assistant",
      empresa: "JBS",
      localizacao: "São Paulo, Brasil",
      periodo: "Out 2023 - Jun 2024",
      duracao: "9 meses",
      atual: false,
      descricao: "Suporte na construção de relatórios, extração e tratamento de dados, apoio em projetos de BI e automação de processos.",
      realizacoes: [
        "Suporte na construção de relatórios e dashboards",
        "Extração e tratamento de dados de múltiplas fontes",
        "Apoio em projetos de automação de processos analíticos",
        "Documentação de processos e melhores práticas"
      ],
      skills: ["Excel Avançado", "SQL", "ETL", "Relatórios", "Análise de Dados"]
    }
  ];

  const competencias = [
    {
      titulo: "Business Intelligence",
      descricao: "Desenvolvimento de soluções de BI e análise de dados estratégicos",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      titulo: "Análise de Dados",
      descricao: "Extração de insights estratégicos e suporte à tomada de decisões",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      titulo: "Automação",
      descricao: "Otimização de processos através de soluções automatizadas",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      titulo: "Inovação",
      descricao: "Busca constante por soluções criativas e eficientes",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/20 via-black to-black py-16 sm:py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Trajetória Profissional</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Minha <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Carreira</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Evolução profissional na área de Business Intelligence, com foco em análise de dados e geração de insights estratégicos.
            </p>
          </div>
        </div>
      </section>

      {/* Competências */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Áreas de Competência</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {competencias.map((comp, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${comp.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {comp.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{comp.titulo}</h3>
              <p className="text-sm text-gray-400">{comp.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Experiência Profissional</h2>
        
        <div className="relative">
          {/* Timeline vertical */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {experiencias.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20">
                {/* Indicador de timeline */}
                <div className={`absolute left-2.5 sm:left-6 top-6 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 ${
                  exp.atual 
                    ? 'bg-blue-500 border-blue-300 shadow-lg shadow-blue-500/50 animate-pulse' 
                    : 'bg-purple-500 border-purple-300'
                }`}></div>
                
                <div className={`bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border ${
                  exp.atual ? 'border-blue-500/50' : 'border-gray-800'
                } hover:border-gray-700 transition-all duration-300 overflow-hidden`}>
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${
                    exp.atual ? 'from-blue-600 to-blue-700' : 'from-purple-600 to-purple-700'
                  } p-6 sm:p-8`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h2 className="text-xl sm:text-2xl font-bold text-white">{exp.cargo}</h2>
                          {exp.atual && (
                            <span className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              Atual
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-blue-100 font-semibold flex items-center gap-2 mb-3">
                          <Briefcase className="w-5 h-5" />
                          {exp.empresa}
                        </p>
                        <div className="flex flex-wrap gap-3 sm:gap-4 text-blue-100 text-sm">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.localizacao}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.periodo}
                          </span>
                          <span className="opacity-75">· {exp.duracao}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 sm:p-8">
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.descricao}</p>
                    
                    {/* Realizações */}
                    <div className="mb-6">
                      <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-400" />
                        Principais Realizações
                      </h3>
                      <ul className="space-y-2">
                        {exp.realizacoes.map((realizacao, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="text-blue-400 mt-1">▸</span>
                            <span>{realizacao}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h3 className="text-white font-semibold mb-3 text-sm">Competências Técnicas</h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-lg text-xs font-medium hover:bg-blue-500/20 transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text mb-2">2+</div>
            <div className="text-gray-400 text-sm sm:text-base">Anos de Experiência</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-2">1</div>
            <div className="text-gray-400 text-sm sm:text-base">Empresa</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-xl border border-green-500/20 p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text mb-2">BI</div>
            <div className="text-gray-400 text-sm sm:text-base">Área de Atuação</div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-xl border border-yellow-500/20 p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text mb-2">∞</div>
            <div className="text-gray-400 text-sm sm:text-base">Aprendizado Contínuo</div>
          </div>
        </div>
      </section>
    </main>
  );
}
