'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContatoPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Verificar se as variáveis de ambiente estão configuradas
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configure as variáveis de ambiente do EmailJS');
      }

      const templateParams = {
        from_name: formData.get('nome'),
        from_email: formData.get('email'),
        message: formData.get('mensagem'),
        to_email: 'gabrielfreitas3010@outlook.com',
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus('success');
      setMessage('Mensagem enviada com sucesso! Retornarei em breve.');
      form.reset();

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus('error');
      setMessage('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo email.');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <main className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Entre em Contato</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Vamos conversar sobre tecnologia, projetos ou oportunidades de colaboração.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <a 
            href="mailto:gabrielfreitas3010@outlook.com" 
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-bold text-white text-lg sm:text-xl mb-2">Email</h3>
              <p className="text-sm sm:text-base text-blue-100 break-all">gabrielfreitas3010@outlook.com</p>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/gabriel-dsf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all">
                <Linkedin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-bold text-white text-lg sm:text-xl mb-2">LinkedIn</h3>
              <p className="text-sm sm:text-base text-blue-100">gabriel-dsf</p>
            </div>
          </a>

          <a 
            href="https://github.com/Freitassync" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all">
                <Github className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-bold text-white text-lg sm:text-xl mb-2">GitHub</h3>
              <p className="text-sm sm:text-base text-gray-300">Freitassync</p>
            </div>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Informações adicionais */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Informações</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Localização</h3>
                    <p className="text-sm text-gray-400">São Paulo, Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Tempo de Resposta</h3>
                    <p className="text-sm text-gray-400">Normalmente respondo em até 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Disponibilidade</h3>
                    <p className="text-sm text-gray-400">Aberto a novas oportunidades e projetos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50">
              <h3 className="text-lg font-semibold text-white mb-3">💡 Dica</h3>
              <p className="text-sm text-gray-300">
                Ao enviar uma mensagem, descreva brevemente seu projeto ou oportunidade. 
                Isso me ajudará a responder de forma mais completa e direcionada!
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Envie uma Mensagem</h2>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-300">{message}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-300">{message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 font-medium mb-2" htmlFor="nome">
                  Nome *
                </label>
                <input 
                  className="w-full bg-white/10 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  placeholder="Seu nome completo"
                  required 
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
                  Email *
                </label>
                <input 
                  className="w-full bg-white/10 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="seu@email.com"
                  required 
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2" htmlFor="mensagem">
                  Mensagem *
                </label>
                <textarea 
                  className="w-full bg-white/10 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" 
                  id="mensagem" 
                  name="mensagem" 
                  rows={6} 
                  placeholder="Descreva seu projeto, oportunidade ou dúvida..."
                  required 
                  disabled={status === 'sending'}
                />
              </div>

              <button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" 
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
