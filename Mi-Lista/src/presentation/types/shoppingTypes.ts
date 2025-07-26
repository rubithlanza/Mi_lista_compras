// Definición de tipos para la aplicación de lista de compras
export type Category = 'alimentos' | 'limpieza' | 'bebidas';

//Definición de tipo para los ítems de la lista de compras
export interface ShoppingItem{
    id: string;
    name: string;
    quantity: number;
    category: Category;
    purchased: boolean;
    createdAt: Date;
}