import './src/styles/global.css'

// Calculate the actual size of the 100vh, including bottom bars etc. on mob devices
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
if (typeof window !== 'undefined') {

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--100vh', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight, {passive: true})
    appHeight()

}