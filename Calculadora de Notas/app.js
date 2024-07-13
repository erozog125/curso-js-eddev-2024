// 1. Rango de la nota entre 1 y 5.
// 2. Máximo dos decimales.
// 3. La materia se gana con 3.5 o más.
// 4. Si la nota es 5 -> felicitaciones con el nombre del estudiante.
// 5. n1 * 0.3 + n2 * 0.3 + n1 * 0.4
// 6. Si la nota es igual o mayor a 3.5 hasta 4.99 mensaje en color verde.
// 7. Si reprueba en color rojo para el mensaje.

let username = prompt('Por favor ingrese su nombre')

let frmNotes = document.getElementById('frm-notes')

// let note1 = document.querySelector('#txt-note1')
let note1 = document.getElementById('txt-note1')
let note2= document.getElementById('txt-note2')
let note3 = document.getElementById('txt-note3')

let pResolve = document.getElementById('p-resolve')

frmNotes.addEventListener('submit', calculateNotes)

function calculateNotes(event) {
  event.preventDefault()
  let data1 = parseFloat(note1.value) * 0.3
  let data2 = parseFloat(note2.value) * 0.3
  let data3 = parseFloat(note3.value) * 0.4

  let response = (data1 + data2 + data3).toFixed(2)

  if(response < 3.5) {
    pResolve.textContent = `SR@ ${username}, su nota reprobada es: ${response}`
    pResolve.style.color = 'red'
  }  else if (response >= 3.5 && response < 5) {
    pResolve.textContent = `SR@ ${username}, su nota aprobada es: ${response}`
    pResolve.style.color = 'green'
  } else {
    pResolve.textContent = `SR@ ${username}, Felicitaciones, ha alcanzado la nota superior, ${response}`
    pResolve.style.color = 'orange'
  }


  // pResolve.textContent = `Sr@ei: ${username}, su nota definitiva es: ${response} `
}








