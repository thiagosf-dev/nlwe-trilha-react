import logo from './assets/logo.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'
import "./index.css"

export function App() {
  return (
    <div className={"mx-auto max-w-6xl my-12 space-y-6"}>
      <img src={logo} alt={"Logo da aplicação"} />

      <form>
        <input
          className={"w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"}
          type="text"
          placeholder={"Busque em suas notas"}
        />
      </form>

      <div className={"h-px bg-slate-700"} />

      <div className={"grid grid-cols-3 gap-6 auto-rows-[250px]"}>
        <NewNoteCard />
        <NoteCard note={{ content: "Card 1", date: new Date() }} />
      </div>
    </div>
  )
}
