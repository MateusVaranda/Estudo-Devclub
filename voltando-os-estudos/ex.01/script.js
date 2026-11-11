const inputText = document.getElementById('inputText');
const btn = document.getElementById('btn');
const container = document.querySelector('.container');


btn.addEventListener('click', () => {
    const text = inputText.value;
    console.log(text);
});