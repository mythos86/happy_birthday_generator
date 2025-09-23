window.addEventListener('load', () => {
    const container = document.createElement('section');
    container.classList.add('firework-container');
    container.setAttribute('aria-label', 'Vuurwerk animatie');
    document.body.appendChild(container);

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');

        // Willekeurige positie en kleur
        firework.style.left = Math.random() * 90 + '%';
        firework.style.backgroundColor = ['red','orange','yellow','green','blue','purple'][Math.floor(Math.random()*6)];

        container.appendChild(firework);

        // Verwijder na animatie
        setTimeout(() => firework.remove(), 2000);
    }

    // Continu vuurwerk elke 400ms
    setInterval(createFirework, 400);
});
