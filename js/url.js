
const regLink = document.querySelectorAll('.reg_link');
const regUrl = "https://reg.idec.io/";
regLink.forEach(link => {
    link.setAttribute('href', regUrl);
});