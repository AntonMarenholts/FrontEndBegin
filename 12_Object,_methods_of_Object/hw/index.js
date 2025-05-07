const house = {
    adress: "Pfondorfer str 69",
    postIndex: 10408,
    roofColor: "red",
    wallColor: "green",
};

const {adress, roofColor} = house;
console.log(adress, roofColor);


const arr = ["apple", "orange"];

function mutate(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = "pickle";
    }
}
mutate(arr);
console.log(arr);

