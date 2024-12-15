export interface Product {
    _id: string;
    brand: string;
    model: string;
    taste: string;
    puffs: string,
    description: string;
    image: string;
    price: number;
    available: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export type CreateProduct = Omit<Product, "_id">;
export type UpdateProduct = Partial<CreateProduct>;