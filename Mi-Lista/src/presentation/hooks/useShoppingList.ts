import { useState, useEffect, useRef } from 'react';
import type { ShoppingItem } from '../types/shoppingTypes';

const STORAGE_KEY = 'shoppingList';

export function useShoppingList() {
const [items, setItems] = useState<ShoppingItem[]>([]);
  const hasLoaded = useRef(false);  // Evita cargar varias veces desde localStorage

  // Cargar datos del localStorage una sola vez
useEffect(() => {
    if (!hasLoaded.current) {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
          //Convertir los datos almacenados a un array de ShoppingItem
        const parsed: ShoppingItem[] = JSON.parse(stored);
        setItems(
            parsed.map(item => ({
            ...item,
            createdAt: new Date(item.createdAt)
            }))
    );
        } catch (e) {
        console.error("Error al cargar datos del LocalStorage:", e);
        }
    }
    hasLoaded.current = true;
    }
}, []);

  // Guardar datos en localStorage cuando cambian
useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}, [items]);

  // Agregar nuevo ítem
const addItem = (item: Omit<ShoppingItem, 'id' | 'purchased' | 'createdAt'>) => {
    const newItem: ShoppingItem = {
    ...item,
    id: crypto.randomUUID(),
    purchased: false,
    createdAt: new Date(),
    };
    setItems(prev => [...prev, newItem]);
};

  // Lo marca como comprado o no
const togglePurchased = (id: string) => {
    setItems(prev =>
    prev.map(item =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
    )
    );
};

  // Eliminar producto
const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
};

return { items, addItem, togglePurchased, deleteItem };
}
