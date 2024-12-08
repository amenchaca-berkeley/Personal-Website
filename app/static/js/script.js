//DEBUGGING TEST
function printCheck() {
    console.log("Working");
}


//Personal Refresh Page Button
const refreshButton = document.getElementById('refresh_button');
function forRefreshButton() {
    location.reload();
}

//Personal Site Surprise Checkbox
const checkbox = document.getElementById('feedback_checkbox');
const message = document.getElementById('message');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        message.textContent = 'YOU ARE AWESOME!';
    } else {
        message.textContent = 'nvm );';
    }
});


//Personal Site Feedback Form
const jokeFormElement = document.getElementById('joke_form_container');
const jokeInput = document.getElementById('joke_form');
const ourResponse = document.getElementById('joke_response_message');
const unfunnyCounter = 0;

jokeFormElement.addEventListener('submit', function(event) {

    event.preventDefault();

    const userAnswer = jokeInput.value;
    if (userAnswer != '') {
        ourResponse.textContent = 'Not funny dude.';
        unfunnyCounter += 1;
    } else {
        ourResponse.textContent = 'I want to laugh';
    }
})






