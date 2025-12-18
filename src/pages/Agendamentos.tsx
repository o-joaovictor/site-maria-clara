import { useEffect, useState } from 'react'
import { Calendar, Clock } from 'lucide-react'
import Input from '../components/Input'
import Button from '../components/Button'
import { supabase } from '../lib/supabaseClient'

const AVAILABLE_TIMES = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

export default function Agendamentos() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [availableTimes, setAvailableTimes] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const minDate = new Date()
  minDate.setDate(minDate.getDate() + 1)
  const minDateString = minDate.toISOString().split('T')[0]

  // 🔹 Carrega horários quando a data muda
  useEffect(() => {
    if (!date) return

    const loadTimes = async () => {
      const { data, error } = await supabase
        .from('appointments')
        .select('time')
        .eq('date', date)

      if (error) {
        setAvailableTimes(AVAILABLE_TIMES)
        return
      }

      const bookedTimes = data.map((item) => item.time)
      const freeTimes = AVAILABLE_TIMES.filter(
        (t) => !bookedTimes.includes(t)
      )

      setAvailableTimes(freeTimes)
      setTime('')
    }

    loadTimes()
  }, [date])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!firstName || !lastName || !date || !time) {
      setError('Preencha todos os campos')
      return
    }

    setLoading(true)

    try {
      const { error } = await supabase.from('appointments').insert([
        {
          first_name: firstName,
          last_name: lastName,
          date,
          time,
        },
      ])

      if (error) throw error

      setSuccess(true)
      setFirstName('')
      setLastName('')
      setDate('')
      setTime('')
      setAvailableTimes([])
    } catch (err) {
      setError('Erro ao realizar o agendamento')
    } finally {
      setLoading(false)
    }
  }

  const isFormValid =
    firstName && lastName && date && time && !loading

  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      {/* Header */}
      <section className="py-16 text-center">
        <h1 className="font-serif text-5xl text-amber-900 mb-2">
          Agendar Consulta
        </h1>
        <p className="text-gray-600">
          Preencha o formulário abaixo para agendar sua consulta
        </p>
      </section>

      {/* Form */}
      <section className="pb-16">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            {success && (
              <div className="bg-green-50 border border-green-500 text-green-800 p-4 rounded-lg text-center">
                Agendamento realizado com sucesso!
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-500 text-red-800 p-4 rounded-lg text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Nome"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Seu nome"
                />
                <Input
                  label="Sobrenome"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Seu sobrenome"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  <Calendar className="inline mr-2" size={16} />
                  Data da Consulta
                </label>
                <Input
                  type="date"
                  value={date}
                  min={minDateString}
                  onChange={(e) => setDate(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Selecione uma data a partir de amanhã
                </p>
              </div>

              {date && (
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">
                    <Clock className="inline mr-2" size={16} />
                    Horário Disponível
                  </label>

                  <div className="grid grid-cols-4 gap-3">
                    {availableTimes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        className={`py-2 rounded-lg border font-medium transition ${
                          time === t
                            ? 'bg-amber-800 text-white border-amber-800'
                            : 'bg-white border-gray-300 text-gray-700 hover:border-amber-600'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={!isFormValid}
              >
                {loading ? 'Agendando...' : 'Confirmar Agendamento'}
              </Button>
            </form>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-medium text-amber-900 mb-3">
              Informações Importantes
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Os agendamentos estão sujeitos à confirmação</li>
              <li>• Entraremos em contato via WhatsApp</li>
              <li>• Caso não possa comparecer, avise com antecedência</li>
              <li>• Clínica Escola Uninassau – Boa Viagem</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
