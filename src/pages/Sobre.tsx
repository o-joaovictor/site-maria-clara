import { GraduationCap, Heart, Award, Users } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      <section className="bg-gradient-to-br from-white to-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl text-amber-900 text-center mb-4">Sobre Mim</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Conheça minha trajetória e paixão pela odontologia
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-amber-100 to-stone-200 shadow-2xl overflow-hidden">
                <img
                  src="/maria-clara/sobre.jpg"
                  alt="Maria Clara Rolim no consultório"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-amber-900 mb-6">Maria Clara Rolim</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sou acadêmica do <strong>7º período de Odontologia na Uninassau Boa Viagem</strong>,
                localizada em Recife – PE. Minha jornada na odontologia é movida pela paixão em
                transformar sorrisos e promover saúde bucal.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Atualmente, atuo na <strong>Clínica Escola da instituição</strong>, onde tenho a
                oportunidade de aplicar meus conhecimentos teóricos na prática, sempre com supervisão
                de profissionais experientes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Meu compromisso é oferecer atendimentos <strong>humanizados, técnicos e acolhedores</strong>,
                onde cada paciente é tratado com carinho, respeito e dedicação. Acredito que cuidar da
                saúde bucal vai além dos procedimentos – é criar uma relação de confiança e bem-estar.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="text-amber-800" size={24} />
              </div>
              <h3 className="font-serif text-lg text-amber-900 mb-2">Formação</h3>
              <p className="text-gray-600">7º período de Odontologia na Uninassau Boa Viagem</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-amber-800" size={24} />
              </div>
              <h3 className="font-serif text-lg text-amber-900 mb-2">Atendimento</h3>
              <p className="text-gray-600">Humanizado, técnico e acolhedor</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Award className="text-amber-800" size={24} />
              </div>
              <h3 className="font-serif text-lg text-amber-900 mb-2">Excelência</h3>
              <p className="text-gray-600">Técnicas modernas e atualizadas</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-amber-800" size={24} />
              </div>
              <h3 className="font-serif text-lg text-amber-900 mb-2">Compromisso</h3>
              <p className="text-gray-600">Cuidado individualizado para cada paciente</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-amber-900 text-center mb-8">Minha Missão</h2>
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12 border-2 border-amber-200">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              "Proporcionar cuidado odontológico de excelência, aliando técnica, humanização e
              acolhimento, para que cada paciente tenha uma experiência positiva e conquiste um
              sorriso saudável e confiante."
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-amber-900 text-center mb-8">Local de Atendimento</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100">
            <h3 className="font-medium text-xl text-amber-900 mb-4">Clínica Escola Uninassau</h3>
            <p className="text-gray-700 mb-2">
              <strong>Endereço:</strong> Rua Jonathas de Vasconcelos, 316 – Boa Viagem, Recife – PE
            </p>
            <p className="text-gray-700">
              Atendimentos realizados com supervisão de profissionais experientes, garantindo
              qualidade e segurança.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
