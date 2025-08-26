import SearchForm from '@/components/SearchForm'

export default function Page(){
  return <div>
    <div className="card">
      <h2>Busca de Passagens (Demo)</h2>
      <p>Resultados fictícios, já com comparação Cartão × PIX.</p>
      <SearchForm/>
    </div>
    <div className="card">
      <h2>Sites confiáveis que aceitam PIX</h2>
      <ul>
        <li>GOL — voegol.com.br</li>
        <li>Azul — voeazul.com.br</li>
        <li>LATAM — latamairlines.com/br</li>
        <li>Decolar — decolar.com</li>
      </ul>
    </div>
  </div>
}
