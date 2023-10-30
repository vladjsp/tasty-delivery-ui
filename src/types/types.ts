export type TMenu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
}[];

export type TProduct = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
};

export type TCartItem = {
    id: string;
    title: string;
    img?: string;
    price: number;
    optionTitle?: string;
    quantity: number;
};

export type TOrder = {
    id: string;
    userEmail: string;
    price: number;
    products: TCartItem[];
    status: string;
    createdAt: Date;
    intent_id?: String;
};
