window.onload = function () {
    const name = prompt('Wat is uw naam?');
    if (name) {
        alert(`Je naam is: ${name}`);
        document.getElementById('antwoord').innerHTML = `Welkom beste ${name} !!!`;
    } else {
        document.getElementById('antwoord').innerHTML = `Welkom bezoeker !!!`;
    }
};
