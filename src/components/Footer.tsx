import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl text-amber-900 mb-3">Maria Clara Rolim</h3>
            <p className="text-sm text-gray-600">Cirurgiã-Dentista em Formação</p>
            <p className="text-sm text-gray-600">Acadêmica do 7º período</p>
          </div>

          <div>
            <h4 className="font-medium text-amber-900 mb-3">Contato</h4>
            <p className="text-sm text-gray-600 mb-1">WhatsApp: (81) 99777-0155</p>
            <p className="text-sm text-gray-600">Email: mariaclararolim2005@gmail.com</p>
          </div>

          <div>
            <h4 className="font-medium text-amber-900 mb-3">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/clararolim.odonto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 hover:text-amber-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/5581997770155"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 hover:text-amber-600 transition-colors"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Powered by João Victor de A. Sant'Anna
          </p>
        </div>
      </div>
    </footer>
  );
}
