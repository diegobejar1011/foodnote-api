export interface Recipe {
    id: number;
    user_id: number;
    category_id: number;
    name: string;
    ingredients: string;
    instructions: string;
    rating: number;
}