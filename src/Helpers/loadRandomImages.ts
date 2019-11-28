import food2 from "../resources/food2.jpg";
import food3 from "../resources/food3.jpg";
import food4 from "../resources/food4.jpg";
import dish1 from "../resources/bigMac1.jpg";
import dish2 from "../resources/pizza1.jpg";
import dish3 from "../resources/salad1.jpg";
import noImage from "../resources/no_image_found.png";

export let getRandomImage = (destination: string) => {

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let image;

    if (destination === "restaurants") {
        switch (randomNumber) {
            case 1: {
                image = food2;
                break;
            }
            case 2: {
                image = food3;
                break;
            }
            case 3: {
                image = food4;
                break;
            }
            default: {
                image = food2;
                break;
            }
        }
    } else if(destination === "foods") {
        switch (randomNumber) {
            case 1: {
                image = dish1;
                break;
            }
            case 2: {
                image = dish2;
                break;
            }
            case 3: {
                image = dish3;
                break;
            }
            default: {
                image = dish1;
                break;
            }
        }
    } else {
        image = noImage;
    }

    return image;
};