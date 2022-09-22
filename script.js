const colors = ['blue', 'yellow', 'PaleVioletRed','red','brown','orange','green','pink','purple']
const image = []

const button = document.getElementById('button');

const container = document.getElementById('container')


button.addEventListener('click', randomRengliQutularyarat,)

button.addEventListener('click',changeableBackgroundColor)

function changeableBackgroundColor(){
    const randomColors = colors[Math.round(Math.random()* colors.length)]

    const container = document.getElementById('container')
    container.style.background = randomColors
}



function randomRengliQutularyarat() {

    const randomColor = colors[Math.round(Math.random()* colors.length)]
    
    const topPx = Math.round(Math.random()*800)

    const leftPx = Math.round(Math.random()*1200)
            
        
    const myDivEl = document.createElement('div')
    myDivEl.style.width= "30px"
    myDivEl.style.height= "30px"
    myDivEl.style.backgroundColor=randomColor
    myDivEl.style.borderRadius = '50%'
    myDivEl.style.position="absolute"
    myDivEl.style.left = `${leftPx}px`
    myDivEl.style.top = `${topPx}px`
    
    
    container.appendChild(myDivEl)
    
}


  