import type { ShoppingItem } from '../types/shoppingTypes';

//Definimos los props que recibe el componente
interface Props {
item: ShoppingItem;
onTogglePurchased: (id: string) => void;
onDelete: (id: string) => void;
}

//Componente que representa un ítem de la lista de compras
export default function ShoppingItem({ item, onTogglePurchased, onDelete }: Props) {
return (
    <li className="shopping-card">
    <div>
        <strong className={item.purchased ? 'item-purchased' : ''}>
        {item.name}
        </strong>{' '}
        <span className="text-muted">
        ({item.quantity}) - {item.category}
        </span>
    </div>

    <div className="d-flex gap-2">
        {/* Botones para marcar como comprado/no comprado y eliminar */}
        <button
        className={`btn btn-sm ${item.purchased ? 'btn-secondary' : 'btn-outline-primary'}`}
        onClick={() => onTogglePurchased(item.id)}
        >
        <i className={`bi ${item.purchased ? 'bi-x-circle' : 'bi-check-circle'}`}></i>
        </button>

        <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => onDelete(item.id)}
        >
        <i className="bi bi-trash"></i>
        </button>
    </div>
    </li>
);
}
