import "../../../atoms/table-style.scss"

export function PendingProduction() {
  return (
    <div className="table-container">
      <header>
        <h3>Produção Pendente</h3>
      </header>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Qtd.</th>
            <th>Preço</th>
            <th>Despesa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Teste</th>
            <th>53</th>
            <th>10.99</th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}