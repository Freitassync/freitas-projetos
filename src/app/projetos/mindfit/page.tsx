'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

export default function MindFitPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/mindfit/home.png',
      title: 'Tela Principal',
      description: 'A tela principal apresenta botões de navegação intuitivos para todas as funcionalidades do app. Você pode acompanhar seu peso atual, altura e visualizar a evolução do seu peso através de gráficos interativos, facilitando o monitoramento do seu progresso.'
    },
    {
      image: '/mindfit/treinos.png',
      title: 'Treinos',
      description: 'Na tela de treinos você pode registrar seus treinos personalizados, acessar treinos recomendados pela IA baseados no seu perfil e objetivos, e acompanhar toda sua evolução através de um histórico detalhado de atividades.'
    },
    {
      image: '/mindfit/nutricao.png',
      title: 'Nutrição',
      description: 'Registre sua alimentação dia a dia de forma simples e completa. Receba recomendações nutricionais personalizadas com IA. Através da integração com a USDA Food Database, ao pesquisar qualquer alimento, você tem acesso instantâneo à tabela nutricional completa.'
    },
    {
      image: '/mindfit/assistenteia.png',
      title: 'Assistente IA',
      description: 'Chatbot powered by OpenAI para orientação em fitness e nutrição. Receba recomendações executáveis e personalizadas, tire dúvidas sobre treinos, alimentação e saúde com respostas inteligentes adaptadas ao seu perfil.'
    },
    {
      image: '/mindfit/profile.png',
      title: 'Perfil',
      description: 'Gerencie suas informações pessoais com facilidade. A seção "Melhorar Recomendação de IA" permite adicionar preferências personalizadas (como "sou vegetariano"), fazendo com que todas as respostas do chatbot e recomendações se adaptem automaticamente às suas necessidades.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <Link href="/projetos" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Voltar para Projetos
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <Image 
              src="/logos/logo_mindfit.png" 
              alt="MindFit logo" 
              width={60} 
              height={60} 
              className="object-contain"
            />
            <h1 className="text-4xl font-bold text-white">MindFit</h1>
          </div>
          <p className="text-lg text-gray-400 mb-6">
            Plataforma full-stack para academias e profissionais de saúde, com recursos de inteligência artificial para gestão de treinos, alunos e resultados.
          </p>
          
          <div className="flex gap-4 mb-8">
            <a 
              href="https://github.com/Freitassync/mindfit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="https://mindfitadmin.outis.com.br/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Painel Admin
            </a>
            <a 
              href="https://mindfit.outis.com.br/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              App MindFit
            </a>
          </div>
        </div>

        {/* Carrossel */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="relative">
            {/* Imagem */}
            <div className="relative h-[500px] bg-gray-100">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-contain"
              />
            </div>

            {/* Botões de navegação */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-400'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Descrição */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {slides[currentSlide].title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Tecnologias */}
        <div className="mt-10 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologias Utilizadas</h2>
          <div className="flex flex-wrap gap-3">
            {['Spring Boot', 'Angular', 'React Native', 'MongoDB', 'OpenAI', 'USDA Food Database', 'IA'].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-gray-900 text-white rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
