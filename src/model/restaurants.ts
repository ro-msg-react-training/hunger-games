export interface IRestaurant {
    id: number;
    restaurant_name: string;
    adress: string;
    open_close_interval:TimeRanges;
    image:string;
    food_list:IFood[];
}
export interface IFood{
    id_restaurant:number;
    food_name:string;
    ingredients:string;
    price:number;
}
export interface IUser{
    username:string,
    password:string
}
