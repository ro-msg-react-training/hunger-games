import NoImageFound from "../resources/no_image_found.png";

export interface IRestaurant {
    id: number;
    restaurant_name: string;
    adress: string;
    opening_hour: string;
    closing_hour: string;
    orders: number;
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
    id: number;
    username: string;
    email: string;
    password: string;
}

// Comenzile utilizatorilor individuali
export interface IUserOrders {
    user_order_id : number;
    food : IFood;
    user : IUser;
    payed : number;
    change : number;
    receivedChange : boolean;
    auxPayedValue : string;
}

// Comanda mare de mancare
export interface IOrders {
    restaurant : IRestaurant;
    userOrders : IUserOrders[];
    contor : number;
    order_id : number;
    placed_order_user : IUser;
    peopleLeftToPay : number;
    peopleLeftToReceiveChange : number;
    totalOrderCost : number;
    haveAllChangesBeenAcquitted : boolean;
    orderIsActive : boolean;
}

export interface RestaurantDemands{
    name:string;
    id:number;
}

export interface FoodDemands{
    food_name:string;
    food_price:number;
}
export interface UserDemands{
    username:string;
}

export interface IDemands{
    restaurant:RestaurantDemands;
    food:FoodDemands;
    user:UserDemands;
}

// *** Default empty 

export const emptyUser : IUser = {
    id: 0,
    username: "Default user name",
    email: "Default user email",
    password: "Default user password"
}

export const emptyRestaurant : IRestaurant = {
    id: 0,
    restaurant_name: "Default restaurant name",
    adress: "Default restaurant address",
    opening_hour: "Default restaurant opening hour",
    closing_hour: "Default restaurant closing hour",
    orders: 0,
    image: NoImageFound,
    food_list: []
}

export const emptyOrder : IOrders = {
    restaurant : emptyRestaurant,
    userOrders : [],
    contor : 0,
    order_id : 0,
    placed_order_user : emptyUser,
    peopleLeftToPay : 0,
    peopleLeftToReceiveChange : 0,
    totalOrderCost : 0,
    haveAllChangesBeenAcquitted : false,
    orderIsActive : true
}