

async function getRandomFact() {
    const lang = document.getElementById('lang').value;
    const randomizeButton = document.getElementById('randomize')

    randomizeButton.disabled = true;

    const response = await fetch("https://catfact.ninja/fact");
    const factResponse = await response.json();
    const fact = factResponse.fact;

    const factsContainer = document.getElementById('facts', { method: 'GET', mode: 'no-cors' });

    let divFact = document.createElement('div');

    divFact.className = 'fact';
    divFact.innerText = fact

    factsContainer.appendChild(divFact)

    setTimeout(() => {
        randomizeButton.disabled = false;
    }, 1000)
}
