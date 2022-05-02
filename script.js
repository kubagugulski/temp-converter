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
        result.textContent = ''
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
        result.textContent = ''
    }
}

const celToFar = () => {
    farenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C equals ${farenheit.toFixed(1)}°F`
    converter.value = ''
}

const farToCel = () => {
    celsius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F equals ${celsius.toFixed(1)}°C`
    converter.value = ''
}

const conversion = () => {
    if (converter.value !== '') {
        if (one.textContent === '°C') {
            celToFar()
        } else {
            farToCel()
        }
    } else {
        result.textContent = 'No data!'
    }
}

const reset = () => {
    result.textContent = ''
    converter.value = ''
}

swapBtn.addEventListener('click', swap)
convertBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)