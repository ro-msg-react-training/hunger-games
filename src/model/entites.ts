export interface IRestaurant {
    id: number;
    restaurant_name: string;
    adress: string;
    opening_hour: string;
    closing_hour: string;
    image: string;
    food_list: IFood[];
}
export interface IFood {
    id_restaurant: number;
    id_food: number;
    food_name: string;
    ingredients: string;
    price: number;
}

export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string
}

// Comenzile utilizatorilor individuali
export interface IUserOrders {
    user_order_id : number,
    food : IFood,
    user : IUser
}

// Comanda mare de mancare
export interface IOrders {
    restaurant : IRestaurant,
    userOrders : IUserOrders[],
    contor : number,
    order_id : number,
    placed_order_user : IUser
}
