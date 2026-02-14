import { GoPencil, GoPlus, GoTrash } from "react-icons/go";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import './card-style.scss';

interface RawMaterial { name: string; amount: number; }

interface CardProps {
  title: string;
  stock: number;
  price: number;
  initialMaterials?: RawMaterial[];
  onSave?: (data: { productName: string, materials: RawMaterial[] }) => void;
}

export function Card({ title, stock, price, initialMaterials = [], onSave }: CardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [materials, setMaterials] = useState<RawMaterial[]>(initialMaterials);
  const [newMatName, setNewMatName] = useState("");
  const [newMatAmount, setNewMatAmount] = useState<number | "">("");

  const handleAddMaterial = () => {
    if (!newMatName || !newMatAmount) return;
    setMaterials([...materials, { name: newMatName, amount: Number(newMatAmount) }]);
    setNewMatName("");
    setNewMatAmount("");
  };

  const handleSave = () => {
    if (onSave) onSave({ productName: title, materials });
    setIsEditing(false);
  };

  return (
    <div className={`card-container flex flex-col ${isEditing ? 'active' : ''}`}>
      <div className="card-header">
        <h3>{title}</h3>
        <button onClick={() => setIsEditing(!isEditing)}><GoPencil /></button>
      </div>

      <div className="card-info">
        <p><strong>Estoque:</strong> {stock}</p>
        <p><strong>Preço:</strong> R$ {price}</p>
      </div>

    </div>
  )
}