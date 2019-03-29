let app = document.getElementById("app")


// create div
let div = document.createElement('div')

let state = 0
div.innerHTML = `
  <p>${state}</p>
  <button>+1</button>
  <button>Die</button>
`
// mount div
app.appendChild(div)

div.querySelector('button').onclick = () => {
  state += 1
  // update div
  div.querySelector('p').innerText = state
}

div.querySelectorAll('button')[1].onclick = ()=> {
  div.querySelector('button').onclick = null
  div.querySelectorAll('button')[1].onclick = null
  div.remove();
  div = null; // destory div
}