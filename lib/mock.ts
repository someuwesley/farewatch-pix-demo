export function getMockOffers(origin:string, destination:string, date:string){
  return [
    {id:'1', carrier:'GOL', origin, destination, departure:date+'T08:00', arrival:date+'T10:00', duration:'2h', price:400, pix:380},
    {id:'2', carrier:'LATAM', origin, destination, departure:date+'T14:00', arrival:date+'T16:00', duration:'2h', price:420, pix:null},
    {id:'3', carrier:'AZUL', origin, destination, departure:date+'T20:00', arrival:date+'T22:00', duration:'2h', price:450, pix:435}
  ]
}
