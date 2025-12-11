import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import { supabase } from '../lib/supabaseClient';

const AVAILABLE_TIMES = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

export default function Agendamentos() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateString = minDate.toISOString().split('T')[0];

  useEffect(() => {
    if (selectedDate) {
      loadAvailableTimes(selectedDate);
    }
  }, [selectedDate]);

  const loadAvailableTimes = async (date: string) => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select('time')
        .eq('date', date);

      if (error) throw error;

      const bookedTimes = data?.map((appointment) => appointment.time) || [];
      const available = AVAILABLE_TIMES.filter((time) => !bookedTimes.includes(time));
      setAvailableTimes(available);
      setSelectedTime('');
    } catch (err) {
      console.error('Error loading times:', err);
      setAvailableTimes(AVAILABLE_TIMES);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!firstName.trim() || !lastName.trim() || !selectedDate || !selectedTime) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);

    try {
      const { data: existingAppointment } = await supabase
        .from('appointments')
        .select('id')
        .eq('date', selectedDate)
        .eq('time', selectedTime)
        .maybeSingle();

      if (existingAppointment) {
        setError('Este horário já está ocupado. Por favor, escolha outro.');
        setLoading(false);
        await loadAvailableTimes(selectedDate);
        return;
      }

      const { error: insertError } = await supabase
        .from('appointments')
        .insert([
          {
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            date: selectedDate,
            time: selectedTime,
          },
        ]);

      if (insertError) throw insertError;

      setSuccess(true);
      setFirstName('');
      setLastName('');
      setSelectedDate('');
      setSelectedTime('');
      setAvailableTimes([]);

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Error creating appointment:', err);
      setError('Erro ao agendar consulta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      <section className="bg-gradient-to-br from-white to-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl text-amber-900 text-center mb-4">Agendar Consulta</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Preencha o formulário abaixo para agendar sua consulta
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {success && (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-8 flex items-start">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div className="ml-4">
                <h3 className="font-medium text-green-900 mb-1">Agendamento Confirmado!</h3>
                <p className="text-green-700">
                  Sua consulta foi agendada com sucesso. Em breve entraremos em contato para confirmar.
                </p>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Nome"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Seu nome"
                  required
                />
                <Input
                  label="Sobrenome"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Seu sobrenome"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <CalendarIcon className="inline mr-2" size={18} />
                  Data da Consulta
                </label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={minDateString}
                  required
                />
                <p className="mt-2 text-sm text-gray-500">
                  Selecione uma data a partir de amanhã
                </p>
              </div>

              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Clock className="inline mr-2" size={18} />
                    Horário Disponível
                  </label>
                  {availableTimes.length > 0 ? (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 px-4 rounded-lg border-2 transition-all font-medium ${
                            selectedTime === time
                              ? 'border-amber-800 bg-amber-800 text-white'
                              : 'border-stone-300 bg-white text-gray-700 hover:border-amber-600'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 text-center">
                      <p className="text-amber-900">
                        Não há horários disponíveis para esta data.
                        <br />
                        Por favor, escolha outra data.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {error && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4">
                  <p className="text-red-900 text-center">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading || !firstName || !lastName || !selectedDate || !selectedTime}
              >
                {loading ? 'Agendando...' : 'Confirmar Agendamento'}
              </Button>
            </form>
          </div>

          <div className="mt-8 bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
            <h3 className="font-medium text-amber-900 mb-3">Informações Importantes</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-800 mr-2">•</span>
                <span>Os agendamentos estão sujeitos à confirmação</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-800 mr-2">•</span>
                <span>Entraremos em contato via WhatsApp para confirmar sua consulta</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-800 mr-2">•</span>
                <span>Caso não possa comparecer, avise com antecedência</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-800 mr-2">•</span>
                <span>Atendimentos realizados na Clínica Escola Uninassau - Boa Viagem</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
