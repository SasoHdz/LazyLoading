
const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const accion = (entry) => {
    const container = entry.target;
    const image = container.firstChild;

    image.src = image.dataset.src;

    observer.unobserve(container);

}
const observer = new IntersectionObserver((entries)=> {
    entries
        .filter(isIntersecting)
        .forEach(accion);
});

export const registerImage = image => {
    //Observa esta imagen
    observer.observe(image);
}