import { GoPencil } from "react-icons/go";
import { useState } from "react";
import './card-style.scss';
import type { Product } from "../../../types/product";

interface RawMaterial { name: string; amount: number; }

interface CardProps {
  product: Product
  onEdit: (product: Product) => void
}

export function Card({ product, onEdit}: CardProps) {

  return (
    <div className={`card-container flex flex-col`}>
      <div className="card-header">
        <h3>{product.name}</h3>
        <button onClick={() => onEdit(product)}><GoPencil /></button>
      </div>

      <div className="card-info">
        <p><strong>Estoque:</strong> {product.stock}</p>
        <p><strong>Preço:</strong> R$ {product.price}</p>
      </div>

    </div>
  )
}