import { Award, ExternalLink, Calendar, Clock } from 'lucide-react';

export default function CertificadosPage() {
  const certificados = [
    {
      titulo: "Começando em Inteligência Artificial",
      instituicao: "Alura",
      cargaHoraria: "44h",
      ano: "2024",
      link: "https://cursos.alura.com.br/degree/certificate/49a1d365-6b1d-4d4b-a224-61c1257f7842?lang"
    },
    {
      titulo: "Data Driven Decision",
      instituicao: "FIAP",
      cargaHoraria: "100h",
      ano: "2024",
      link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=8f8e0e4c2764e09b674cd9717352962c&action=view"
    },
    {
      titulo: "Formação Social e Sustentabilidade",
      instituicao: "FIAP",
      cargaHoraria: "80h",
      ano: "2024",
      link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=38ae6f163d77813cae73632826bd298d&action=view"
    },
    {
      titulo: "Blockchain Advanced",
      instituicao: "FIAP",
      cargaHoraria: "40h",
      ano: "2024",
      link: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=826fe48f275187b1378ee22922ee5a8f&action=view"
    }
  ];

  return (
    <main className="min-h-screen bg-black p-8">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Certificados</h1>
          <p className="text-lg text-gray-400">Formações e cursos que contribuíram para meu desenvolvimento profissional.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {certificados.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-gray-900 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">{cert.titulo}</h2>
                    <p className="text-sm text-gray-600 font-medium">{cert.instituicao}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {cert.cargaHoraria}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {cert.ano}
                </span>
              </div>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium text-sm hover:underline transition"
              >
                Ver Certificado
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
