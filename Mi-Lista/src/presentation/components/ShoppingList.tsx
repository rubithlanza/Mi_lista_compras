import ShoppingItem from './ShoppingItem';
import type { ShoppingItem as ItemType } from '../types/shoppingTypes';

interface Props {
items: ItemType[];
onTogglePurchased: (id: string) => void;
onDelete: (id: string) => void;
}

// Componente que muestra la lista de compras
export default function ShoppingList({ items, onTogglePurchased, onDelete }: Props) {
    // Si no hay items, muestra un mensaje
if (items.length === 0) {
    return (
    <p className="text-center text-muted my-3">
        <i className="bi me-2"></i>
        No hay productos en la lista.
    </p>
    );
}

//si hay productos los muestra en una lista usando el componente ShoppingItem
return (
    <ul className="list-unstyled">
    {items.map(item => (
        <ShoppingItem
        key={item.id}
        item={item}
        onTogglePurchased={onTogglePurchased}
        onDelete={onDelete}
        />
    ))}
    </ul>
);
}
