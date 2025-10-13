import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      titulo: "Como iniciei na área de Business Intelligence",
      resumo: "Minha jornada desde a graduação até atuar como Analista de BI na JBS, os desafios e aprendizados no caminho.",
      data: "15 de Janeiro, 2025",
      tempoLeitura: "5 min",
      categoria: "Carreira"
    },
    {
      titulo: "QlikSense na prática: construindo dashboards estratégicos",
      resumo: "Dicas práticas e melhores práticas para desenvolver dashboards analíticos que geram valor real para o negócio.",
      data: "8 de Janeiro, 2025",
      tempoLeitura: "7 min",
      categoria: "Tecnologia"
    },
    {
      titulo: "Por que escolhi Sistemas de Informação na FIAP",
      resumo: "A decisão de cursar SI, as expectativas e como a graduação tem contribuído para minha evolução profissional.",
      data: "2 de Janeiro, 2025",
      tempoLeitura: "4 min",
      categoria: "Educação"
    },
    {
      titulo: "Análise de dados: transformando números em decisões",
      resumo: "Como a análise de dados pode impulsionar resultados organizacionais e gerar insights estratégicos.",
      data: "20 de Dezembro, 2024",
      tempoLeitura: "6 min",
      categoria: "Dados"
    }
  ];

  return (
    <main className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Blog</h1>
          <p className="text-lg text-gray-400">Reflexões sobre tecnologia, carreira e análise de dados.</p>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs px-3 py-1 bg-blue-100 text-blue-900 rounded-full font-medium">{post.categoria}</span>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.data}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.tempoLeitura}
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{post.titulo}</h2>
              <p className="text-gray-600 mb-4">{post.resumo}</p>
              <button className="flex items-center gap-2 text-blue-900 font-medium hover:underline transition">
                Ler mais
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">Mais posts em breve...</p>
        </div>
      </div>
    </main>
  );
}
