const inputsEl = document.querySelector('#inputs')

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

const calculateButton = document.createElement('button')
calculateButton.textContent = 'CALCULATE'

const refreshButton = document.createElement('button')
refreshButton.textContent = 'Refresh Page'

const renderPage = () => {
    document.querySelector('#drop-down').value = 'garden-shape'
    inputsEl.innerHTML = ''
    const title = document.createElement('h1')
    const titleB = document.createElement('h1')
    title.textContent = 'How much'
    titleB.textContent = 'will you need?'
    inputsEl.appendChild(title)
    inputsEl.appendChild(titleB)
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

const generateRectDom = () => {
    inputsEl.innerHTML = ''

    inputsEl.appendChild(lengthEl)
    inputsEl.appendChild(widthEl)
    inputsEl.appendChild(depthEl)
    inputsEl.appendChild(calculateButton)
    inputsEl.appendChild(volumeEl)
    inputsEl.appendChild(refreshButton)

    calculateButton.addEventListener("click", (e) => {
    rectVolume()
    })

    refreshButton.addEventListener("click", (e) => {
    lengthEl.value = ''
    widthEl.value = ''
    depthEl.value = ''
    volumeEl.value = ''
    renderPage()
    })
}

const generateTriDom = () => {
    inputsEl.innerHTML = ''

    inputsEl.appendChild(lengthEl)
    inputsEl.appendChild(widthEl)
    inputsEl.appendChild(depthEl)
    inputsEl.appendChild(calculateButton)
    inputsEl.appendChild(volumeEl)
    inputsEl.appendChild(refreshButton)

    calculateButton.addEventListener("click", (e) => {
    triVolume()
    })

    refreshButton.addEventListener("click", (e) => {
    lengthEl.value = ''
    widthEl.value = ''
    depthEl.value = ''
    volumeEl.value = ''  
    renderPage()
    })
}

const generateCirDom = () => {
    inputsEl.innerHTML = ''

    inputsEl.appendChild(radiusEl)
    inputsEl.appendChild(depthEl)
    inputsEl.appendChild(calculateButton)
    inputsEl.appendChild(volumeEl)
    inputsEl.appendChild(refreshButton)

    calculateButton.addEventListener("click", (e) => {
    cirVolume()
    })

    refreshButton.addEventListener("click", (e) => {   
    radiusEl.value = ''
    depthEl.value = ''
    volumeEl.value = ''
    renderPage()
    })
}

