const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')
const fruitNutrition = document.querySelector("#nutritionSection p")

const fetchFruitData = fruit => {
    //api function
    fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`) //get to this site
    .then(resp => resp.json() //turn into json what we found
    .then(data => addFruit(data)) //take the fruit and add the site
    .catch(e => console.error(e))) // or through an error
}
const removeFruit = item => {
    item.target.remove()
}
let totals = [0,0,0,0,0]
const addFruit = fruit => {
    const li = document.createElement("li")
    li.textContent = fruit.name
    // li.textContent = fruit.genus
    // li.textContent = fruit.family
    // li.textContent = fruit.order
    li.addEventListener("click", removeFruit, {once: true})
    fruitList.appendChild(li)
    totals[0] += fruit.nutritions.calories
    totals[1] += fruit.nutritions.carbohydrates
    totals[2] += fruit.nutritions.protein
    totals[3] += fruit.nutritions.fat 
    totals[4] += fruit.nutritions.sugar 
    totals.forEach = (value, index) => totals[index].textContent = value.toFixed(2)
}
fruitForm.addEventListener("submit", e => {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
})
console.log("fruitForm")
