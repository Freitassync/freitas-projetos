'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, Github, ExternalLink, Maximize2, X } from 'lucide-react';

export default function MindFitPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const technologies = [
    { name: 'Spring Boot', icon: '🍃', color: 'bg-green-100 text-green-800 border-green-300' },
    { name: 'Angular', icon: '🅰️', color: 'bg-red-100 text-red-800 border-red-300' },
    { name: 'React Native', icon: '⚛️', color: 'bg-blue-100 text-blue-800 border-blue-300' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-100 text-green-800 border-green-300' },
    { name: 'OpenAI', icon: '🤖', color: 'bg-purple-100 text-purple-800 border-purple-300' },
    { name: 'USDA Food DB', icon: '🥗', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
    { name: 'IA', icon: '🧠', color: 'bg-indigo-100 text-indigo-800 border-indigo-300' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <main className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <Link href="/projetos" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 sm:mb-8">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Voltar para Projetos
        </Link>

        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4">
            <Image 
              src="/logos/logo_mindfit.png" 
              alt="MindFit logo" 
              width={60} 
              height={60} 
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">MindFit</h1>
          </div>
          <p className="text-base sm:text-lg text-gray-400 mb-6 text-center sm:text-left">
            Plataforma full-stack para academias e profissionais de saúde, com recursos de inteligência artificial para gestão de treinos, alunos e resultados.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center sm:justify-start">
            <a 
              href="https://github.com/Freitassync/mindfit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all text-sm sm:text-base"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              GitHub
            </a>
            <a 
              href="https://mindfitadmin.outis.com.br/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm sm:text-base"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              Painel Admin
            </a>
            <a 
              href="https://mindfit.outis.com.br/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm sm:text-base"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              App MindFit
            </a>
          </div>
        </div>

        {/* Carrossel */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="relative">
            {/* Imagem */}
            <div className="relative h-64 sm:h-96 md:h-[500px] bg-gray-100 cursor-pointer group" onClick={openModal}>
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-contain"
              />
              
              {/* Botão de maximizar */}
              <button
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
                aria-label="Maximizar imagem"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal();
                }}
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Botões de navegação */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all z-10"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all z-10"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
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
          <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              {slides[currentSlide].title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Tecnologias */}
        <div className="mt-8 sm:mt-10 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Tecnologias Utilizadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 ${tech.color} rounded-lg border-2 font-medium text-xs sm:text-sm md:text-base hover:scale-105 transition-transform shadow-sm`}
              >
                <span className="text-xl sm:text-2xl">{tech.icon}</span>
                <span className="font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Maximização */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in" onClick={closeModal}>
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
            onClick={closeModal}
            aria-label="Fechar modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-contain"
            />

            {/* Navegação no modal */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Título e descrição no modal */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                {slides[currentSlide].title}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-4xl">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
