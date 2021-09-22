const tl = gsap.timeline({ paused: true })
const btn = document.querySelector('.button')
const btn1 = document.getElementsByClassName('button')[0]
const btn2 = document.getElementsByClassName('button')[1]
const cntr = document.querySelector('.container')
const cntr2 = document.querySelector('.container2')

let page=1

tl.to(cntr, {
    clipPath: `polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)`
})
tl.to(cntr, {
    clipPath: `polygon(0 0, 100% 100%, 100% 100%, 0 0)`
}, '+=.5')
tl.to(btn1, {
    display: 'none'
})
tl.to(cntr2, {
    zIndex: 1
})


/* btn.addEventListener('click', () => {
    tl.play()
}) */

btn1.addEventListener('click', () => {
    tl.play()
})

btn2.addEventListener('click', () => {
    tl.reverse()
})
