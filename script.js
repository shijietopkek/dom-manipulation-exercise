 const container = document.querySelector("#container")

 const content = document.createElement("div")
content.classList.add("content")
content.textContent="This is the glorious text-content!";

container.appendChild(content)

const redText = document.createElement("p")
redText.textContent = "Hey I'm red!"
redText.style.cssText="color:red"

container.appendChild(redText)

const blueText = document.createElement("h3")
blueText.textContent="I'm a blue h3!"
blueText.style.cssText="color:blue"

container.appendChild(blueText)

const div = document.createElement("div")
div.style.border="1px solid black"
div.style.backgroundColor="pink"

const divChildOne = document.createElement("h1")
divChildOne.textContent="I'm in a div"

const divChildTwo = document.createElement("p")
divChildTwo.textContent="ME TOO!"

div.appendChild(divChildOne)
div.appendChild(divChildTwo)

container.appendChild(div)

const btn = document.querySelector("button")

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
btn.addEventListener("click",function (e){
    e.target.style.background='blue'
})