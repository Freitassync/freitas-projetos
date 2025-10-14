import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function CarreiraPage() {
  const experiencias = [
    {
      cargo: "Business Intelligence Analyst Jr.",
      empresa: "JBS",
      localizacao: "São Paulo, Brazil",
      periodo: "Jun 2024 - Presente",
      duracao: "1 ano 5 meses",
      atual: true,
      descricao: "Atuação no desenvolvimento de dashboards analíticos, análise de dados estratégicos e suporte à tomada de decisões do negócio."
    },
    {
      cargo: "Business Intelligence Assistant",
      empresa: "JBS",
      localizacao: "São Paulo, Brazil",
      periodo: "Out 2023 - Jun 2024",
      duracao: "9 meses",
      atual: false,
      descricao: "Suporte na construção de relatórios, extração e tratamento de dados, apoio em projetos de BI e automação de processos."
    }
  ];

  return (
    <main className="min-h-screen bg-black p-8">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Carreira</h1>
          <p className="text-lg text-gray-400">Minha trajetória profissional e evolução na área de Business Intelligence.</p>
        </div>
        
        <div className="relative">
          {/* Timeline vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
          
          <div className="space-y-8">
            {experiencias.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Indicador de timeline */}
                <div className={`absolute left-6 top-6 w-5 h-5 rounded-full border-4 ${
                  exp.atual ? 'bg-blue-500 border-blue-300 animate-pulse' : 'bg-gray-700 border-gray-600'
                }`}></div>
                
                <div className={`bg-white rounded-lg shadow-lg p-6 border ${
                  exp.atual ? 'border-blue-300' : 'border-gray-200'
                } hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-2xl font-semibold text-gray-900">{exp.cargo}</h2>
                        {exp.atual && (
                          <span className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full font-medium flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Atual
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-gray-700 font-medium flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-gray-600" />
                        {exp.empresa}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.localizacao}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.periodo}
                    </span>
                    <span className="text-gray-500">· {exp.duracao}</span>
                  </div>
                  
                  <p className="text-gray-600">{exp.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">2+</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">1</div>
            <div className="text-gray-600">Empresas</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">BI</div>
            <div className="text-gray-600">Área de Atuação</div>
          </div>
        </div>
      </div>
    </main>
  );
}
