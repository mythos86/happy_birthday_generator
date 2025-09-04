document.getElementById('generate').addEventListener('click', function() {
    const celebrant = document.getElementById('celebrant').value.trim();
    const wisher = document.getElementById('wisher').value.trim();
    const personalWish = document.getElementById('personalWish').value.trim();
    const position = document.getElementById('position').value;
    
    if (celebrant && wisher) {
        // Prepare the URL for the birthday page with query parameters
        const url = `birthday.html?celebrant=${encodeURIComponent(celebrant)}&wisher=${encodeURIComponent(wisher)}&personalWish=${encodeURIComponent(personalWish)}`;
        
        // Redirect to the new page
        window.location.href = url;
    } else {
        alert('Please enter both names!');
    }
});
