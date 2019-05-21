const h2 = document.querySelector('h2');
const input = document.querySelector('input');
const title = h2.textContent;


document
    .querySelector('form')
    .addEventListener('submit',
        (event) => {
            event.preventDefault();
            h2.textContent = `${title}, ${input.value}`;
        });

