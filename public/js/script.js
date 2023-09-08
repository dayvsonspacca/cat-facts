

async function getRandomFact() {
    const lang = document.getElementById('lang').value;
    const randomizeButton = document.getElementById('randomize')

    randomizeButton.disabled = true;

    const response = await fetch("https://meowfacts.herokuapp.com/?lang=" + lang, { method: 'GET' });
    const factResponse = await response.json();
    const fact = factResponse.data[0];

    const factsContainer = document.getElementById('facts');

    let divFact = document.createElement('div');

    divFact.className = 'fact';
    divFact.innerText = fact

    factsContainer.appendChild(divFact)

    setTimeout(() => {
        randomizeButton.disabled = false;
    }, 1000)
}
