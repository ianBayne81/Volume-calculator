
// change page when user selects drop down box to choose method of calculation

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

