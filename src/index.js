import { registerImage } from './lazy';


const maxnum = 123;
const minnum = 1;

let mounNode = document.getElementById('images');
const buttonCreate = document.getElementById('add');
const buttonClean = document.getElementById('clean');
const buttonOrder = document.getElementById('order');

const random = () => Math.floor(Math.random() * (maxnum - minnum) +minnum);

const addImageNode = () => {
    const image = createImageNode();
    mounNode.appendChild(image);
    registerImage(image);
    //console.log('Total Imágenes: '+imagesDOM);
}

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'p-4';

    const image = document.createElement('img');
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    image.className = 'rounded mx-auto bg-gray-200 transform hover:scale-125';
    image.width = '320';

    container.appendChild(image);

    return container;
}

const deleteImageNode = () => {
    const images = mounNode;
    images.remove();
    mounNode = document.createElement('div');
    mounNode.id = 'images';

    const container = document.querySelector('div');
    container.appendChild(mounNode);

}

const orderImage = () => {
    mounNode.className = "grid grid-cols-4";
}

buttonCreate.addEventListener('click', addImageNode);
buttonClean.addEventListener('click',deleteImageNode); 
buttonOrder.addEventListener('click',orderImage);








