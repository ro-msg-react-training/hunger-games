import NoImageFound from "../resources/no_image_found.png";

export interface IRestaurant {
    id: number;
    restaurant_name: string;
    adress: string;
    opening_hour: string;
    closing_hour: string;
    orders_count: number;
    toPay:number;
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
    cart_item_id : number;
    food : FoodDemands;
    user : UserDemands;
    payed : number;
    change : number;
    receivedChange : boolean;
    auxPayedValue : string;
}

// Comanda mare de mancare
export interface IOrders {
    restaurant : RestaurantOrdersDemands;
    userOrders : IUserOrders[];
    order_id : number;
    placed_order_user : IUser;
    peopleLeftToPay : number;
    peopleLeftToReceiveChange : number;
    haveAllChangesBeenAcquitted : boolean;
    orderIsActive : boolean;
}

export interface RestaurantDemands{
    name:string;
    id:number;

}
export interface RestaurantOrdersDemands{
    name:string;
    id:number;
    toPay:number;
}

export interface FoodDemands{
    food_name:string;
    food_price:number;
    food_id:number;
}
export interface UserDemands{
    username:string;
    user_id:number;
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
    orders_count: 0,
    toPay:0,
    image: NoImageFound,
    food_list: []
}
export const emptyRestaurantOrdersDemands:RestaurantOrdersDemands={
    name:"",
    id:0,
    toPay:0
    
}
export const emptyOrder : IOrders = {
    restaurant : emptyRestaurantOrdersDemands,
    userOrders : [],
    order_id : 0,
    placed_order_user : emptyUser,
    peopleLeftToPay : 0,
    peopleLeftToReceiveChange : 0,
    haveAllChangesBeenAcquitted : false,
    orderIsActive : true
}

export const emptyRestaurantDemands:RestaurantDemands={
    name:"",
    id:0
    
}
export const emptyFoodDemands:FoodDemands={
    food_name:"",
    food_price:0,
    food_id:0,
}
export const emptyUserDemands:UserDemands={
    username:"",
    user_id:0
}
export const emptyDemand :IDemands={
    restaurant:emptyRestaurantDemands,
    food:emptyFoodDemands,
    user:emptyUserDemands,

}