const buttons = document.querySelectorAll('.btn')
const input = document.querySelector('.search')
const containerBoard = document.querySelector('.containerOne')

const delete_btn = document.querySelector('.delete')
const shift_btn = document.querySelector('.shift')
const space_btn = document.querySelector('.space')
const esc_btn = document.querySelector('.esc');

let chars = []

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        input.value += btn.innerText
        chars = input.value.split('')
    })
})

delete_btn.addEventListener('click', () => {
    chars.pop()
    input.value = chars.join('')
})

space_btn.addEventListener('click', () => {
    chars.push(' ')
    input.value = chars.join('')
})

shift_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper')
    })
})

esc_btn.addEventListener('click', event => {
    // event.preventDefault();
    // input.value = ""
    containerBoard.style.display = 'none'
})