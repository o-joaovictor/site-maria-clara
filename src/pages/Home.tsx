import { Link } from 'react-router-dom';
import { Sparkles, Heart, Shield, Calendar } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      <section className="relative bg-gradient-to-br from-white to-stone-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl text-amber-900 mb-6 leading-tight">
                Maria Clara Rolim
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Cuidando de sorrisos com precisão, carinho e excelência.
              </p>
              <Link to="/agendamentos">
                <Button size="lg" className="shadow-xl">
                  <Calendar className="inline mr-2" size={20} />
                  Agendar Consulta
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-stone-200 shadow-2xl overflow-hidden">
                <img
                  src="/maria-clara/home.jpg"
                  alt="Maria Clara Rolim"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-800 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-amber-800" size={32} />
              </div>
              <h3 className="font-serif text-xl text-amber-900 mb-2">Excelência</h3>
              <p className="text-gray-600">Atendimento de alta qualidade com técnicas modernas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-amber-800" size={32} />
              </div>
              <h3 className="font-serif text-xl text-amber-900 mb-2">Humanização</h3>
              <p className="text-gray-600">Cuidado acolhedor e personalizado para cada paciente</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-amber-800" size={32} />
              </div>
              <h3 className="font-serif text-xl text-amber-900 mb-2">Segurança</h3>
              <p className="text-gray-600">Protocolos rigorosos de biossegurança e higiene</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F3EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-amber-900 text-center mb-12">Sobre Mim</h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Olá! Sou Maria Clara Rolim, acadêmica do 7º período de Odontologia na Uninassau Boa Viagem,
              em Recife – PE.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Atuo na Clínica Escola da instituição, oferecendo atendimentos humanizados, técnicos e
              acolhedores. Minha missão é cuidar do seu sorriso com dedicação, carinho e as melhores
              práticas da odontologia moderna.
            </p>
            <Link to="/sobre">
              <Button variant="outline">Saiba Mais</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-amber-900 text-center mb-4">Serviços</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ofereço uma variedade de tratamentos odontológicos com foco em qualidade e bem-estar
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              'Limpeza e Profilaxia',
              'Restaurações',
              'Clareamento Dental',
              'Avaliação Estética',
              'Urgências Simples',
              'Prevenção',
            ].map((service) => (
              <div
                key={service}
                className="bg-stone-50 rounded-lg p-6 text-center border border-stone-200"
              >
                <p className="text-amber-900 font-medium">{service}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/servicos">
              <Button variant="outline" size="lg">Ver Todos os Serviços</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl mb-6">Pronta para cuidar do seu sorriso?</h2>
          <p className="text-xl mb-8 text-amber-100">
            Agende sua consulta agora e dê o primeiro passo para um sorriso mais saudável
          </p>
          <Link to="/agendamentos">
            <Button variant="secondary" size="lg">
              <Calendar className="inline mr-2" size={20} />
              Agendar Agora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
