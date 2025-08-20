//JS TO CHANGE WORDS IN EVERY 5 SECONDS
const words = ["Mayza", "a Designer", "a Developer"];
let index = 0;
const change_name = document.getElementById("change-name");

function changeWord() {
    //Add animation
    change_name.classList.add("slide-up");

    //limite of 5 seconds to change word
    setTimeout(() => {
        index = (index + 1) % words.length;
        change_name.textContent = words[index];

        //Goes up and down
        change_name.classList.remove("slide-up");
        change_name.classList.add("slide-down");
    }, 400);

    //Removes class after animation
    setTimeout(() => {
        change_name.classList.remove("slide-down");
    }, 1000);
}

setInterval(changeWord, 4000);