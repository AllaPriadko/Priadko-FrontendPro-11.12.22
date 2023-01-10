const image = document.body.getElementsByClassName('img_item')[0];

let randomNum = randomImage();
image.src = `./images/${randomNum}.jpg`;
function randomImage() {
    let random = Math.ceil(Math.random() * 9);
    return random
}
randomImage()
// console.log(randomImage())

// Другий спосіб

// const imageMotor = [
//     './images/1.jpg',
//     './images/2.jpg',
//     './images/3.jpg',
//     './images/4.jpg',
//     './images/5.jpg',
//     './images/6.jpg',
//     './images/7.jpg',
//     './images/8.jpg',
//     './images/9.jpg',

// ]
// let randomNum = randomImage();
// image.src = `${randomNum}`;
// function randomImage() {

//     let random = Math.floor(Math.random() * imageMotor.length);
//     return imageMotor[random]
// }
// randomImage(imageMotor)
// console.log(randomImage())