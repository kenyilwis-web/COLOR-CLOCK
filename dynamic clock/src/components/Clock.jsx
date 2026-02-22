import { useEffect, useState } from 'react'
import { format } from 'date-fns'

function Clock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="clock-card">
      <h1>Productivity Clock</h1>
      <p className="clock-time">{format(now, 'hh:mm:ss a')}</p>
      <p className="clock-date">{format(now, 'EEEE, MMMM d, yyyy')}</p>
    </section>
  )
}

export default Clock
