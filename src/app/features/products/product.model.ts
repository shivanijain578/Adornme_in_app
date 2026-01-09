export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    stock: number;
    categoryId: number;
    images: string[];
}

export interface ProductCreateRequest {
    name: string;
    price: number;
    stock: number;
    categoryId: number;
    description?: string;
    images?: string[];
}
