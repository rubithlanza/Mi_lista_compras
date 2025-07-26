import type { Category } from "../types/shoppingTypes";

// definimos las propiedades del componente
interface Props{
    categories: (Category | 'todos')[];
    selected: string;
    onSelect: (cat: string) => void;
}

// Componente de filtro de categorías
export default function Categories({categories, selected, onSelect}: Props) {
    return (
        <div className="mb-3">
            {/* Aquí se renderiza el select para filtrar por categoría */}
            <select
            className="form-select"
            value={selected}
            onChange={(e) => onSelect(e.target.value)}
            >
            {categories.map(cat => (
                <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
            ))}
            </select>
        </div>
    );
}