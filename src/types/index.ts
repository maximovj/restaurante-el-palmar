export interface MenuItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

export interface RestaurantInfo {
    address: string;
    phone: string;
    email: string;
    hours: string;
    nearby: string;
}

export interface MenuCategory {
    id: string;
    title: string;
    icon: string;         // clase FontAwesome
    items: MenuItem[];
}