var lastName = 'Miguel';
lastName = 'Angel';
console.log(lastName);

let fruit = 'Watermelon';
fruit = "Guava";
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Watermelon'; //funcion scope
        let fruit2 = 'Guava'; //block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();