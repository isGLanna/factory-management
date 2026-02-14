interface Props {
  name: string
}

export function UpdateProduct({ name }: Props) {
  return (
    <>
      <h3>Configurar Produto</h3>

      <div>
        <p>Materiais para fabricação de <strong>{name}</strong></p>
      </div>
    </>
  )
}