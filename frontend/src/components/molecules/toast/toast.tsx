
class Toast {
  message: string
  status: number
  category: "Success" | "Error" | "Warning"

  constructor(message: string, status: number, category: "Success" | "Error" | "Warning") {
    this.message = message || "Erro inexperado. Tente novamente mais tarde."
    this.status = status
    this.category = category || "Error"

    this.show()
  }

  show() {
    return (
      <div className={`toast-content ${this.category.toLowerCase()}`}>
        <hr></hr>
        <span className="toast-message">{this.message}</span>
      </div>
    )
  }
}