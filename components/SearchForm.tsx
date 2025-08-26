'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchForm(){
  const r = useRouter()
  const [origin, setOrigin] = useState('POA')
  const [destination, setDestination] = useState('GRU')
  const [date, setDate] = useState('2025-09-10')

  const submit = (e:any)=>{
    e.preventDefault()
    const p = new URLSearchParams({origin,destination,date})
    r.push('/resultados?'+p.toString())
  }
  return <form onSubmit={submit} className="card">
    <div>
      <label>Origem:</label>
      <input value={origin} onChange={e=>setOrigin(e.target.value.toUpperCase())}/>
    </div>
    <div>
      <label>Destino:</label>
      <input value={destination} onChange={e=>setDestination(e.target.value.toUpperCase())}/>
    </div>
    <div>
      <label>Data:</label>
      <input type="date" value={date} onChange={e=>setDate(e.target.value)}/>
    </div>
    <button type="submit">Buscar</button>
  </form>
}
