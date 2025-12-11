import { Sparkles, Wrench, Smile, Eye, AlertCircle, Shield, BookOpen } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Servicos() {
  const services = [
    {
      icon: Sparkles,
      title: 'Limpeza e Profilaxia',
      description: 'Remoção de tártaro e placa bacteriana, polimento dental e aplicação de flúor para manter seu sorriso limpo e saudável.',
    },
    {
      icon: Wrench,
      title: 'Raspagem',
      description: 'Tratamento periodontal para remoção de tártaro subgengival, prevenindo doenças periodontais e mantendo gengivas saudáveis.',
    },
    {
      icon: Wrench,
      title: 'Restaurações',
      description: 'Recuperação de dentes danificados por cáries ou fraturas, devolvendo função e estética com materiais de qualidade.',
    },
    {
      icon: Smile,
      title: 'Clareamento Dental',
      description: 'Procedimento estético para deixar seu sorriso mais branco e radiante, com técnicas seguras e eficazes.',
    },
    {
      icon: Eye,
      title: 'Avaliação Estética',
      description: 'Análise completa do seu sorriso para identificar possibilidades de melhorias estéticas e funcionais.',
    },
    {
      icon: AlertCircle,
      title: 'Urgências Simples',
      description: 'Atendimento para dores de dente, pequenos traumas e outras urgências odontológicas de menor complexidade.',
    },
    {
      icon: Shield,
      title: 'Prevenção e Acompanhamento',
      description: 'Consultas regulares para prevenir problemas bucais e manter a saúde dos seus dentes e gengivas.',
    },
    {
      icon: BookOpen,
      title: 'Orientação de Saúde Bucal',
      description: 'Instruções personalizadas sobre higiene oral, técnicas de escovação e cuidados para manter um sorriso saudável.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      <section className="bg-gradient-to-br from-white to-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl text-amber-900 text-center mb-4">Serviços</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Tratamentos odontológicos completos com foco em qualidade, segurança e bem-estar
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-amber-900 mb-6 text-center">
              Atendimento Supervisionado
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Todos os procedimentos são realizados na <strong>Clínica Escola da Uninassau</strong>,
              sob supervisão de profissionais experientes e qualificados. Isso garante que você receba
              atendimento de alta qualidade com total segurança.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Seguimos rigorosos protocolos de biossegurança e utilizamos equipamentos modernos para
              proporcionar a melhor experiência odontológica possível.
            </p>
            <div className="text-center">
              <Link to="/agendamentos">
                <Button size="lg">Agendar Consulta</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-amber-900 mb-6">Dúvidas sobre os Procedimentos?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Entre em contato para esclarecer qualquer dúvida sobre os tratamentos disponíveis
          </p>
          <Link to="/contato">
            <Button variant="outline" size="lg">Entrar em Contato</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
