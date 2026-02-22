import './Clock.css'
import { format } from 'date-fns'

function App() {
  return (
    <main className="clock-page">
      <section className="clock-card">
        <h1 className="clock-title">Color Clock</h1>
        <p className="clock-time">{format(new Date(), 'PPpp')}</p>
      </section>
    </main>
  )
}

export default App
