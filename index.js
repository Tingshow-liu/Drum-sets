// Add an event listener to detect mouse clicks
// 1st parameter (click): The event we want to listen (mouse click)
// 2nd parameter: The function we want to call after the event being listened (pass a function as an input, so it'll be called at a later time)

// Method 1: Named function (Only the 1st button)
/*
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I got clicked");
}
*/

// Method 2: Anonymous function (Only the 1st button)
/*
document.querySelector("button").addEventListener("click", function() {
    alert("I get clicked");
});
*/

// Use method 2 and apply to all the buttons
// Orders of the loop: Add event listener to all buttonss -> trigger the function for the certain button mouse-clicked by the user
for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // Play the sounds of different drums based on mouse clicks
        // this: The identity of the button (button object) that triggers the listener
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// Add event listener to the whole page to detect keyboard presses 
// event: Let's us tap into the event (keyboard button) that triggers the eventListener
// event.key: The "key" keyword is the key represented by the event (ex: "w" button)
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


// Play relavtive sounds based on mouse clicks/ keyboard presses
function makeSound(key) {
    switch (key) {
        // When buttonInnerHTML = "w" (<button class="w drum">w</button>)
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play(); 
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play(); 
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        // Like the else statement
        default: console.log(buttonInnerHTML);
    }
}


// Add animation to the website - button animation
function buttonAnimation(currentKey) {
    // Change the style of the clicked/ pressed button
    var activeButton = document.querySelector("." + currentKey);
    // Add the "pressed" class in the css file to the triggered button
    activeButton.classList.add("pressed");
    // We want the pressed class to be removed again after the click/ press, so the button will come back to its original type
    // First parameter: The function that will be executed, Second parameter: The milliseconds to wait before executing the function
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
