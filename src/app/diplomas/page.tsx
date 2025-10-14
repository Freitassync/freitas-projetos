import { GraduationCap, Calendar, Award } from 'lucide-react';
import Image from 'next/image';

export default function DiplomasPage() {
  const diplomas = [
    {
      titulo: "Ensino Médio com Habilitação Profissional de Técnico em Desenvolvimento de Sistemas",
      instituicao: "ETEC",
      tipo: "Técnico",
      ano: "Concluído",
      imagem: "/diplomas/etec.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-black p-8">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Diplomas</h1>
          <p className="text-lg text-gray-400">Formações acadêmicas e certificações técnicas.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {diplomas.map((diploma, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-gray-900 mt-1" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{diploma.titulo}</h2>
                  <p className="text-lg text-gray-700 font-medium mb-2">{diploma.instituicao}</p>
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {diploma.tipo}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {diploma.ano}
                    </span>
                  </div>
                </div>
              </div>
              
              {diploma.imagem && (
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-gray-200">
                  <Image 
                    src={diploma.imagem} 
                    alt={`Diploma ${diploma.titulo}`} 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
