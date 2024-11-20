const RandomNumberGeneratorForRed = () => Math.floor(Math.random() * 256);
const RandomNumberGeneratorForGreen = () => Math.floor(Math.random() * 256);
const RandomNumberGeneratorForBlue = () => Math.floor(Math.random() * 256);

const main = document.querySelector('.container');
main.addEventListener('click', (e) => {
    const selectedItem = e.target;
    const red = RandomNumberGeneratorForRed();
    const green = RandomNumberGeneratorForGreen();
    const blue = RandomNumberGeneratorForBlue();
    selectedItem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
