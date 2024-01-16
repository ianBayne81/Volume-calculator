// Target the following elements

const inputsEl = document.querySelector('#inputs')

const buttonsEl = document.querySelector('#buttons')

// create inputs within the respective elements
const lengthEl = document.createElement('input')
lengthEl.placeholder = 'Length (M)'
lengthEl.setAttribute("type","value")

const widthEl = document.createElement('input')
widthEl.placeholder = 'Width (M)'
widthEl.setAttribute("type", "value")

const depthEl = document.createElement('input')
depthEl.placeholder = 'Depth (CM)'
depthEl.setAttribute("type", "value")

const volumeEl = document.createElement('input')
volumeEl.placeholder = 'Estimated Cubic Meters'
volumeEl.setAttribute("type", "value")

const radiusEl = document.createElement('input')
radiusEl.placeholder = 'Radius (M)'
radiusEl.setAttribute("type", "value")

// create buttons within the respective elements
const calculateButton = document.createElement('button')
calculateButton.textContent = 'Calculate'
calculateButton.setAttribute("type", "submit")

const clearButton = document.createElement('button')
clearButton.textContent = 'Clear'
clearButton.setAttribute("type", "submit")

const homeButton = document.createElement('button')
homeButton.textContent = 'Home'
homeButton.setAttribute("type", "submit")

const renderPage = () => {
    document.querySelector('#drop-down').value = 'garden-shape'
    inputsEl.innerHTML = ''
    const title = document.createElement('h1')
    const titleB = document.createElement('h1')
    const titleC = document.createElement('h1')
    title.textContent = 'How much'
    titleB.textContent = 'will you'
    titleC.textContent = 'need ?'
    inputsEl.appendChild(title)
    inputsEl.appendChild(titleB)
    inputsEl.appendChild(titleC)
}

const rectVolume = () => {
    const recVol = lengthEl.value * widthEl.value * depthEl.value / 100
    return  volumeEl.value = recVol.toFixed(2)
}

const triVolume = () => {
    const triArea = .5 * lengthEl.value * widthEl.value
    const triVol = triArea * depthEl.value / 100 
    return volumeEl.value = triVol.toFixed(2)
}

const cirVolume = () => {
    const pi = 3.14
    const cirArea = pi * radiusEl.value * radiusEl.value
    const cirVol = cirArea * depthEl.value / 100 // due to using centimeters as the value for depth
    return volumeEl.value = cirVol.toFixed(2)
}

const clear = () => {
    lengthEl.value = ''
    widthEl.value = ''
    radiusEl.value = ''
    depthEl.value = ''
    volumeEl.value = ''
}

const generateRectDom = () => {
    inputsEl.innerHTML = ''

    inputsEl.appendChild(lengthEl)
    inputsEl.appendChild(widthEl)
    inputsEl.appendChild(depthEl)
    inputsEl.appendChild(volumeEl)
    buttonsEl.appendChild(calculateButton)
    buttonsEl.appendChild(clearButton)
    buttonsEl.appendChild(homeButton)

    clear()

    calculateButton.addEventListener("click", (e) => {
    rectVolume()
    })

    clearButton.addEventListener("click", (e) => {
        clear()
        })

    homeButton.addEventListener("click", (e) => {
        location.assign('/index.html')
    })
}

const generateTriDom = () => {
    inputsEl.innerHTML = ''

    inputsEl.appendChild(lengthEl)
    inputsEl.appendChild(widthEl)
    inputsEl.appendChild(depthEl)
    inputsEl.appendChild(volumeEl)
    buttonsEl.appendChild(calculateButton)
    buttonsEl.appendChild(clearButton)
    buttonsEl.appendChild(homeButton)

    clear()

    calculateButton.addEventListener("click", (e) => {
    triVolume()
    })

    clearButton.addEventListener("click", (e) => {
        clear()
        })

    homeButton.addEventListener("click", (e) => {
        location.assign('/index.html')
    })
}

const generateCirDom = () => {
    inputsEl.innerHTML = ''

    inputsEl.appendChild(radiusEl)
    inputsEl.appendChild(depthEl)
    inputsEl.appendChild(volumeEl)
    buttonsEl.appendChild(calculateButton)
    buttonsEl.appendChild(clearButton)
    buttonsEl.appendChild(homeButton)

    clear()

    calculateButton.addEventListener("click", (e) => {
    cirVolume()
    })

    clearButton.addEventListener("click", (e) => {
        clear()
        })

    homeButton.addEventListener("click", (e) => {   
        location.assign('/index.html')
    })
}

export { renderPage, generateRectDom, generateTriDom, generateCirDom }