// Grab the input field for a varable
var input = document.getElementById("addtask-input");

//Setup date and time
// For today's date
Date.prototype.today = function () { 
    return ((this.getMonth() < 10)?"0":"") + this.getMonth() +"/"+(((this.getDate()+1) < 10)?"0":"") + (this.getDate()+1) +"/"+ this.getFullYear();
}

// For the current time
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}
//Pack both of these into a varable for later use
var datetime = new Date().today() + " - " + new Date().timeNow();

// Fire up a function for our keyboard input
input.addEventListener("keypress", function(event) {
  // Detect the "Enter" key being pressed
  if (event.key === "Enter") {
    // Stop disater by preventing any default actions
    event.preventDefault();
    // And trigger the button element as if we had clicked on it anyway.
    document.getElementById("push").click();
  }
}); 

//Pick up on the add button for a click and trigger the party...
document.querySelector('#push').onclick = function(){
    //Check if the input is empty and throw an error if so
    if(document.querySelector('#addtask input').value.length == 0){
        alert("Please enter the task's name!")
    }

    //If it has text, let's add it to the page! (And add the date and time it was added here too!)
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    <h3>${document.querySelector('#addtask input').value}</h3>
                    <p>Date and time added | ${datetime}</p>
                </span>
                <button class="delete">
                    <h2>X</h2>
                </button>
            </div>
        `;
    
        //The RED button. (AKA Delete)
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
