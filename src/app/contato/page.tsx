import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Contato</h1>
          <p className="text-lg text-gray-400">Vamos conversar sobre tecnologia, projetos ou oportunidades.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <a href="mailto:gabrielfreitas3010@outlook.com" className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-sm text-gray-600">gabrielfreitas3010@outlook.com</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/gabriel-dsf" target="_blank" rel="noopener" className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Linkedin className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
              <p className="text-sm text-gray-600">linkedin.com/in/gabriel-dsf</p>
            </div>
          </a>

          <a href="https://github.com/Freitassync" target="_blank" rel="noopener" className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              <Github className="w-6 h-6 text-gray-900" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
              <p className="text-sm text-gray-600">github.com/Freitassync</p>
            </div>
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Envie uma mensagem</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="nome">Nome</label>
              <input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" type="text" id="nome" name="nome" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
              <input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" type="email" id="email" name="email" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="mensagem">Mensagem</label>
              <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" id="mensagem" name="mensagem" rows={5} required />
            </div>
            <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:scale-105" type="submit">
              <Send className="w-5 h-5" />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
