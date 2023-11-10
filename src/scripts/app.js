import '../styles/main.scss'

import Lenis from '@studio-freight/lenis'
import LocomotiveScroll from 'locomotive-scroll'

const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e.animate.value)
//   setTransform(e.animate.value)
// })

const locomotiveScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  direction: "horizontal"
});

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

// console.log('ready')

// const flowElement = document.querySelector('.flow')
// console.log(flowElement);

// document.body.style.height = flowElement.getBoundingClientRect().width - window.innerWidth * 0 + "px"

// function setTransform(value) {
//     flowElement.style.transform = `translateX(-${value}px)`
// }