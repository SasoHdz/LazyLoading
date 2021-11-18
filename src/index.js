import { registerImage } from './lazy';


const maxnum = 123;
const minnum = 1;
const mounNode = document.getElementById('images');
const button = document.getElementById('add');

const random = () => Math.floor(Math.random() * (maxnum - minnum) +minnum);

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'p-4';

    const image = document.createElement('img');
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    image.className = 'mx-auto';
    image.width = '320';

    container.appendChild(image);

    return container;
}


button.addEventListener('click', () => {
    const image = createImageNode();
    mounNode.appendChild(image);
    registerImage(image);
});






