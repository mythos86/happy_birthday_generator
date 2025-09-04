document.getElementById('generate').addEventListener('click', function() {
    const celebrant = document.getElementById('celebrant').value.trim();
    const wisher = document.getElementById('wisher').value.trim();
    const personalWish = document.getElementById('personalWish').value.trim();
    const position = document.getElementById('position').value;

    if (celebrant && wisher) {
        const url = `birthday.html?celebrant=${encodeURIComponent(celebrant)}&wisher=${encodeURIComponent(wisher)}&personalWish=${encodeURIComponent(personalWish)}&position=${encodeURIComponent(position)}`;
        window.location.href = url;
    } else {
        alert('Vul zowel de naam van jarige als jouw naam in!');
    }
});
