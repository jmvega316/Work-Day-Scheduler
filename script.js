var addtask = document.getElementsByClassName("saveBtn")
var edittask = document.querySelector("#edittask")
var date = moment().format('dd, mm, yyyy');
var savetask = document.querySelector("savetask")

// moment to get current date

// using addeventlistener or .on() to target the button
console.log(addtask)
for (let i = 0; i < addtask.length; i++) {
addtask[i].addEventListener("click" , function(){
    console.log("click") 
    var text = addtask[i].previousSibling.previousSibling
    text = text.value
    // var text2 = $(this).siblings('.description').val()
    localStorage.setItem('hour' + i, text)
    console.log(localStorage.getItem('test'))
})
    
}

document.querySelector('#hour9').value = localStorage.getItem('hour0')

document.querySelector('#hour10').value = localStorage.getItem('hour1')

document.querySelector('#hour11').value = localStorage.getItem('hour2')

document.querySelector('#hour12').value = localStorage.getItem('hour3')

document.querySelector('#hour1').value = localStorage.getItem('hour4')

document.querySelector('#hour2').value = localStorage.getItem('hour5')

document.querySelector('#hour3').value = localStorage.getItem('hour6')

document.querySelector('#hour4').value = localStorage.getItem('hour7')

document.querySelector('#hour5').value = localStorage.getItem('hour8')





