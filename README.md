# 🦷 **Site – Maria Clara Rolim | Cirurgiã-Dentista em Formação**

Site profissional desenvolvido para **Maria Clara Rolim**, estudante de Odontologia (7º período), com foco em apresentar seus serviços e oferecer **agendamento online** para consultas.

Construído em **React + Vite**, com **Supabase** para armazenamento seguro dos agendamentos e deploy na **Vercel**.

---

## 🚀 **Tecnologias Utilizadas**

- **React + TypeScript**
- **Vite**
- **TailwindCSS**
- **Supabase (Database + API)**
- **Vercel (Deploy)**

---

## 📋 **Funcionalidades**

### 🔹 **Páginas**
- **Home** – apresentação com foto e chamada principal  
- **Sobre** – formação, história e missão  
- **Serviços** – profilaxia, raspagem, restauração, clareamento, etc.  
- **Agendamentos** – formulário para marcar consulta  
- **Contato** – redes sociais e informações básicas  

---

## 📅 **Sistema de Agendamento**

- Registro de **nome** e **sobrenome**  
- Seleção de **data**  
- Seleção de **horário disponível**  
- Verificação automática de horário já marcado  
- Envio direto ao banco **Supabase**

Tabela utilizada:

| Campo       | Tipo        |
|-------------|-------------|
| id          | uuid        |
| first_name  | text        |
| last_name   | text        |
| date        | date        |
| time        | text        |
| created_at  | timestamptz |

---

## 🛠️ **Como rodar localmente**

```bash
git clone https://github.com/o-joaovictor/site-maria-clara.git
cd site-maria-clara
npm install
npm run dev
