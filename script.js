// console.log("Hello World!")
// alert("Tinubu is a thief")

// Variables

let info_store1 = 'Yello World'
let info_store2 = 'Another data'

console.log(info_store1)
console.log(info_store2)


// JAVASCRIPT DOM AND EVENTS

// document.getElementById("title").textContent = "Another text change"

// const heading = document.getElementById("title")
// heading.textContent = "We are changing the text"
// heading.style.color = "green"

// const button = document.getElementById("btn")
const navbar_container = document.getElementById("navbar")
const wrapper = document.getElementById("wrapper")
console.log(navbar_container)

function changeStyle() {
    //    heading.textContent ='You just clicked the button below!' 
    //    heading.style.color ='red'
    // navbar_container.style.color = "yellow"
    wrapper.style.backgroundColor = "orange"
}

// button.addEventListener("click",function(){
// //    heading.textContent ='You just clicked the button below!' 
// //    heading.style.color ='red'
// navbar_container.style.color = "yellow"
// wrapper.style.backgroundColor = "orange"
// })

// button.addEventListener("click", changeStyle)


const heading = document.getElementById("heading")
console.log(heading)
const newForm = document.getElementById("newform")
console.log(newForm)
const newBtn = document.getElementById("newbtn")
console.log(newBtn)

function changeMessage(){

    if(heading.textContent ==="Welcome"){
        heading.textContent = "Hello there"
        heading.style.color= "green"
    }
    else{
        heading.textContent = "Welcome"
        heading.style.color = "black"
    }
}

// function changeFormStyle() {
//     newForm.style.backgroundColor = "red"
// }

newBtn.addEventListener("click", changeMessage)

// FUNCTIONS

// function greet(){
//     alert("Good evening")
// }

// greet()

function addNums() {
    const total = 5 + 5
    console.log(total)
}

addNums()

function subNums() {
    const result = 20 - 12
    console.log(result)
}

subNums()


// IF/ELSE STATEMENT

// let age = 18

// if (age>=18){
//     alert("You can vote!")
// }else{
//     alert("Go home, you never reach")
// }

// function checkAge(){
// let age = 18

// if (age>=18){
//     alert("You can vote!")
// }else{
//     alert("Go home, you never reach")
// }

// }

// checkAge()