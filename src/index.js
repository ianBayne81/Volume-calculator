// After 14s of page opening to allow for animation duration / redirects to site.html page

const loadApp = () => {
    location.assign('/site.html')
}

setTimeout(loadApp, 14000)

// button to skip the 14s animation and go straight to the app

const skipButtonDiv = document.querySelector('#skip-div')
const skipButton = document.createElement('button')
skipButton.textContent = 'Skip'
skipButton.setAttribute("type", "submit")

skipButton.id = 'skip-button'
skipButtonDiv.appendChild(skipButton)

skipButton.addEventListener("click", (e) => {
    location.assign('/site.html')
    })

// animate rotation of wheels during animation

const animateWheels = gsap.timeline({ease:Linear.easeNone, repeat: 0 })
animateWheels.to(".wheels", {
    rotation: "-360",
    transformOrigin: "center",
    duration: 5,
})
animateWheels.to(".wheels", {
    rotation: "+360",
    duration: 5, 
    delay: 6,
}).pause()

// animate truck moving in animation

const animateTruck = gsap.timeline({ease:Linear.easeNone, repeat: 0})
animateTruck.fromTo(".travel", {
    x: "470",
}, {
    x: "0",
    duration: 5,
})
animateTruck.to(".travel", {
    x: "470",
    duration: 5,
    delay: 6,
}).pause()

// animate tipping function of animation

const animateTip = gsap.timeline({ease: Linear.easeNone, repeat: 0})
animateTip.to(".tip-tray", {
    rotation: "-30",
    duration: 4,
    delay: 5,
})
animateTip.to(".tip-tray", {
    rotation: "0",
    duration: 2,
    
}).pause()

// animate the color of the dirt lines from back of truck to pile of dirt on ground

const animateDirtLines = gsap.timeline({ease: Linear.easeNone, repeat: 0})
animateDirtLines.to(".dirt-lines", {
    stroke: "brown",
    delay: 5,
    duration: .1,
})
animateDirtLines.to(".dirt-lines", {
    stroke: "transparent",
    delay: 4,
    duration: .1,
}).pause()

// animate dirtpile in the truck decreasing in size when tipping

const animateTruckPile = gsap.timeline({ease: Linear.easeNone, repeat: 0})
animateTruckPile.fromTo("#truck-dirt", {
    attr: {d: "m 225 175, C 195 60, 75 60, 50 175"}
}, {attr: {d: "m 225 175, C 195 172, 75 172, 50 175"},
    delay: 5,
    duration: 6,
}).pause()

// animate dirtpile on the ground increasing in size
    
const animateGroundPile = gsap.timeline({ease: Linear.easeNone, repeat: 0})
animateGroundPile.fromTo("#ground-pile", {
    attr: {d: "m 50 245, C 50 245, 20 245, 5 245"},
    stroke: "transparent",
    fill: "transparent",
}, {attr: {d: "m 60 245, C 50 150, 20 150, 5 245"},
    stroke: "brown",
    fill: "brown",
    delay: 5,
    duration: 6,
}).to("#ground-pile", {
    stroke: "transparent",
    fill: "transparent",
    delay: 3,
    repeat: -1,
}).pause()


const playAnimation = () => {
    animateDirtLines.restart()
    animateWheels.restart()
    animateTruck.restart()
    animateTip.restart()
    animateTruckPile.restart()
    animateGroundPile.restart()
}

window.addEventListener("load", (e) => {
    playAnimation()
  })