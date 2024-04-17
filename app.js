const adviceRequestBtn = document.querySelector('.advice-request')
const adviceNumber = document.querySelector('.advice-number')
const adviceText = document.querySelector('.advice-text')

adviceRequestBtn.addEventListener('click', requestAdvice)

function requestAdvice() {
    console.log('hi');
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            adviceNumber.innerHTML = `<p>${'ADVICE' + ' ' + '#' + data.slip.id}</p>`
            adviceText.innerHTML = `<p>${data.slip.advice}</p>`
        }).catch(err => console.log(err))
}