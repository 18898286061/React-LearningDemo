let app = document.getElementById("app")

let div = document.createElement('div')

app.appendChild(div)

let state = 0

div.innerHTML = `
  <p>${state}</p>
  <button>+1</button>
`

div.querySelector('button').onclick = () => {
  state += 1
  div.querySelector('p').innerText = state
}