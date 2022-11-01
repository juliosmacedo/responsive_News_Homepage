const menubtn = document.getElementById('menuToggle')
const opacity = document.getElementById('darken')
const closebtn = document.getElementById('menu-icon')
let counter = 0;


menubtn.onclick = function opacity() {
    if (counter%2==0) {
    darken.style.display = 'block'
    counter++
    console.log(counter)
    return
    }

    if (counter%2!==0) {
        darken.style.display = 'none'
        counter++
        console.log(counter)
        return
        }
}
