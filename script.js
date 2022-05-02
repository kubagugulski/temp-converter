const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convertBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const swapBtn = document.querySelector('.swap')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
let farenheit
let celsius

const swap = () => {
    if (one.textContent == '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
    } else {
    one.textContent = '°C'
    two.textContent = '°F'
}
}

const farToCel = () => {
    farenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C equals ${farenheit.toFixed(1)}°F`
}

const celToFar = () => {
    celsius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F equals ${celsius.toFixed(1)}°C`
}

swapBtn.addEventListener('click', swap)
convertBtn.addEventListener('click', farToCel)
// convertBtn.addEventListener('click', celToFar)