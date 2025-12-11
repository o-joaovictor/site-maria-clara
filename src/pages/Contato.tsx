import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock } from 'lucide-react';
import Button from '../components/Button';

export default function Contato() {
  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      <section className="bg-gradient-to-br from-white to-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl text-amber-900 text-center mb-4">Contato</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Entre em contato para agendar sua consulta ou esclarecer dúvidas
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl text-amber-900 mb-8">Informações de Contato</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-amber-800" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-amber-900 mb-1">WhatsApp</h3>
                      <p className="text-gray-700 mb-3">(81) 99777-0155</p>
                      <a
                        href="https://wa.me/5581997770155"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <MessageCircle className="inline mr-2" size={16} />
                          Abrir WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="text-amber-800" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-amber-900 mb-1">Instagram</h3>
                      <p className="text-gray-700 mb-3">@clararolim.odonto</p>
                      <a
                        href="https://instagram.com/clararolim.odonto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <Instagram className="inline mr-2" size={16} />
                          Seguir no Instagram
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-amber-800" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-amber-900 mb-1">E-mail</h3>
                      <p className="text-gray-700">mariaclararolim2005@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-amber-900 mb-8">Local de Atendimento</h2>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 mb-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-amber-800" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-amber-900 mb-2">Clínica Escola Uninassau</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Rua Jonathas de Vasconcelos, 316<br />
                      Boa Viagem, Recife – PE
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Jonathas+de+Vasconcelos+316+Boa+Viagem+Recife"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    <MapPin className="inline mr-2" size={16} />
                    Ver no Google Maps
                  </Button>
                </a>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                <div className="flex items-start">
                  <Clock className="text-amber-800 flex-shrink-0" size={24} />
                  <div className="ml-4">
                    <h3 className="font-medium text-amber-900 mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Os horários de atendimento seguem o cronograma da Clínica Escola.<br />
                      Entre em contato via WhatsApp para verificar disponibilidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-amber-900 mb-6">Pronta para Atender Você!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Estou à disposição para cuidar do seu sorriso com todo carinho e profissionalismo
          </p>
          <a href="https://wa.me/5581997770155" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              <MessageCircle className="inline mr-2" size={20} />
              Falar no WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
