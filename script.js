var clicksHistory = document.getElementById('clicks-history')
var input = document.getElementById('userinput')

function addRecord() {
    var now = new Date()
    var time = now.toLocaleTimeString()
    var li = `<li> <span>${input.value} </span> 
    <button onclick="editThis(this)" style = "background:none;"><i class="fa-solid fa-pen-to-square"></i> </button>
    <button onclick="deleteThis(this)" style = "background:none;"> <i class="fa-solid fa-xmark"></i></button> Time: ${time}
    </li>`
    clicksHistory.innerHTML += li
}


function deleteThis(currentElement) {
    currentElement.parentElement.remove()
}

function editThis(currentElement) {

    var newTxt = prompt(currentElement.parentElement.firstElementChild.innerText)

    currentElement.parentElement.firstElementChild.innerText = newTxt

}