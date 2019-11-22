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
    username : string,
    password : string
}
