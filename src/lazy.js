
let imagesLoading = 0;
let imagesDOM = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const accion = (entry) => {
    const container = entry.target;
    const image = container.firstChild;
    image.src = image.dataset.src;

    imagesLoading++;
    console.log('📌 Total Imágenes: '+imagesDOM);
    console.log('👀 Imágenes cargadas: '+imagesLoading);
    console.log('---------------------------------');

    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries)=> {
    entries
        .filter(isIntersecting)
        .forEach(accion);
});

export const registerImage = image => {
    //Observa esta imagen
    imagesDOM++;
    observer.observe(image);
    console.log('📌 Total Imágenes: '+imagesDOM);
    console.log('👀 Imágenes cargadas: '+imagesLoading);
    console.log('---------------------------------');
}