
import { renderPage, generateRectDom, generateTriDom, generateCirDom } from './doms.js'

renderPage()

document.querySelector("#drop-down").addEventListener("change", (e) => {

    if (e.target.value === 'rectangle') {
        generateRectDom()
    }
    
    if (e.target.value === 'circle') {
        generateCirDom()
    }

    if (e.target.value === 'triangle') {
        generateTriDom()
    }

})

