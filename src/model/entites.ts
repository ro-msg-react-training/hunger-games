export interface IRestaurant {
    id : number;
    restaurant_name : string;
    adress : string;
    opening_hour : string;
    closing_hour : string;
    image : string;
    food_list : IFood[];
}
export interface IFood {
    id_restaurant : number;
    id_food : number;
    food_name : string;
    ingredients : string;
    price : number;
}

export interface IUser {
    id : number,
    username : string,
    email : string,
    password : string
}
export interface IUserOrders{
    user_order_id:number,
    food:IFood,
    user:IUser
}
export interface IOrders{
    resturant:IRestaurant,
    userOrders:IUserOrders[],
    contor:number,
    order_id:number
}
