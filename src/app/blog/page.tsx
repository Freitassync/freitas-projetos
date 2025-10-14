

export default function BlogPage() {


  return (
    <main className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Blog</h1>
          <p className="text-lg text-gray-400">Reflexões sobre tecnologia, carreira e análise de dados.</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Nenhum post publicado ainda</h2>
            <p className="text-gray-600">Em breve você encontrará artigos sobre tecnologia, carreira e análise de dados.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">Mais posts em breve...</p>
        </div>
      </div>
    </main>
  );
}
