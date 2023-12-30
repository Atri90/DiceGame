let randomNumber1 = parseInt(Math.random()*6) + 1;
let randomNumber2 = parseInt(Math.random()*6) + 1;



const image = document.getElementsByTagName('img');

let conv1 = String(randomNumber1);
let conv2 = String(randomNumber2);

let im1 = image[0].getAttribute('src');
let im2 = image[1].getAttribute('src');

let end = im1.slice(5);

const heading = document.getElementById('banner');

if(randomNumber1==randomNumber2){
    heading.innerHTML='Draw!';
}
else if(randomNumber1>randomNumber2){
    heading.innerHTML='🚩Player A wins!';
}
else{
    heading.innerHTML='Player B wins!🚩';
}

image[0].setAttribute('src',im1.slice(0,4)+conv1+end);
image[1].setAttribute('src',im2.slice(0,4)+conv2+end);