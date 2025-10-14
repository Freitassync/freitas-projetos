import Link from "next/link";
import { Home, FolderOpen, Mail, BookOpen, Download, Award } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <ul className="flex gap-8 text-base font-medium">
          <li>
            <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              Início
            </Link>
          </li>
          <li>
            <Link href="/projetos" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <FolderOpen className="w-4 h-4" />
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/certificados" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Award className="w-4 h-4" />
              Certificados
            </Link>
          </li>
          <li>
            <Link href="/blog" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contato" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              Contato
            </Link>
          </li>
        </ul>
        <a 
          href="/curriculo.pdf" 
          download 
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium hover:scale-105"
        >
          <Download className="w-4 h-4" />
          Currículo
        </a>
      </div>
    </nav>
  );
}
