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