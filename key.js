const a=['a','s','d','f','j','k','l']
const b =['e','r','u','i','o']

const keys = document.querySelectorAll('.key')
const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')

keys.forEach(key =>{
    key.addEventListener('click', () => playnote(key))
})

//Function to play piano
function playnote(key){
    const audiokey = document.getElementById(key.dataset.note)
    audiokey.currentTime=0
    audiokey.play()
    key.classList.add('active')
    audiokey.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

//Function for keyboard piano button
document.addEventListener('keydown',(e)=>{
    const key = e.key;
    const windex = a.indexOf(key);
    const bindex = b.indexOf(key);
    if(windex > -1){
        playnote(whitekeys[windex])
    }
    else if(bindex > -1){
        playnote(blackkeys[bindex])
    }
})

var current_mode = screen.orientation;

// type
console.log(current_mode.type)

// angle
console.log(current_mode.angle)