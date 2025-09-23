document.getElementById('generate').addEventListener('click', function() {
    const celebrant = document.getElementById('celebrant').value.trim();
    const wisher = document.getElementById('wisher').value.trim();
    const personalWish = document.getElementById('personalWish').value.trim();
    const position = document.getElementById('position').value;

    if (celebrant && wisher) {
        const encodedCelebrant = encodeURIComponent(celebrant);
        const encodedWisher = encodeURIComponent(wisher);
        const encodedPersonalWish = encodeURIComponent(personalWish);
        const encodedPosition = encodeURIComponent(position);

        const url = `birthday.html?celebrant=${encodedCelebrant}&wisher=${encodedWisher}&personalWish=${encodedPersonalWish}&position=${encodedPosition}`;
        window.location.href = url;
    } else {
        alert('Vul zowel de naam van jarige als jouw naam in!');
    }
});
