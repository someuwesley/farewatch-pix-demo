import { getMockOffers } from '@/lib/mock'
import Link from 'next/link'

export default function Page({searchParams}:{searchParams:any}){
  const {origin='',destination='',date=''} = searchParams
  const offers = getMockOffers(origin,destination,date)
  return <div>
    <div className="card">
      <h2>Resultados: {origin} → {destination} em {date}</h2>
      <Link href="/">Nova busca</Link>
    </div>
    {offers.map(o=>(
      <div key={o.id} className="card">
        <b>{o.carrier}</b> • {o.origin}→{o.destination}<br/>
        {o.departure} → {o.arrival} • {o.duration}<br/>
        Cartão: BRL {o.price} {o.pix ? `• PIX: BRL ${o.pix}`:''}<br/>
        <b>Melhor: {o.pix && o.pix < o.price ? 'PIX' : 'Cartão'}</b>
      </div>
    ))}
  </div>
}
