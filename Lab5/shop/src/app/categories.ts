export interface Category {
    id: number;
    name: string;
    image: string;
}

export const categories = [
    {
        id: 1,
        name: 'Phones',
        image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png'
    },
    {
        id: 2,
        name: 'Computers',
        image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/2e1540b8-0546-4741-acc4-447c0df3a981-Computer.png'
    },
    {
        id: 3,
        name: 'Clothes',
        image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/32ca8f3c-e27d-4bf4-a6cd-0f7ca16b9586-Clothes.png'
    },
    {
        id: 4,
        name: 'Grocery',
        image: 'https://resources.cdn-kaspi.kz/shop/static/main-nav/d9057c79-2b13-4bf7-ab6a-3458d3cf31ea-Grocery.png'
    }
]