const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')

const removeFruit = item => {
    item.target.remove()
}
const addFruit = fruit => {
    if (!fruit) {
        return null
    }
    const li = document.createElement("li")
    li.textContent = fruit
    li.addEventListener("click", removeFruit, {once: true})
    fruitList.appendChild(li)
}
fruitForm.addEventListener("submit", e => {
    e.preventDefault()
    addFruit(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
})
console.log("fruitForm")
