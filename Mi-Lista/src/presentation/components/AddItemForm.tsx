import { useState } from 'react';
import type { ShoppingItem, Category } from '../types/shoppingTypes';

interface AddItemFormProps {
onAdd: (item: Omit<ShoppingItem, 'id' | 'purchased' | 'createdAt'>) => void;
categories: Category[];
}

export default function AddItemForm({ onAdd, categories }: AddItemFormProps) {
const [name, setName] = useState('');
const [quantity, setQuantity] = useState(1);
const [category, setCategory] = useState(categories[0]); // Asigna la primera categoría por defecto


// Maneja el envío del formulario y evita agregar ítems vacíos
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name, quantity, category });
    setName('');
    setQuantity(1);
};

return (
    /*Lay entrada para el nombre del producto y la cantidad*/
    <form onSubmit={handleSubmit} className="mb-4">
    <div className="row g-2 align-items-center mb-3">
        <div className="col-sm">
        <input
            type="text"
            className="form-control"
            placeholder="Producto"
            value={name}
            onChange={e => setName(e.target.value)}
            required
        />
        </div>
        <div className="col-auto">
        <input
            type="number"
            min="1"
            className="form-control"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
        />
        </div>
    </div>
{/*Aqui selecionada las categorias */}
    <div className="row g-2 align-items-center">
        <div className="col-sm">
        <select
            className="form-select"
            value={category}
            onChange={e => setCategory(e.target.value as Category)}
        >
            {categories.map(cat => (
            <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
            ))}
        </select>
        </div>
{/*Boton de agregar */}
        <div className="col-auto">
        <button type="submit" className="btn-main d-flex align-items-center gap-2">
            <i className="bi bi-plus-circle"></i> Agregar
        </button>
        </div>
    </div>
    </form>
);
}
