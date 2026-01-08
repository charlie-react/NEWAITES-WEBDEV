// console.log("Hello World!")
// alert("Tinubu is a thief")

// Variables

let info_store1 = 'Yello World'
let info_store2 = 'Another data'

console.log(info_store1)
console.log(info_store2)


// JAVASCRIPT DOM AND EVENTS

// document.getElementById("title").textContent = "Another text change"

const heading = document.getElementById("title")
heading.textContent ="We are changing the text"
heading.style.color = "green"

const button = document.getElementById("btn")
const navbar_container = document.getElementById("navbar")
const wrapper = document.getElementById("wrapper")
console.log(navbar_container)

function changeStyle(){
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

button.addEventListener("click",changeStyle)

// FUNCTIONS

// function greet(){
//     alert("Good evening")
// }

// greet()

function addNums(){
    const total = 5 + 5
    console.log(total)
}

addNums()

function subNums(){
    const result = 20-12
    console.log(result)
}

subNums()
