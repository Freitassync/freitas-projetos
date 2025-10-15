import Link from "next/link";
import { Home, FolderOpen, Mail, BookOpen, Download, Award, Briefcase, GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm lg:text-base font-medium">
            <li>
              <Link href="/" className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white transition-colors">
                <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Início</span>
              </Link>
            </li>
            <li>
              <Link href="/projetos" className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white transition-colors">
                <FolderOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Projetos</span>
              </Link>
            </li>
            <li>
              <Link href="/carreira" className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white transition-colors">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Carreira</span>
              </Link>
            </li>
            <li>
              <Link href="/certificados" className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white transition-colors">
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Certificados</span>
              </Link>
            </li>
            <li>
              <Link href="/diplomas" className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white transition-colors">
                <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Diplomas</span>
              </Link>
            </li>
            <li>
              <Link href="/blog" className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white transition-colors">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/contato" className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Contato</span>
              </Link>
            </li>
          </ul>
          <a 
            href="/curriculo.pdf" 
            download 
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium hover:scale-105 text-sm sm:text-base"
          >
            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
            Currículo
          </a>
        </div>
      </div>
    </nav>
  );
}
