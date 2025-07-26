import { useState } from 'react';
import AddItemForm from './presentation/components/AddItemForm';
import ShoppingList from './presentation/components/ShoppingList';
import CategoryFilter from './presentation/components/CategoryFilter';
import type { Category } from './presentation/types/shoppingTypes';
import { useShoppingList } from './presentation/hooks/useShoppingList';

//La lista de categorías disponibles para los productos
const categories: (Category | 'todos')[] = ['todos', 'alimentos', 'limpieza', 'bebidas'];

//Hook principal de la aplicación maneja la lógica de la lista de compras y su estado 
export default function App() {
  const { items, addItem, togglePurchased, deleteItem } = useShoppingList();
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  //Filtra los items según la categoría seleccionada
  const filteredItems = selectedCategory === 'todos'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="container my-5">
      <div className="container-elevated p-4">
        <h1 className="text-center text-primary mb-4">
          🛒 Mi Lista de Compras
        </h1>
        <AddItemForm
          onAdd={addItem}
          categories={categories.filter(c => c !== 'todos') as Category[]}
        />

        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <ShoppingList
          items={filteredItems}
          onTogglePurchased={togglePurchased}
          onDelete={deleteItem}
        />

        <div className="mt-3 text-end text-muted">
          <small>
            Total: {items.length} | Pendientes: {items.filter(i => !i.purchased).length}
          </small>
        </div>
      </div>
    </div>
  );
}
