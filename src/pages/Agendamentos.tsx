import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import { supabase } from '../lib/supabaseClient';

const AVAILABLE_TIMES = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

export default function Agendamentos() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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

      const bookedTimes = data?.map(item => item.time) || [];
      const available = AVAILABLE_TIMES.filter(time => !bookedTimes.includes(time));

      setAvailableTimes(available);
      setSelectedTime('');
    } catch (err) {
      console.error('Erro ao carregar horários:', err);
      setAvailableTimes(AVAILABLE_TIMES);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !selectedDate ||
      !selectedTime
    ) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);

    try {
      const { data: existing } = await supabase
        .from('appointments')
        .select('id')
        .eq('date', selectedDate)
        .eq('time', selectedTime)
        .maybeSingle();

      if (existing) {
        setError('Este horário já está ocupado. Escolha outro.');
        setLoading(false);
        await loadAvailableTimes(selectedDate);
        return;
      }

      const { error } = await supabase.from('appointments').insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          date: selectedDate,
          time: selectedTime,
        },
      ]);

      if (error) throw error;

      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setSelectedDate('');
      setSelectedTime('');
      setAvailableTimes([]);

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setError('Erro ao agendar consulta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      <section className="bg-gradient-to-br from-white to-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl text-amber-900 mb-4">
            Agendar Consulta
          </h1>
          <p className="text-xl text-gray-600">
            Preencha o formulário abaixo para agendar sua consulta
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">

          {success && (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-8 flex">
              <CheckCircle className="text-green-600 mr-4" />
              <div>
                <h3 className="font-medium text-green-900">
                  Agendamento confirmado!
                </h3>
                <p className="text-green-700">
                  Em breve entraremos em contato.
                </p>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Nome" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <Input label="Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <Input label="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <CalendarIcon className="inline mr-2" size={18} />
                  Data da Consulta
                </label>
                <Input
                  type="date"
                  value={selectedDate}
                  min={minDateString}
                  onChange={e => setSelectedDate(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Selecione uma data a partir de amanhã
                </p>
              </div>

              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium mb-3">
                    <Clock className="inline mr-2" size={18} />
                    Horário Disponível
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {availableTimes.map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 rounded-lg border-2 font-medium ${
                          selectedTime === time
                            ? 'bg-amber-800 text-white border-amber-800'
                            : 'border-stone-300 hover:border-amber-600'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border-2 border-red-500 p-4 rounded-lg text-center text-red-800">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={
                  loading ||
                  !firstName ||
                  !lastName ||
                  !email ||
                  !phone ||
                  !selectedDate ||
                  !selectedTime
                }
              >
                {loading ? 'Agendando...' : 'Confirmar Agendamento'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
